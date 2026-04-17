import "./styles/Skills.css";

const skills = [
  "Swift",
  "Objective-C",
  "UIKit",
  "SwiftUI",
  "Core Data",
  "Realm",
  "Combine",
  "RxSwift",
  "VIPER",
  "Xcode",
  "Instruments",
  "Alamofire",
  "GraphQL",
  "Firebase",
  "CI/CD",
  "TestFlight",
];

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills-container section-container">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-btn hover-link" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
