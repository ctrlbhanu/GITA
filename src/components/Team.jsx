import React from "react";
import "../css/team.css";
import PageHeader from "../components/PageHeader";
import simranimg from "../assets/simran.png";
import bhanuimg from "../assets/bhanu.png";
import tanishaimg from "../assets/tanisha.png";

const teamMembers = [
  {
    id: 1,
    name: "Tanisha Pandit",
    image: tanishaimg,
    role: "Founder",
    bio: "Leading the vision of Gita to create a sustainable and impactful future.",
    linkedin: "https://www.linkedin.com/in/tanisha-pandit-047a04194/",
  },
  {
    id: 2,
    name: "Vartika Kumari",
    image: "",
    role: "Director Of Operations",
    bio: "Managing core operations and strategic execution for every initiative.",
    linkedin: "https://www.linkedin.com/in/vartika-kumari-b661a0263/",
  },
  {
    id: 3,
    name: "Rythm Damaria",
    image: "",
    role: "Creative and Design Coordinator",
    bio: "Driving digital innovation and functional design excellence.",
    linkedin: "https://www.linkedin.com/in/rythm-damaria-8560601a2/",
  },
  {
    id: 4,
    name: "Bhanu Verma",
    image: bhanuimg,
    role: "Creative and Design Coordinator",
    bio: "Crafting the visual identity and storytelling of our missions.",
    linkedin: "https://www.linkedin.com/in/bhanuverma05/",
  },
  {
    id: 5,
    name: "Simran Sethi",
    role: "Research and Partnerships Coordinator",
    image: simranimg,
    bio: "Providing the essential team energy and high-level chaos.",
    linkedin: "https://www.linkedin.com/in/simran-sethi-7b04492b6/",
  },
];

export default function Team() {
  return (
    <>
      <PageHeader title="Meet The Team" path="/team" name="Meet The Team" />
      <div className="team-page-container py-5">
        {/* The 'container' div fixes the edge-to-edge stretching */}
        <div className="container px-md-5">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`row align-items-center mb-5 banner-card-row ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="col-md-4 text-center">
                <div className="banner-img-frame">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
              </div>

              <div
                className={`col-md-8 px-md-5 ${
                  index % 2 !== 0 ? "text-md-end" : "text-md-start"
                } text-center mt-3 mt-md-0`}
              >
                <h3 className="member-name mb-1">{member.name}</h3>
                <h5 className="member-role  mb-3">{member.role}</h5>
                <p className="member-bio mb-3">{member.bio}</p>

                <div className="social-links">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="me-3"
                  >
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>{" "}
                  {/* Added missing closing tag here */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
