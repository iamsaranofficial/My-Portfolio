import { Icon } from "@iconify/react";

const LanguagesAndEducation = () => {
  return (
    <section id="languages-education" className="languages-education-section">
      <div className="languages-education-grid">
        <div>
          <h2 className="languages-title">Languages</h2>

          <div className="languages-list">
            <div className="language-item">
              <div className="language-header">
                <span className="language-name">Tamil</span>
                <span className="language-percentage">95%</span>
              </div>
              <div className="language-bar-bg">
                <div
                  className="language-bar-fill"
                  style={{ width: "95%" }}
                >
                  <div className="language-bar-dot"></div>
                </div>
              </div>
            </div>

            <div className="language-item">
              <div className="language-header">
                <span className="language-name">English</span>
                <span className="language-percentage">85%</span>
              </div>
              <div className="language-bar-bg">
                <div
                  className="language-bar-fill"
                  style={{ width: "85%" }}
                >
                  <div className="language-bar-dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="education-title">Education</h2>

          <div className="education-list">
            <div className="education-item">
              <div className="education-icon-wrapper">
                <div className="education-icon">
                  <Icon icon="mdi:school" />
                </div>
              </div>
              <div className="education-content">
                <h3 className="education-school">Udaya College of arts and science</h3>
                <p className="education-degree">
                  Msc Computer Science
                </p>
                <p className="education-year">2021 - 2023</p>
              </div>
            </div>

            <div className="education-item">
              <div className="education-icon-wrapper">
                <div className="education-icon">
                  <Icon icon="mdi:book-open-page-variant" />
                </div>
              </div>
              <div className="education-content">
                <h3 className="education-school">Udaya College of arts and science</h3>
                <p className="education-degree">Bsc Computer Science</p>
                <p className="education-year">2018 - 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesAndEducation;
