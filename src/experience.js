import React from "react";

const Experience = ({ children }) => {
  return (
    <section id="experience" className="section padv-xl">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 id="experience" className="heading underline-heading marb-md">
              Experience
            </h2>
          </div>
          <div className="col-12">{children}</div>
          <div className="col-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 mt-big"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
