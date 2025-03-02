import jobs from "../assets/data.json";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Offers = ({ location, searchTerm, isFullTimeOnly }) => {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [jobCounter, setJobCounter] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    let mutchedJobs = jobs;

    if (isFullTimeOnly) {
      mutchedJobs = mutchedJobs.filter((job) => job.contract === "Full Time");
    }
    if (location) {
      mutchedJobs = mutchedJobs.filter((job) =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    if (searchTerm) {
      mutchedJobs = mutchedJobs.filter(
        (job) =>
          job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredJobs(mutchedJobs);
  }, [isFullTimeOnly, searchTerm, location]);

  const increaseJobCounter = () => {
    setJobCounter((prev) => prev + 5);
  };
  const NavigateToOffer = (job_id) => {
    navigate(`/offer/${job_id}`);
  };

  const tmpFilteredJobs = filteredJobs.slice(0, jobCounter);
  return (
    <>
      <div className="jobs-container">
        {tmpFilteredJobs.map((job) => (
          <button
            onClick={() => {
              NavigateToOffer(job.id);
            }}
            className="offer-job-card"
            key={job.id}
          >
            <div className="offer-company-logo">
              <img src={job.logo} alt={job.company} />
            </div>
            <div className="job-info">
              <div className="job-meta">
                <span className="time-posted">{job.postedAt}</span>
                <span className="dot"> • </span>
                <span className="job-type">{job.contract}</span>
              </div>
              <h3 className="position">{job.position}</h3>
              <p className="company-name">{job.company}</p>
              <p className="location">{job.location}</p>
            </div>
          </button>
        ))}
      </div>
      {jobCounter < filteredJobs.length && (
        <div className="load-more">
          <button className="load-more-button" onClick={increaseJobCounter}>
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default Offers;
