import workData from "./workData";

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
          {workData.map((project, i) => {
            const { projectName, imageSrc, deployedLink, repoLink, mainTech } =
              project;

            return (
              <div className="project-container" key={i}>
                <div className="portfolio-container">
                  <img
                    src={require(`../../assets/${imageSrc}`)}
                    alt=""
                    className="portfolio-img"
                  />
                  <div className="portfolio-info">
                    <p className="portfolio-item-links">
                      <a
                        href={deployedLink}
                        className="portfolio-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {projectName}
                      </a>
                      <a
                        className="repository-link"
                        href={repoLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-github github-portfolio-link"></i>
                      </a>
                    </p>
                    <span>{mainTech}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default MyWork;
