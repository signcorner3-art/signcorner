"use client";

import React, { useState, DragEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    source: "",
    description: "",
    captchaToken: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const [selectedDesc, setSelectedDesc] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // file handlers
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
  };
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]);
  };

  // captcha
  const handleCaptcha = (token: string | null) => {
    setFormData({ ...formData, captchaToken: token || "" });
  };

  // submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      // verify captcha
      const captchaRes = await fetch("/api/verify-captcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: formData.captchaToken }),
      });
      const captchaData = await captchaRes.json();
      if (!captchaData.success) {
        setErrorMessage("Captcha verification failed. Please try again.");
        setLoading(false);
        return;
      }

      // send form data (multipart)
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("source", selectedSource || "");
      data.append("description", selectedDesc || "");
      data.append("service", formData.service);
      data.append("message", formData.message);
      if (file) data.append("file", file, file.name);

      const emailRes = await fetch("/api/send-email", {
        method: "POST",
        body: data,
      });

      const emailData = await emailRes.json();
      if (emailData.success) {
        setSuccessMessage("✅ Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          source: "",
          description: "",
          captchaToken: "",
        });
        setFile(null);
        setSelectedSource(null);
        setSelectedDesc(null);
      } else {
        setErrorMessage("❌ Failed to send email. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("⚠️ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-300 py-12 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto bg-[#0b0b0b] rounded-xl p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white">LEAVE US YOUR INFO</h2>
        <p className="italic text-gray-400 mb-8 text-center text-sm sm:text-base">and we will get back to you.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name / Email / Phone */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>

          {/* Referral Source */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">How did you hear about us?</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {["REFERRAL", "SOCIAL MEDIA", "GOOGLE", "OTHER"].map((source) => (
                <button
                  key={source}
                  type="button"
                  onClick={() => setSelectedSource(source)}
                  className={`py-3 rounded-md transition-all font-semibold border ${
                    selectedSource === source ? "bg-blue-600 text-white" : "bg-white text-black hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {source}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">What best describes you?</label>
            <div className="grid grid-cols-2 gap-3">
              {["BUSINESS / COMMERCIAL", "PERSONAL / RESIDENTIAL"].map((desc) => (
                <button
                  key={desc}
                  type="button"
                  onClick={() => setSelectedDesc(desc)}
                  className={`py-3 rounded-md transition-all font-semibold border ${
                    selectedDesc === desc ? "bg-blue-600 text-white" : "bg-white text-black hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {desc}
                </button>
              ))}
            </div>
          </div>

          {/* Service & Message */}
          <div className="space-y-4">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-600 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Service</option>
              <option>Web Design</option>
              <option>Development</option>
              <option>Consultation</option>
            </select>

            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* File Upload (responsive) */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Do you have a logo file or an existing design to send to us?
            </label>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`w-full border-2 border-dashed rounded-md py-8 sm:py-10 text-center transition-all duration-300 cursor-pointer ${
                isDragging ? "bg-blue-900 border-blue-400" : "bg-[#1c1c1c] border-gray-400"
              }`}
            >
              <p className="font-bold text-lg text-white">Drag & Drop Files Here</p>
              <p className="text-sm text-gray-300 my-2">or</p>
              <label className="cursor-pointer text-blue-400 font-semibold underline inline-block">
                Browse Files
                <input type="file" className="hidden" onChange={handleFileChange} />
              </label>
              {file && <p className="mt-2 text-sm text-white">Selected File: {file.name}</p>}
            </div>
          </div>

          {/* Captcha centered */}
          <div className="flex justify-center">
            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} onChange={handleCaptcha} />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>

          {successMessage && <p className="text-green-400 text-center">{successMessage}</p>}
          {errorMessage && <p className="text-red-400 text-center">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}
