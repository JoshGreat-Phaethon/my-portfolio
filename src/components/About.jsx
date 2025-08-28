import React from "react";
import GabrielPhoto from "../assets/gabriel.jpg";
const About = () => {
  return (
    <div className="page">
      <section className="about-page">
        <div className="about-header">
          <h1>Tentang Saya</h1>
          <p>
            Mengenal lebih dekat dengan perjalanan saya di dunia programming
          </p>
        </div>
        <div className="about-content">
          <div className="about-image">
            <img
              src={GabrielPhoto}
              alt="Foto Gabriel"
              className="profile-photo"
            />

            <h3>SMK Negeri 8 Malang</h3>
            <p>Kelas 11 - Frontend Developer</p>
          </div>
          <div className="about-text">
            <p>
              Halo! Saya adalah siswa kelas 11 di SMK Negeri 8 Malang yang
              memiliki passion mendalam dalam bidang pengembangan web.
            </p>
            <h3>🎯 Visi & Misi</h3>
            <p>
              Saya selalu antusias untuk belajar teknologi baru dan
              mengembangkan keterampilan programming saya.
            </p>
            <h3>💡 Filosofi Belajar</h3>
            <p>
              Saya percaya praktek langsung adalah cara terbaik untuk menguasai
              skill programming.
            </p>
            <h3>🚀 Tujuan Masa Depan</h3>
            <p>
              Dengan semangat belajar yang tinggi dan dukungan dari SMK Negeri 8
              Malang, saya bertekad terus mengembangkan kemampuan saya.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
