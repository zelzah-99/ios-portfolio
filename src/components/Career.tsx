import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>iOS Developer</h4>
                <h5>FIS Global, USA</h5>
              </div>
              <h3>Jan 2025 - Present</h3>
            </div>
            <p>
              Developed and enhanced scalable iOS applications using Swift, UIKit, and SwiftUI. Integrated RESTful and GraphQL APIs using URLSession and Alamofire. Managed CI/CD pipelines using Bitrise and Jenkins.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>iOS Developer</h4>
                <h5>Hexaware Technologies, India</h5>
              </div>
              <h3>Jan 2020 - Dec 2022</h3>
            </div>
            <p>
              Built and maintained iOS applications using Swift, Objective-C, and UIKit. Developed reusable UI components and managed local and cloud-based data using SQLite, Core Data, and Firebase Firestore.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MS Computer Science</h4>
                <h5>CSU Northridge</h5>
              </div>
              <h3>May 2025</h3>
            </div>
            <p>
              Completed Master of Science in CS. Also hold a Bachelor of Science in Computer Science from Gudlavalleru Engineering College, India (May 2021).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
