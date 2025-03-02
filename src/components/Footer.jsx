const Footer = ({ isLoaded, job }) => {
  return (
    <footer className={`footer ${isLoaded ? "visible" : ""}`}>
      <div className="footer-content">
        <div className="footer-job-info">
          <h3>{job?.position}</h3>
          <p>{job?.company}</p>
        </div>
        <a href={job.apply} className="apply-btn">
          Apply Now
        </a>
      </div>
    </footer>
  );
};

export default Footer;
