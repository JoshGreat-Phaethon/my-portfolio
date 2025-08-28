import React from "react";

const Projects = () => {
  return (
    <div className="page">
      <section className="projects-page">
        <div className="projects-header">
          <h1>Proyek Saya</h1>
          <p>Koleksi proyek yang telah saya kerjakan selama belajar di SMK</p>
        </div>
        <div className="projects-container">
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-content">
                <h3 className="project-title">🌐 Website Portfolio SMK</h3>
                <p className="project-description">
                  Website portfolio personal yang dibuat untuk menampilkan
                  skills dan proyek-proyek saya.
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-content">
                <h3 className="project-title">🔋 Eco Enzyme Battery</h3>
                <p className="project-description">
                  Proyek inovasi untuk menciptakan battery ramah lingkungan
                  menggunakan eco enzyme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
