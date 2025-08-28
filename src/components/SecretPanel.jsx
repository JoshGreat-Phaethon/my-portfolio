import React from "react";
import hinaimage from "../assets/hina.jpeg";

const SecretPanel = ({ setShowSecret }) => {
  return (
    <>
      <div
        className="secret-overlay"
        onClick={() => setShowSecret(false)}
      ></div>
      <div className="secret-panel">
        <button className="close-btn" onClick={() => setShowSecret(false)}>
          ×
        </button>
        <div className="secret-content">
          <img
            src={hinaimage}
            alt="Foto istri Gabriel"
            className="profile-photo"
          />
          <h3 style={{ marginBottom: "2rem", color: "#e74c3c" }}>
            Special Section 💕
          </h3>
          <div
            style={{ color: "#e0e0e0", lineHeight: "1.7", textAlign: "left" }}
          >
            <p>
              <strong style={{ color: "#e74c3c" }}>Sorasaki Hina</strong> adalah
              karakter istimewa dan istri saya.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecretPanel;
