"use client";

import { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Forms() {
  const openLink = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
  const [datum, setDatum] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const hdlsbt = (e) => {
    const { value, name } = e.target;
    setDatum((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onclk = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const reply = await fetch("/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datum),
      });

      if (!reply.ok) throw new Error("Server Error");

      await reply.json();

      setStatusMessage("✅ Message sent successfully!");

      setDatum({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      setStatusMessage("❌ Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="
        w-full
        max-w-7xl
        mx-auto
        my-10
        px-4
        sm:px-6
        font-mono
      "
      id="contact"
    >
      <div
        className="
          border
          border-[#00ff41]/20
          bg-black/50
          rounded-lg
          overflow-hidden
        "
      >
        {/* Header */}
        <h1
          className="
            text-[clamp(1rem,3vw,1.5rem)]
            text-[#00ff41]
            p-4
            border-b
            border-[#00ff41]/20
          "
        >
          Terminal C://users/arsath/Contact{">"}
        </h1>

        {/* Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2">
          
          {/* Map */}
          <div
            className="
              p-4
              border-b
              xl:border-b-0
              xl:border-r
              border-[#00ff41]/20
            "
          >
            <div
              className="
                h-[250px]
                sm:h-[350px]
                md:h-[450px]
                xl:h-full
                min-h-[300px]
              "
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15546.449847435624!2d80.24229022755051!3d13.060322049011651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666ab9f01f69%3A0x4a84719721211f35!2sThousand%20Lights%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1780970901088!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="
                  w-full
                  h-full
                  rounded-md
                  border
                  border-[#00ff41]/20
                "
              />
            </div>
          </div>

          {/* Contact Side */}
          <div
            className="
              bg-black
              flex
              flex-col
              justify-center
              items-center
              p-5
              sm:p-8
              lg:p-10
            "
          >
            {/* Social Buttons */}
            {/* Social Buttons */}
<div
  className="
    grid
    grid-cols-2
    sm:grid-cols-3
    gap-3
    w-full
    max-w-xl
    mb-8
  "
>
  {/* GitHub */}
  <button
    onClick={() => openLink("https://github.com/Arsath-md")}
    className="
      w-full
      flex
      items-center
      justify-center
      gap-2
      py-3
      px-3
      border
      border-[#00ff41]/20
      text-[#00ff41]
      hover:bg-[#00ff41]
      hover:text-black
      transition-all
    "
  >
    <FaGithub />
    <span>Github</span>
  </button>

  {/* LinkedIn */}
  <button
    onClick={() =>
      openLink("https://www.linkedin.com/in/mohamed-arsath-m")
    }
    className="
      w-full
      flex
      items-center
      justify-center
      gap-2
      py-3
      px-3
      border
      border-[#00ff41]/20
      text-[#00ff41]
      hover:bg-[#00ff41]
      hover:text-black
      transition-all
    "
  >
    <FaLinkedinIn />
    <span>LinkedIn</span>
  </button>

  {/* Instagram */}
  <button
    onClick={() => openLink("https://instagram.com/vippi31")}
    className="
      w-full
      flex
      items-center
      justify-center
      gap-2
      py-3
      px-3
      border
      border-[#00ff41]/20
      text-[#00ff41]
      hover:bg-[#00ff41]
      hover:text-black
      transition-all
    "
  >
    <FaInstagram />
    <span>Instagram</span>
  </button>

  {/* Phone */}
  <button
    onClick={() => (window.location.href = "tel:+918838607001")}
    className="
      w-full
      flex
      items-center
      justify-center
      gap-2
      py-3
      px-3
      border
      border-[#00ff41]/20
      text-[#00ff41]
      hover:bg-[#00ff41]
      hover:text-black
      transition-all
    "
  >
    <FaPhoneAlt />
    <span>8838607001</span>
  </button>

  {/* Email */}
  <button
    onClick={() =>
      (window.location.href = "mailto:mdarsath.m2003@gmail.com")
    }
    className="
      w-full
      flex
      items-center
      justify-center
      gap-2
      py-3
      px-3
      border
      border-[#00ff41]/20
      text-[#00ff41]
      hover:bg-[#00ff41]
      hover:text-black
      transition-all
    "
  >
    <IoMdMail />
    <span>Email</span>
  </button>
</div>

            {/* Form Card */}
            <div
              className="
                w-full
                max-w-xl
                border
                border-[#00ff41]/20
                bg-black/70
                p-5
                sm:p-8
                rounded-lg
              "
            >
              <div className="text-center mb-6">
                <h2
                  className="
                    text-[clamp(1.5rem,4vw,2.2rem)]
                    font-bold
                    text-[#00ff41]
                  "
                >
                  Get in Touch
                </h2>

                <p className="text-sm text-[#00ff41]/60 mt-2">
                  Have a question or want to work together?
                </p>
              </div>

              <form onSubmit={onclk} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block mb-2 text-xs uppercase tracking-widest text-[#00ff41]/70">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={datum.name}
                    onChange={hdlsbt}
                    required
                    placeholder="John Doe"
                    className="
                      w-full
                      px-4
                      py-3
                      bg-black
                      border
                      border-[#00ff41]/20
                      rounded-md
                      text-[#00ff41]
                      placeholder:text-[#00ff41]/40
                      focus:outline-none
                      focus:border-[#00ff41]
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 text-xs uppercase tracking-widest text-[#00ff41]/70">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={datum.email}
                    onChange={hdlsbt}
                    required
                    placeholder="john@example.com"
                    className="
                      w-full
                      px-4
                      py-3
                      bg-black
                      border
                      border-[#00ff41]/20
                      rounded-md
                      text-[#00ff41]
                      placeholder:text-[#00ff41]/40
                      focus:outline-none
                      focus:border-[#00ff41]
                    "
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block mb-2 text-xs uppercase tracking-widest text-[#00ff41]/70">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={datum.phone}
                    onChange={hdlsbt}
                    placeholder="+91 9876543210"
                    className="
                      w-full
                      px-4
                      py-3
                      bg-black
                      border
                      border-[#00ff41]/20
                      rounded-md
                      text-[#00ff41]
                      placeholder:text-[#00ff41]/40
                      focus:outline-none
                      focus:border-[#00ff41]
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-2 text-xs uppercase tracking-widest text-[#00ff41]/70">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={datum.message}
                    onChange={hdlsbt}
                    required
                    rows={5}
                    placeholder="Type your message..."
                    className="
                      w-full
                      px-4
                      py-3
                      bg-black
                      border
                      border-[#00ff41]/20
                      rounded-md
                      text-[#00ff41]
                      placeholder:text-[#00ff41]/40
                      resize-y
                      min-h-[120px]
                      focus:outline-none
                      focus:border-[#00ff41]
                    "
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full
                    py-3
                    border
                    border-[#00ff41]
                    text-[#00ff41]
                    font-bold
                    hover:bg-[#00ff41]
                    hover:text-black
                    transition-all
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                  "
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {statusMessage && (
                  <p
                    className={`text-center text-sm ${
                      statusMessage.includes("✅")
                        ? "text-[#00ff41]"
                        : "text-red-400"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}