const Projects = ({ activeFilter, setActiveFilter }) => {
  const filterCategories = [
    "All",
    "UI/UX",
    "Frontend",
    "Mini Projects",
    "Others",
  ];
  const projects = [
    {
      title: "Ecom Website",
      category: "Frontend",
      image:
        "./images/ECom-website.jpg"
,
    },
    {
      title: "Portfolio",
      category: "Frontend",
      image:
        "./images/Portfolio.jpg"
    },
    {
      title: "React Mini project",
      category: "Mini Projects",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Ecom Web Page Design",
      category: "UI/UX",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=entropy&auto=format",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-description">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus lectus. Phasellus consequat urna tellus
        </p>

        <div className="filter-buttons">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`filter-btn ${activeFilter === category ? "active" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="project-content">
              <span className="project-category">
                {project.category}
              </span>
              <h3 className="project-title">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
