import React from "react";
import { string } from "prop-types";

const propTypes = {
  title: string.isRequired,
  company: string.isRequired,
  start: string.isRequired,
  end: string.isRequired,
};

const defaultProps = {
  cols: 6,
};

const SimpleEmployer = ({ title, company, start, end }) => {
  return (
    <>
      <div className="col-12 col-sm-4">
        <h3 className="xmar">{title}</h3>
        <p className="italic t-lg xmar">{company}</p>
        <p className="upper strong">{`${start} - ${end}`}</p>
      </div>
    </>
  );
};

SimpleEmployer.propTypes = propTypes;
SimpleEmployer.defaultProps = defaultProps;

export default SimpleEmployer;
