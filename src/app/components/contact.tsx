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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (token: string | null) => {
    setFormData({ ...formData, captchaToken: token || "" });
  };

  React.useEffect(() => {
    setFormData((prev) => ({ ...prev, source: selectedSource || "", description: selectedDesc || "" }));
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
        setFormData({ name: "", email: "", phone: "", source: "", description: "", service: "", message: "", captchaToken: "" });
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
          {/* ... rest of your form fields (unchanged) ... */}

          <div className="flex justify-center">
            {/* pass explicit siteKey here OR rely on env var inside Recapza */}
            <Recapza siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onVerify={handleCaptchaChange} />
          </div>

          <button type="submit" disabled={loading} className={`w-full py-3 rounded-lg text-white font-semibold transition ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {successMessage && <p className="text-green-600 text-center font-medium">{successMessage}</p>}
          {errorMessage && <p className="text-red-600 text-center font-medium">{errorMessage}</p>}
        </form>
      </div>
    </section>
  );
}
