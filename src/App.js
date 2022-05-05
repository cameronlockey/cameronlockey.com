import Intro from "./intro";
import About from "./about";
import Experience from "./experience";
import Footer from "./footer";
import Employer from "./employer";
import SimpleEmployer from "./simple-employer";
const App = () => {
  return (
    <>
      <Intro />
      <About />
      <Experience>
        <>
          <Employer
            title="Senior Software Engineer II"
            company="Adwerx"
            start="January 2022"
            end="Present"
            otherTitles={[
              {
                title: "Senior Software Engineer I",
                start: "November 2019",
                end: "January 2022",
              },
              {
                title: "Developer",
                start: "November 2017",
                end: "November 2019",
              },
            ]}
          >
            <ul>
              <li>
                Led engineering implementation planning of several major product
                initiatives and served as an individual contributor to such
                projects.
              </li>
              <li>
                Contributed to conversion of React-Redux applications to utilize
                Redux Toolkit (RTK).
              </li>
              <li>Trained several fellow co-workers in React JS.</li>
              <li>
                Contributed to the continuous improvement of the Adwerx
                platform, a Ruby on Rails app as a full-stack software engineer.
              </li>
              <li>
                Developed ad layouts and minor features, configured new partners
                for the Enterprise Listing Framework product.
              </li>
              <li>
                Contributed to the online transition from the original AppNexus
                API implementation to adoption of the AppNexus Programmable
                Platform object schema utilizing Augmented Line Items.
              </li>
              <li>
                Implemented a system for tracking IP addresses for the purposes
                of linking users to a targeting segment that could be used to
                show targeted ads via IP address matching.
              </li>
              <li>
                Led a project focusing on updating a Facebook Business
                integration to be in compliance with new Facebook standards for
                ad budget management.
              </li>
              <li>
                Contributed to the design and implementation of an ad automation
                product pipeline.
              </li>
            </ul>
          </Employer>

          <Employer
            title="Director of Technology"
            company="Local Eye Site"
            start="May 2014"
            end="November 2017"
          >
            <p>
              Developed and supported the platform for localeyesite.com,
              inpharmacyjobs.com, and risehire.co. Planned and designed
              architecture and UI/UX, implemented, deployed, and supported all
              tech assets and feature sets. Managed and provisioned AWS servers
              with Ansible, deployment solutions with Rocketeer, built backend
              application in CakePHP including consumption of several 3rd party
              APIs, and mobile-optimized Bootstrap 3 SPAs with
              Backbone/Underscore. Redesigned/re-implemented user applications
              for employers, jobseekers, and internal sales staff. Was
              instrumental in developing business intelligence efforts
              leveraging Periscope Data and MySQL.
            </p>
          </Employer>

          <Employer
            title="Web Developer"
            company="Fragment"
            start="January 2012"
            end="May 2014"
          >
            <p>
              Responsible for defining scope of work and designing/developing
              solutions for custom web and mobile applications as an iOS
              developer and full stack web application developer.
            </p>
          </Employer>

          <div className="row">
            <SimpleEmployer
              title="Web Developer"
              company="Freelance"
              start="January 2010"
              end="December 2012"
            />
            <SimpleEmployer
              title="Web Programmer"
              company="Wilmington Design Co."
              start="June 2008"
              end="December 2009"
            />
            <SimpleEmployer
              title="Web Programmer"
              company="WordWright Web"
              start="August 2007"
              end="March 2008"
            />
          </div>
        </>
      </Experience>
      <section id="education" className="section padv-xl">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 id="education" className="heading underline-heading marb-md">
                Education
              </h2>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-6 text-left">
                  <h3 className="xmar">B.A. Film Studies</h3>
                  <p className="italic t-lg xmar">UNC Wilmington</p>
                  <p className="upper strong">2007 - 2009</p>
                </div>
                <div className="col-6 text-left">
                  <h3 className="xmar">A.A.S. Web Development</h3>
                  <p className="italic t-lg xmar">Carteret Community College</p>
                  <p className="upper strong">2004 - 2007</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 mt-big"></div>
          </div>
        </div>
      </section>

      <section id="contact" className="padv-xl">
        <div className="container clearfix">
          <div className="row">
            <div className="col-12">
              <h2 id="contact" className="heading underline-heading marb-md">
                Contact
              </h2>
              <div className="row">
                <div className="col-12">
                  <p className="t-md">
                    <i className="fa fa-fw fa-envelope"></i> clockey at adwerx
                    dot com
                  </p>
                  <p className="social">
                    <a
                      href="https://www.github.com/cameronlockey"
                      title="github"
                      className="git"
                    >
                      <i className="fa fa-git fa-circle"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/cameron.lockey"
                      title="facebook"
                      className="facebook"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a
                      href="https://twitter.com/cameronlockey"
                      title="twitter"
                      className="twitter"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      href="https://plus.google.com/+CameronLockey"
                      title="google plus"
                      className="gplus"
                    >
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/cameronlockey/"
                      title="instagram"
                      className="instagram"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="map"></div>
      <Footer />
    </>
  );
};

export default App;
