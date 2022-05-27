import tenantively from "../../assets/tenantively.png";
import newJobsYou from "../../assets/newjobsyou-screenshot.png";
import sayWhatYouWill from "../../assets/say-what-you-will.png";
import soOnThatNote from "../../assets/so-on-that-note.png";
import weatherDashboard from "../../assets/weather-dashboard.png";
import taskMasterPro from "../../assets/taskmaster-pro.png";
import workDayScheduler from "../../assets/work-day-scheduler.png";
import jsCodeQuiz from "../../assets/js-code-quiz.png";
import alexanderTheGreat from "../../assets/alexander-the-great.png";

function MyWork() {
  return (
    <div className="work-container">
      <section className="my-work" id="work">
        <h2 className="section-title">My Work</h2>
        <p className="section-subtitle section-subtitle-work">
          A brief introduction to my body of work
        </p>

        <div className="portfolio">
          {/* portfolio item */}
          <div className="project-container">
            <div className="portfolio-container">
              <img src={tenantively} alt="" className="portfolio-img" />
              <div className="portfolio-info">
                <p className="portfolio-item-links">
                  <a
                    href="https://glacial-temple-16968.herokuapp.com/"
                    className="portfolio-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Property Listings
                  </a>
                  <a
                    className="repository-link"
                    href="https://github.com/SpencerHulse/tenantively-maybe-probably"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github github-portfolio-link"></i>
                  </a>
                </p>
                <span>Node / AWS s3 Bucket / Sequelize</span>
              </div>
            </div>
          </div>
          {/* portfolio item */}
          <div className="project-container">
            <div className="portfolio-container">
              <img src={newJobsYou} alt="" className="portfolio-img" />
              <div className="portfolio-info">
                <p className="portfolio-item-links">
                  <a
                    href="https://spencerhulse.github.io/newJobs-you/landingpage.html"
                    className="portfolio-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Job Aggregator
                  </a>
                  <a
                    className="repository-link"
                    href="https://github.com/SpencerHulse/tenantively-maybe-probably"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github github-portfolio-link"></i>
                  </a>
                </p>
                <span>JavaScript / jQuery / Materialize</span>
              </div>
            </div>
          </div>
          {/* portfolio item */}
          <div className="project-container">
            <div className="portfolio-container">
              <img src={sayWhatYouWill} alt="" className="portfolio-img" />
              <div className="portfolio-info">
                <p className="portfolio-item-links">
                  <a
                    href="https://quiet-caverns-00317.herokuapp.com/"
                    className="portfolio-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Blog
                  </a>
                  <a
                    className="repository-link"
                    href="https://github.com/SpencerHulse/say-what-you-will"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github github-portfolio-link"></i>
                  </a>
                </p>
                <span>JavaScript / Node</span>
              </div>
            </div>
          </div>
          {/* portfolio item */}
          <div className="project-container">
            <div className="portfolio-container">
              <img src={soOnThatNote} alt="" className="portfolio-img" />
              <div className="portfolio-info">
                <p className="portfolio-item-links">
                  <a
                    href="https://mysterious-woodland-45975.herokuapp.com/"
                    className="portfolio-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Note Taker
                  </a>
                  <a
                    className="repository-link"
                    href="https://github.com/SpencerHulse/so-on-that-note"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github github-portfolio-link"></i>
                  </a>
                </p>
                <span>JavaScript / Node</span>
              </div>
            </div>
          </div>
          {/* portfolio item */}
          <div className="project-container">
            <div className="portfolio-container">
              <img src={weatherDashboard} alt="" className="portfolio-img" />
              <div className="portfolio-info">
                <p className="portfolio-item-links">
                  <a
                    href="https://spencerhulse.github.io/the-weather-of-today/"
                    className="portfolio-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Weather Dashboard
                  </a>
                  <a
                    className="repository-link"
                    href="https://github.com/SpencerHulse/the-weather-of-today"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github github-portfolio-link"></i>
                  </a>
                </p>
                <span>JavaScript / jQuery / Bootstrap</span>
              </div>
            </div>
          </div>
          {/* portfolio item */}
          <div className="project-container">
            <div className="portfolio-container">
              <img src={taskMasterPro} alt="" className="portfolio-img" />
              <div className="portfolio-info">
                <p className="portfolio-item-links">
                  <a
                    href="https://spencerhulse.github.io/taskmaster-pro/"
                    className="portfolio-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kanban Board
                  </a>
                  <a
                    className="repository-link"
                    href="https://github.com/SpencerHulse/taskmaster-pro"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github github-portfolio-link"></i>
                  </a>
                </p>
                <span>JavaScript / jQuery / Bootstrap</span>
              </div>
            </div>
          </div>
          {/* portfolio item */}
          <div className="project-container">
            <div className="portfolio-container">
              <img src={workDayScheduler} alt="" className="portfolio-img" />
              <div className="portfolio-info">
                <p className="portfolio-item-links">
                  <a
                    href="https://spencerhulse.github.io/the-only-work-day-scheduler-you-need/"
                    className="portfolio-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Scheduler
                  </a>
                  <a
                    className="repository-link"
                    href="https://github.com/SpencerHulse/the-only-work-day-scheduler-you-need"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github github-portfolio-link"></i>
                  </a>
                </p>
                <span>JavaScript / jQuery / Bootstrap</span>
              </div>
            </div>
          </div>
          {/* portfolio item */}
          <div className="project-container">
            <div className="portfolio-container">
              <img src={jsCodeQuiz} alt="" className="portfolio-img" />
              <div className="portfolio-info">
                <p className="portfolio-item-links">
                  <a
                    href="https://spencerhulse.github.io/the-ultimate-js-code-quiz/"
                    className="portfolio-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Quiz
                  </a>
                  <a
                    className="repository-link"
                    href="https://github.com/SpencerHulse/the-ultimate-js-code-quiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github github-portfolio-link"></i>
                  </a>
                </p>
                <span>JavaScript</span>
              </div>
            </div>
          </div>
          {/* portfolio item */}
          <div className="project-container">
            <div className="portfolio-container">
              <img src={alexanderTheGreat} alt="" className="portfolio-img" />
              <div className="portfolio-info">
                <p className="portfolio-item-links">
                  <a
                    href="https://spencerhulse.github.io/alexander-tg-tribute/"
                    className="portfolio-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tribute Page
                  </a>
                  <a
                    className="repository-link"
                    href="https://github.com/SpencerHulse/alexander-tg-tribute"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github github-portfolio-link"></i>
                  </a>
                </p>
                <span>JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyWork;
