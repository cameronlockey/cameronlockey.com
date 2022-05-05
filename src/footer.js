import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy;{year} Cameron Lockey</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
