"use client";

import React, { useState, DragEvent } from "react";
import Recapza from "../components/Recapza";

export default function ContactForm() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const [selectedDesc, setSelectedDesc] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    description: "",
    service: "",
    message: "",
    captchaToken: "",
  });

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (token: string | null) => {
    setFormData({ ...formData, captchaToken: token || "" });
  };

  React.useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      source: selectedSource || "",
      description: selectedDesc || "",
    }));
  }, [selectedSource, selectedDesc]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const captchaRes = await fetch("/api/verify-captcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: formData.captchaToken }),
      });

      const captchaData = await captchaRes.json();
      console.log("captchaData:", captchaData);

      if (!captchaData.success) {
        setErrorMessage("Captcha verification failed. Please try again.");
        setLoading(false);
        return;
      }

      const emailRes = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, fileName: file?.name || "" }),
      });

      const emailData = await emailRes.json();
      console.log("emailData:", emailData);

      if (emailData.success) {
        setSuccessMessage("✅ Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          source: "",
          description: "",
          service: "",
          message: "",
          captchaToken: "",
        });
        setFile(null);
        setSelectedDesc(null);
        setSelectedSource(null);
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
    <section className="bg-[#0b0b0b] py-16 px-6 md:px-20 text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white">LEAVE US YOUR INFO</h2>
        <p className="italic text-gray-400 mb-10 text-center">and we will get back to you.</p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name, Email, Phone */}
          <div className="grid md:grid-cols-3 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Referral Source */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              How did you hear about us?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["REFERRAL", "SOCIAL MEDIA", "GOOGLE", "OTHER"].map((source) => (
                <button
                  key={source}
                  type="button"
                  onClick={() => setSelectedSource(source)}
                  className={`py-3 rounded-md transition-all font-semibold border border-gray-400 ${
                    selectedSource === source
                      ? "bg-blue-600 text-white"
                      : "bg-white text-black hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {source}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              What best describes you?
            </label>
            <div className="grid grid-cols-2 gap-4">
              {["BUSINESS / COMMERCIAL", "PERSONAL / RESIDENTIAL"].map((desc) => (
                <button
                  key={desc}
                  type="button"
                  onClick={() => setSelectedDesc(desc)}
                  className={`py-3 rounded-md transition-all font-semibold border border-gray-400 ${
                    selectedDesc === desc
                      ? "bg-blue-600 text-white"
                      : "bg-white text-black hover:bg-blue-500 hover:text-white"
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
              className="w-full px-4 py-3 rounded-md border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Do you have a logo file or an existing design to send to us?
            </label>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-md py-10 text-center transition-all duration-300 cursor-pointer ${
                isDragging ? "bg-blue-900 border-blue-400" : "bg-[#1c1c1c] border-gray-400"
              }`}
            >
              <p className="font-bold text-lg text-white">Drag & Drop Files Here</p>
              <p className="text-sm text-gray-300 my-2">or</p>
              <label className="cursor-pointer text-blue-400 font-semibold underline">
                Browse Files
                <input type="file" className="hidden" onChange={handleFileChange} />
              </label>
              {file && <p className="mt-2 text-sm text-white">Selected File: {file.name}</p>}
            </div>
          </div>

          {/* Google reCAPTCHA */}
          <div className="flex justify-center">
            <Recapza siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onVerify={handleCaptchaChange} />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold transition ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {successMessage && (
            <p className="text-green-600 text-center font-medium">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-red-600 text-center font-medium">{errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}
