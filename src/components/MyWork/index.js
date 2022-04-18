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
    <section className="my-work" id="work">
      <h2 className="section-title">My Work</h2>
      <p className="section-subtitle section-subtitle-work">
        A brief introduction to my body of work
      </p>

      <div className="portfolio">
        {/* portfolio item */}
        <div className="project-container">
          <div className="portfolio-container">
            <a href="/project/1" className="portfolio-item">
              <img src={tenantively} alt="" className="portfolio-img" />
              <p className="portfolio-info">
                Property Listings<span>Node / AWS s3 Bucket / Sequelize</span>
              </p>
            </a>
          </div>
        </div>
        {/* portfolio item */}
        <div className="project-container">
          <div className="portfolio-container">
            <a href="/project/2" className="portfolio-item">
              <img src={newJobsYou} alt="" className="portfolio-img" />
              <p className="portfolio-info">
                Job Aggregator<span>JavaScript / jQuery / Materialize</span>
              </p>
            </a>
          </div>
        </div>
        {/* portfolio item */}
        <div className="project-container">
          <div className="portfolio-container">
            <a href="/project/3" className="portfolio-item">
              <img src={sayWhatYouWill} alt="" className="portfolio-img" />
              <p className="portfolio-info">
                Blog<span>JavaScript / Node</span>
              </p>
            </a>
          </div>
        </div>
        {/* portfolio item */}
        <div className="project-container">
          <div className="portfolio-container">
            <a href="/project/4" className="portfolio-item">
              <img src={soOnThatNote} alt="" className="portfolio-img" />
              <p className="portfolio-info">
                Note Taker<span>JavaScript / Node</span>
              </p>
            </a>
          </div>
        </div>
        {/* portfolio item */}
        <div className="project-container">
          <div className="portfolio-container">
            <a href={"/project/5"} className="portfolio-item">
              <img src={weatherDashboard} alt="" className="portfolio-img" />
              <p className="portfolio-info">
                Weather Dashboard<span>JavaScript / jQuery / Bootstrap</span>
              </p>
            </a>
          </div>
        </div>
        {/* portfolio item */}
        <div className="project-container">
          <div className="portfolio-container">
            <a href="/project/6" className="portfolio-item">
              <img src={taskMasterPro} alt="" className="portfolio-img" />
              <p className="portfolio-info">
                Kanban Board<span>JavaScript / jQuery / Bootstrap</span>
              </p>
            </a>
          </div>
        </div>
        {/* portfolio item */}
        <div className="project-container">
          <div className="portfolio-container">
            <a href="/project/7" className="portfolio-item">
              <img src={workDayScheduler} alt="" className="portfolio-img" />
              <p className="portfolio-info">
                Scheduler<span>JavaScript / jQuery / Bootstrap</span>
              </p>
            </a>
          </div>
        </div>
        {/* portfolio item */}
        <div className="project-container">
          <div className="portfolio-container">
            <a href="/project/8" className="portfolio-item">
              <img src={jsCodeQuiz} alt="" className="portfolio-img" />
              <p className="portfolio-info">
                Quiz<span>JavaScript</span>
              </p>
            </a>
          </div>
        </div>
        {/* portfolio item */}
        <div className="project-container">
          <div className="portfolio-container">
            <a href="/project/9" className="portfolio-item">
              <img src={alexanderTheGreat} alt="" className="portfolio-img" />
              <p className="portfolio-info">
                Tribute Page<span>JavaScript</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyWork;
