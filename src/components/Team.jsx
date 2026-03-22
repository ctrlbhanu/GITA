import React from "react";
import "../css/team.css";
import PageHeader from "../components/PageHeader";
import simranimg from "../assets/simran.png";
import bhanuimg from "../assets/bhanu.png";
import tanishaimg from "../assets/tanisha.png";
import vartikaimg from "../assets/vartika.png";
import rythmimg from "../assets/rythm.png";

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
    image: vartikaimg,
    role: "Director Of Operations",
    bio: "Managing core operations and strategic execution for every initiative.",
    linkedin: "https://www.linkedin.com/in/vartika-kumari-b661a0263/",
  },
  {
    id: 3,
    name: "Rythm Damaria",
    image: rythmimg,
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
    bio: "Fueling our missions through evidence-based strategy and global collaborations.",
    linkedin: "https://www.linkedin.com/in/simran-sethi-7b04492b6/",
  },
];

export default function Team() {
  return (
    <>
      <PageHeader title="Meet The Team" path="/team" name="Meet The Team" />
      <div className="team-page-container py-5">
        {/* Changed px-md-5 to px-lg-5 to stop squishing on tablets */}
        <div className="container px-lg-5">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              /* Changed flex-row-reverse to flex-lg-row-reverse so it doesn't flip weirdly when stacked on tablets */
              className={`row align-items-center mb-5 banner-card-row ${
                index % 2 !== 0 ? "flex-lg-row-reverse" : ""
              }`}
            >
              {/* Upgraded md to lg */}
              <div className="col-lg-4 text-center">
                <div className="banner-img-frame">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
              </div>

              {/* Upgraded md to lg, and added mt-4 to give breathing room when stacked */}
              <div
                className={`col-lg-8 px-lg-5 ${
                  index % 2 !== 0 ? "text-lg-end" : "text-lg-start"
                } text-center mt-4 mt-lg-0`}
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
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
