import introPic from "../../assets/spencer-profile-pic.jpg";
import heroPic from "../../assets/walnut-street-bridge.jpg";
import standingCasualLarge from "../../assets/standing-casual-cropped.JPG";
import standingCasualSmall from "../../assets/standing-casual-small.JPG";

function AboutMe() {
  return (
    <>
      {/* About Me -- Intro */}
      <section className="intro" id="home">
        <h1 className="section-title section-title-intro">
          Hi, I am
          <strong>Spencer Hulse</strong>
        </h1>
        <p className="section-subtitle section-subtitle-intro">
          full-stack dev
        </p>
        <img className="intro-img" src={introPic} alt="Spencer Hulse smiling" />
      </section>

      {/* About Me -- Hero */}
      <section className="hero">
        <img
          className="hero-img"
          src={heroPic}
          alt="The Walnut Street Bridge in Chattanooga."
        />
        <p className="section-subtitle section-subtitle-hero">
          Dedicated to Excellence In All Things
        </p>
      </section>

      {/* About Me -- Content */}
      <section className="about-me" id="about">
        <h2 className="section-title section-title-about">Who I Am</h2>
        <p className="section-subtitle section-subtitle-about">
          Full-stack developer out of Chattanooga, TN
        </p>

        <div className="about-me-body">
          <p>
            Hi, I'm Spencer, a full-stack developer based out of Chattanooga.
            Before learning web development, I made a living as a writer and
            editor. The skills I learned before bring organization and an eye
            for detail to my code, which have brought nothing but benefits to my
            journey.
          </p>
          <p>
            Currently, I find myself more comfortable working with node and
            express. And I'm always looking for a new npm package to explore to
            make life easier. Recently, I cooperated with a team to create a job
            aggregator application, and I also finished my first full-stack
            project: a simple blog. And there are many more to come.
          </p>
        </div>

        <img
          className="about-me-img about-me-img-large"
          src={standingCasualLarge}
          alt="Spencer in casual clothes smiling."
        />
        <img
          className="about-me-img about-me-img-small"
          src={standingCasualSmall}
          alt="Spencer in casual clothes smiling."
        />
      </section>
    </>
  );
}

export default AboutMe;
