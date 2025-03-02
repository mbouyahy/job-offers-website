import Company from "./Company.jsx";
import Footer from "./Footer.jsx";
import jobs from "../assets/data.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MainContent = ({ isLoaded }) => {
  const [job, setJob] = useState({});
  const { offer_id } = useParams();
  console.log({ offer_id });

  useEffect(() => {
    const jobData = jobs.find((job) => job.id === parseInt(offer_id));
    console.log({ jobData });
    setJob(jobData);
  }, [offer_id]);
  console.log({ job });
  return (
    <>
      <main className="main-content">
        <Company isLoaded={isLoaded} job={job} />
        <div className={`job-card ${isLoaded ? "visible" : ""}`}>
          <div className="job-details">
            <div className="job-meta">
              <p className="job-posted">
                <i>{job.postedAt}</i> • <i>{job.contract}</i>
              </p>
              <h1 className="job-title">{job.position}</h1>
              <p className="job-location">{job.location}</p>
            </div>
            <a href={job.apply} className="apply-btn">
              Apply Now
            </a>
          </div>

          <div className="job-description">
            <p>{job.description}</p>

            <h3 className="section-title">Requirements</h3>
            <p>{job?.requirements?.content || "No requirements available"}</p>
            <ul className="requirements-list">
              {job?.requirements?.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="section-title">What You Will Do</h3>
            <p>{job?.role?.content || "No role available"}</p>
            <ol className="responsibilities-list">
              {job?.role?.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </main>
      <Footer isLoaded={isLoaded} job={job} />
    </>
  );
};

export default MainContent;
