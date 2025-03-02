const Company = ({ isLoaded, job }) => {
  return (
    <div className={`job-offer-header ${isLoaded ? "visible" : ""}`}>
      <div className="company-logo">
        <div className="logo-inner">{job.company}</div>
      </div>

      <div className="job-header">
        <div className="company-info">
          <h2 className="company-name">{job.company}</h2>
          <p className="company-website">{job.company}.com</p>
        </div>
        <a href={job.website} className="company-site-btn">
          Company Site
        </a>
      </div>
    </div>
  );
};

export default Company;
