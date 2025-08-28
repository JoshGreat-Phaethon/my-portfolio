import React from "react";
import "../Styles/App.css"; // pastikan styling-nya ikut

const Contact = () => {
  return (
    <div className="page contact-page">
      <section className="contact-container">
        <h1 className="contact-title">📩 Hubungi Saya</h1>
        <p className="contact-subtitle">
          Jika kamu ingin berdiskusi, berkolaborasi, atau sekadar menyapa,
          silakan hubungi saya melalui platform berikut:
        </p>

        <div className="contact-links">
          <a
            href="mailto:wangiindah257@gmail.com"
            className="contact-btn email"
            target="_blank"
            rel="noopener noreferrer"
          >
            📧 Email
          </a>

          <a
            href="https://instagram.com/gabriel_jap6"
            className="contact-btn instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            📸 Instagram
          </a>

          <a
            href="https://github.com/JoshGreat-Phaethon"
            className="contact-btn github"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐱 GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
