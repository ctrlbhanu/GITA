import React from "react";
import aboutImage from "../assets/about.png";
import "../css/AboutUs.css";

// Updated with Official UN SDG Hex Colors & Split Titles!
const priorities = [
  {
    icon: "fa-leaf",
    sdg: "SDG 3 & SDG 5",
    title1: "Health &",
    title2: "Gender Equity",
    desc: "Institutionalize menstrual and reproductive health awareness through structured, scalable workshop models and sustained campus outreach.",
    c1: "#4C9F38", // SDG 3: Green
    c2: "#FF3A21", // SDG 5: Orange-Red
  },
  {
    icon: "fa-stethoscope",
    sdg: "SDG 3",
    title1: "Preventive",
    title2: "Health Systems",
    desc: "Advance prevention-oriented awareness on non-communicable diseases and broader health challenges through strategic education partnerships.",
    c1: "#4C9F38", // SDG 3: Green
    c2: "#4C9F38", // (Same color so it stays solid)
  },
  {
    icon: "fa-recycle",
    sdg: "SDG 12 & SDG 13",
    title1: "Sustainable",
    title2: "Solutions",
    desc: "Drive the transition to biodegradable, 'UNplastic' menstrual solutions to reduce environmental impact and promote sustainable consumption.",
    c1: "#BF8B2E", // SDG 12: Mustard Yellow
    c2: "#3F7E44", // SDG 13: Dark Green
  },
  {
    icon: "fa-users",
    sdg: "SDG 5 & SDG 8",
    title1: "Women’s",
    title2: "Empowerment",
    desc: "Strengthen women’s agency through targeted leadership development, skills training, and financial capability-building initiatives.",
    c1: "#FF3A21", // SDG 5: Orange-Red
    c2: "#A21942", // SDG 8: Burgundy
  },
  {
    icon: "fa-chart-line",
    sdg: "SDG 4 & SDG 8",
    title1: "Financial",
    title2: "Resilience",
    desc: "Enable financial resilience among young women through practical, outcome-driven economic literacy programs.",
    c1: "#C5192D", // SDG 4: Dark Red
    c2: "#A21942", // SDG 8: Burgundy
  },
  {
    icon: "fa-rocket",
    sdg: "SDG 8 & SDG 9",
    title1: "Social",
    title2: "Innovation",
    desc: "Catalyze social entrepreneurship by supporting youth-led, innovation-driven community solutions.",
    c1: "#A21942", // SDG 8: Burgundy
    c2: "#FD6925", // SDG 9: Orange
  },
  {
    icon: "fa-handshake",
    sdg: "SDG 17",
    title1: "Collaborative",
    title2: "Action",
    desc: "Scale ethical, youth-led chapter networks that translate awareness into sustained, accountable grassroots action.",
    c1: "#19486A", // SDG 17: Navy Blue
    c2: "#19486A",
  },
  {
    icon: "fa-globe",
    sdg: "SDG 11 & SDG 17",
    title1: "Scalable",
    title2: "Impact",
    desc: "Design and implement replicable, data-driven impact frameworks aligned with long-term sustainable development priorities.",
    c1: "#FD9D24", // SDG 11: Golden Yellow
    c2: "#19486A", // SDG 17: Navy Blue
  },
];

export default function AboutUs() {
  return (
    <div className="about-full-section py-5">
      <div className="container px-md-5">
        {/* Top Section: Side-by-Side Summary */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <div className="about-img-frame">
              <img
                src={aboutImage}
                alt="About GITA"
                className="img-fluid rounded"
              />
            </div>
          </div>

          <div className="col-md-6 px-md-5">
            <h6 className="about-subtitle text-uppercase font-weight-bold mb-2">
              Learn About Us
            </h6>
            <h1 className="about-title display-4 mb-4">
              Building a Better <span className="highlight-text">Future</span>{" "}
              Together
            </h1>
            <p className="about-text-lead mb-3">
              GITA is a youth-led impact ecosystem built on one belief:
              privilege carries responsibility.
            </p>
            <p className="about-text-body">
              What began in 2019 as Ritva Foundation an initiative to de-mystify
              menstrual stigma has evolved into a multidimensional platform
              driving women’s empowerment, child welfare, environmental
              sustainability, financial literacy, and community-led
              transformation. Rooted in purpose. Growing through action.
            </p>
          </div>
        </div>

        {/* Middle Section: History & Objectives */}
        <div className="content-inner mt-5">
          <div className="row">
            {/* Our History */}
            <div className="col-lg-12 mb-4">
              <h2 className="text-success fw-bold text-center mb-3">
                Our History
              </h2>
              <p className="about-text-body">
                Our founder believed that real change begins with individual
                action. With this conviction, she started Ritva—an initiative
                dedicated to advancing sustainable menstrual hygiene and
                fostering open, informed conversations around it. As the work
                grew, so did the understanding that challenges in menstrual
                health were deeply connected to larger issues of awareness,
                access, education, and dignity. What began as a focused effort
                soon expanded into a broader mission. To reflect this evolution,
                Ritva grew into GITA—a platform with a wider vision and deeper
                commitment to holistic, community-driven change. Today, GITA
                continues to build on its origins, working towards creating
                inclusive, informed, and empowered communities through sustained
                and meaningful action.
              </p>
            </div>

            {/* THE FIX: Added pt-4 border-top border-secondary here! */}
            <div className="col-lg-12 mb-5 pt-4 border-top border-secondary">
              <h2 className="text-success text-center fw-bold mb-3">
                Objectives
              </h2>
              <p className="about-text-body">
                Headquartered in Bhopal and active across the nation, GITA
                continues to expand its chapters, collaborations, and on-ground
                initiatives. Not a campaign. A long-term commitment to
                transformation.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Dynamic SDG Colored Cards */}
        <div className="mt-2 pt-5 border-top border-secondary">
          <div className="text-center mb-5">
            <h2 className="text-success fw-bold mb-3">
              Our Strategic Priorities
            </h2>
            <p className="about-text-body max-w-700 mx-auto">
              Driven by the UN Sustainable Development Goals, we implement
              frameworks designed for long-term, scalable community impact.
            </p>
          </div>

          <div className="row g-4">
            {priorities.map((item, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div
                  className="priority-card h-100"
                  style={{
                    "--c1": item.c1,
                    "--c2": item.c2,
                    "--c1-shadow": `${item.c1}26`,
                    "--c2-shadow": `${item.c2}26`,
                  }}
                >
                  <div className="icon-box">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <span className="sdg-badge">{item.sdg}</span>

                  <h5 className="fw-bold mt-3 mb-2 priority-title">
                    <span className="title-word-1">{item.title1}</span>{" "}
                    <span className="title-word-2">{item.title2}</span>
                  </h5>

                  <p className="about-text-body text-sm mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
