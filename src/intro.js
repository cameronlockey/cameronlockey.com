import React from "react";

const Intro = () => {
  return (
    <section id="intro" className="text-intro no-padding-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 pt-5">
            <h1>
              Hello.
              <br />
              I'm <span className="text-primary">Cameron Lockey</span>, a{" "}
              <span className="text-primary">software engineer</span> living in
              Durham, NC.
            </h1>
          </div>
          <div className="col-12 col-lg-2">
            <ul className="bg-white nav justify-content-end fixed-top">
              <li className="nav-item">
                <a className="nav-link" href="#intro">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
