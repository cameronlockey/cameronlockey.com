import React from "react";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 text-left">
            <p className="py-4 mt-5">
              I am a problem solver. I love breaking down ideas and creating
              elegant, efficient solutions. I get excited about details. I enjoy
              learning new tools and languages and want to improve as an
              engineer. My objectives are also to grow as a leader, to serve my
              co-workers well, and to help the company that employs me to
              thrive.
            </p>
            <p>
              I am an accomplished software engineer with a track record of
              delivering dependable web applications to a non-trivial user base
              while maintaining the current codebase and server stack and
              providing sales and marketing support to a small-but-growing
              company. At my current post, I've solo managed and expanded all
              aspects of a product platform from AWS provisioning and deployment
              automation to client-side SPA development across the company’s
              multiple brands.
            </p>
          </div>
          <div className="col-12 col-sm-4">
            <p>
              <img
                src="images/cam-profile-circle.png"
                alt="This is me"
                className="image img-circle img-responsive"
              />
            </p>
          </div>
        </div>
        <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 mt-big"></div>
      </div>
    </section>
  );
};

export default About;
