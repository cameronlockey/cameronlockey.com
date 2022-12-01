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
              learning new skills and believe I’ll always be learning and
              growing as an engineer. My objectives are to provide for my
              family, grow as a leader, serve my co-workers well, and to help
              the company that employs me to thrive.
            </p>
            <p>
              I am an accomplished senior software engineer with a track record
              of delivering dependable web applications and technology solutions
              to a non-trivial user base. At my current post, I contribute
              significantly to designing and planning product solutions for
              internal stakeholders as well as SaaS customers. I often work
              closely with Product teams to refine ideas and requirements and
              often help bring them to reality by functioning as a team leader.
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
