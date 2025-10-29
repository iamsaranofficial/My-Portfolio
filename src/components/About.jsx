const skills = [
    { name: "Learning & Growth", percentage: 90 },
    { name: "Problem Solving", percentage: 85 },
    { name: "Code with Creativity", percentage: 95 },
    { name: "Teamwork & Communication", percentage: 80 },
];

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-grid">
                <div className="about-image-wrapper">
                    <div className="about-image">
                        <img
                            src="/images/saran.jpg"
                            alt="About Saran"
                        />
                    </div>
                </div>

                <div className="about-content">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-description">
                        Python Backend & React Developer | Self-taught coder from Kanyakumari | Building projects, learning every day 🚀
                    </p>

                    <div className="skills-list">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <div className="skill-header">
                                    <span className="skill-name">
                                        {skill.name}
                                    </span>
                                    <span className="skill-percentage">
                                        {skill.percentage}%
                                    </span>
                                </div>
                                <div className="skill-bar-bg">
                                    <div
                                        className="skill-bar-fill"
                                        style={{ width: `${skill.percentage}%` }}
                                    >
                                        <div className="skill-bar-dot"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
