import React from "react";
import { number, string, arrayOf, shape } from "prop-types";

const propTypes = {
  title: string.isRequired,
  employerName: string.isRequired,
  startDate: string.isRequired,
  endDate: string.isRequired,
  cols: number,
  otherTitles: arrayOf(
    shape({
      title: string.isRequired,
      startDate: string.isRequired,
      endDate: string.isRequired,
    })
  ),
};

const Employer = ({ title, company, start, end, otherTitles, children }) => {
  return (
    <div className="row mb-5">
      <div className="col-12 col-sm-6 text-left">
        <h3 className="xmar">{title}</h3>
        <p className="italic t-lg xmar">{company}</p>
        <p className="upper strong">{`${start} - ${end}`}</p>
        {otherTitles &&
          otherTitles.map((job) => (
            <>
              <h5 className="xmar">{job.title}</h5>
              <p className="upper strong">{`${job.start} - ${job.end}`}</p>
            </>
          ))}
      </div>
      <div className="col-12 col-sm-6">{children}</div>
    </div>
  );
};

Employer.propTypes = propTypes;

export default Employer;
