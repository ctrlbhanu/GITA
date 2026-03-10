import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import ritva from "../assets/Initiatives/Ritva.png";
import "../css/initiatives.css";

// --- INITIATIVE DATA ---
const initiativeData = [
  {
    key: uuidv4(),
    image: ritva,
    title: "Ritva Foundation",
    subtitle: 'SAFE, SUSTAINABLE, AND "UNPLASTIC" MENSTRUATION',
    description: [
      "Ritva, derived from the Sanskrit word for menstruation, was established in 2017 as the brainchild of our founder. It was created with a simple but powerful belief — that menstruation, a natural biological process experienced by millions of women, should be understood, respected, and spoken about without stigma.",
      "Despite being a basic aspect of human health, menstrual hygiene continues to be overlooked, misunderstood, or treated with silence in many communities. Ritva was founded to change that narrative. Through awareness initiatives, community engagement, and educational efforts, the project works to normalize conversations around menstruation and ensure that women and girls have access to the knowledge and resources they deserve.",
      "Beyond awareness, Ritva also focuses on empowering women to take ownership of their health and well-being, while encouraging a shift towards sustainable and eco-friendly menstrual practices.",
    ],
    vision:
      "To build a society where menstruation is no longer a taboo but a conversation rooted in awareness, dignity, and acceptance, and where every woman and girl has the knowledge, access, and confidence to manage her menstrual health safely and sustainably.",
    goals: [
      "Normalize conversations around menstruation by addressing stigma and misinformation in communities.",
      "Promote menstrual hygiene awareness and ensure access to accurate information.",
      "Support women’s empowerment by encouraging financial independence and informed health choices.",
      "Encourage sustainable menstruation by advocating for eco-friendly and plastic-free menstrual products.",
      "Create inclusive spaces where menstrual health is treated as a fundamental part of human well-being.",
    ],
    stats: {
      campaigns: 8,
      events: 5,
      panels: 11,
    },
    campaigns: [
      {
        title: "Not a Victim but a Survivor",
        desc: "A campaign aimed at challenging victim-blaming and promoting empathy, accountability, and stronger support systems for survivors of violence.",
      },
      {
        title: "Riturja – Menstrual Waste Management",
        desc: "An awareness campaign focused on responsible menstrual waste disposal and sustainable practices to reduce environmental harm.",
      },
      {
        title: "Pad Collection Drive",
        desc: "A community initiative to collect and distribute sanitary pads, improving access to menstrual hygiene products for those in need.",
      },
      {
        title: "Book Donation Drive & Safety Awareness",
        desc: "Empowered 1,500 children through book donations and sessions on good touch and bad touch using Abhya with Global Shapers Community.",
      },
      {
        title: "Stationery Drive",
        desc: "Collected and distributed essential stationery to children, benefiting around 180–200 students with Vaya Foundation.",
      },
      {
        title: "Mental Health Drive",
        desc: "An awareness initiative encouraging open conversations around mental well-being and reducing stigma associated with mental health.",
      },
      {
        title: "Menstrual Hygiene Day x India Vision Foundation",
        desc: "Distributed 4,776 sanitary pads and reached 222 inmates to promote education and dignity.",
      },
      {
        title: "Cervical Cancer Initiatives (BRICS4Her)",
        desc: "Reached 2,500–3,000 individuals through interactive sessions, art-based activities, and workshops on HPV vaccination and early screening.",
      },
    ],
    events: [
      {
        title: "RITVA 5th and 6th year Celebration",
        desc: "Installed biodegradable sanitary pad vending machines in Jaipur to promote sustainable menstrual hygiene and empower local women.",
      },
      {
        title: "Period Pain Simulator",
        desc: "Engaged 120–150 men through simulated menstrual cramps to help them empathize with the realities of period pain.",
      },
      {
        title: "Youth Leadership in Sustainability",
        desc: "A youth dialogue on renewable energy and sustainability featuring global environmental leader Erik Solheim.",
      },
      {
        title: "Perennial Ceremony",
        desc: "A one-year anniversary webinar series featuring prominent speakers and advocates.",
      },
      {
        title: "Pararmbh – Open Expression Event",
        desc: "A creative platform inviting participants to express ideas through poetry, speeches, and performances on social themes.",
      },
    ],
    panels: [
      {
        title: "Webinar on Menstruation and Human Rights",
        desc: "A virtual session discussing menstrual stigma and the importance of menstrual rights.",
      },
      {
        title: "Empowering Girls for a Better Tomorrow",
        desc: "An Instagram Live session focusing on women’s empowerment and gender equality on National Girl Child Day.",
      },
      {
        title: "Session with Dr. Mitali Rathod",
        desc: "An informative Q&A session addressing common myths, questions, and concerns related to menstrual health.",
      },
      {
        title: "Climate Conversations",
        desc: "A discussion exploring climate awareness and youth engagement with journalists and environmental activists.",
      },
      {
        title: "Period Lesson Plan – NSS Collab",
        desc: "A session educating young girls about periods, hygiene practices, and safe disposal.",
      },
      {
        title: "MenstruAsan – The Art of Relief",
        desc: "A yoga session focusing on natural ways to relieve menstrual discomfort.",
      },
      {
        title: "Menstrual Awareness Session",
        desc: "Conducted for girls at the Udaan DMRC Children’s Home in collab with Salaam Baalak Trust.",
      },
      {
        title: "An Ode to Womanhood – Podcast",
        desc: "Featured a gynaecologist and cancer survivor sharing her journey and insights on women’s health.",
      },
      {
        title: "INSPIRE INDIA by ENACTUS x RITVA",
        desc: "Engaged 200–300 aspiring changemakers through discussions on entrepreneurship and social impact.",
      },
      {
        title: "The Red Drop Event",
        desc: "Featured documentary screenings, panel discussions busting myths around PCOS, and a biodegradable pad drive.",
      },
      {
        title: "Plastic Free Sunday Fellowship",
        desc: "Served as the outreach partner to amplify the movement toward a plastic-free future.",
      },
    ],
  },
];

const Initiatives = () => {
  const [card, setCard] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.slow,
  });

  const [showDetails, setShowDetails] = useState(false);
  // NEW STATE: Tracks which section is currently open (campaigns, events, or panels)
  const [activeTab, setActiveTab] = useState(null);

  const InCards = initiativeData.map((slide, index) => {
    return {
      key: slide.key,
      content: (
        <div className="initiative-card-wrapper">
          <img src={slide.image} alt={slide.title} />
        </div>
      ),
      onClick: () => {
        if (index === card.goToSlide) {
          setShowDetails(!showDetails);
          setActiveTab(null); // Close tabs when hiding details
        } else {
          setCard({ ...card, goToSlide: index });
          setShowDetails(true);
          setActiveTab(null); // Reset tabs when switching slides
        }
      },
    };
  });

  const activeInitiative = initiativeData[card.goToSlide];

  // Helper function to toggle the active tab
  const handleTabClick = (tabName) => {
    setActiveTab(activeTab === tabName ? null : tabName);
  };

  return (
    <div className="Initiatives">
      <div className="title">
        <p className="hint-text">
          Click on an initiative to explore our impact
        </p>
      </div>

      <div className="initiative-cards">
        <Carousel
          slides={InCards}
          goToSlide={card.goToSlide}
          offsetRadius={card.offsetRadius}
          showNavigation={card.showNavigation}
          animationConfig={card.config}
        />
      </div>

      <div className={`initiative-details ${showDetails ? "show" : ""}`}>
        {activeInitiative && (
          <>
            <h2 className="text-success mb-2">{activeInitiative.title}</h2>
            <h5 className="text-primary mb-4" style={{ letterSpacing: "1px" }}>
              {activeInitiative.subtitle}
            </h5>

            {activeInitiative.description.map((paragraph, index) => (
              <p key={index} className="about-text-body mb-3">
                {paragraph}
              </p>
            ))}

            <h4 className="text-success mb-3 mt-4">Vision</h4>
            <p className="about-text-body mb-4">{activeInitiative.vision}</p>

            <h4 className="text-success mb-3 mt-4">Goals</h4>
            <ul className="about-text-body ps-4 colored-bullets">
              {activeInitiative.goals.map((goal, i) => (
                <li className="mb-3" key={i}>
                  {goal}
                </li>
              ))}
            </ul>

            {/* --- IMPACT COUNTERS (NOW CLICKABLE) --- */}
            {activeInitiative.stats && (
              <div className="impact-counter-section mt-5 mb-4 p-4 bg-light rounded-4 text-center">
                <h3 className="text-success mb-4 fw-bold">
                  Our Impact in Numbers
                </h3>
                <p className="text-muted small mb-4">
                  Click a category below to view details
                </p>
                <div className="row justify-content-center align-items-center">
                  {/* Campaigns Tab */}
                  <div className="col-4">
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 100 }}
                    >
                      {({ isVisible }) => (
                        <div
                          className={`counter-box ${activeTab === "campaigns" ? "active" : ""}`}
                          onClick={() => handleTabClick("campaigns")}
                        >
                          <h2 className="display-4 fw-bold text-primary mb-0">
                            {isVisible ? (
                              <CountUp
                                end={activeInitiative.stats.campaigns}
                                duration={2.5}
                              />
                            ) : (
                              "0"
                            )}
                          </h2>
                          <p className="fw-bold text-muted text-uppercase mb-0">
                            Campaigns
                          </p>
                        </div>
                      )}
                    </VisibilitySensor>
                  </div>

                  {/* Events Tab */}
                  <div className="col-4 border-start border-end">
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 100 }}
                    >
                      {({ isVisible }) => (
                        <div
                          className={`counter-box ${activeTab === "events" ? "active" : ""}`}
                          onClick={() => handleTabClick("events")}
                        >
                          <h2 className="display-4 fw-bold text-primary mb-0">
                            {isVisible ? (
                              <CountUp
                                end={activeInitiative.stats.events}
                                duration={2.5}
                              />
                            ) : (
                              "0"
                            )}
                          </h2>
                          <p className="fw-bold text-muted text-uppercase mb-0">
                            Events
                          </p>
                        </div>
                      )}
                    </VisibilitySensor>
                  </div>

                  {/* Panels Tab */}
                  <div className="col-4">
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 100 }}
                    >
                      {({ isVisible }) => (
                        <div
                          className={`counter-box ${activeTab === "panels" ? "active" : ""}`}
                          onClick={() => handleTabClick("panels")}
                        >
                          <h2 className="display-4 fw-bold text-primary mb-0">
                            {isVisible ? (
                              <CountUp
                                end={activeInitiative.stats.panels}
                                duration={2.5}
                              />
                            ) : (
                              "0"
                            )}
                          </h2>
                          <p className="fw-bold text-muted text-uppercase mb-0">
                            Panels
                          </p>
                        </div>
                      )}
                    </VisibilitySensor>
                  </div>
                </div>
              </div>
            )}

            {/* --- CONDITIONALLY RENDERED LISTS --- */}
            <div className="activities-list">
              {activeTab === "campaigns" && (
                <div className="tab-content-fade">
                  <h4 className="text-success mb-3 border-bottom pb-2">
                    Campaigns
                  </h4>
                  <div className="row mb-4">
                    {activeInitiative.campaigns?.map((item, i) => (
                      <div className="col-md-6 mb-3" key={i}>
                        <div className="card h-100 border-1 border-light bg-white p-3 shadow-sm rounded-3">
                          <h6 className="fw-bold text-dark">{item.title}</h6>
                          <p className="small text-muted mb-0">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "events" && (
                <div className="tab-content-fade">
                  <h4 className="text-success mb-3 border-bottom pb-2">
                    Events
                  </h4>
                  <div className="row mb-4">
                    {activeInitiative.events?.map((item, i) => (
                      <div className="col-md-6 mb-3" key={i}>
                        <div className="card h-100 border-1 border-light bg-white p-3 shadow-sm rounded-3">
                          <h6 className="fw-bold text-dark">{item.title}</h6>
                          <p className="small text-muted mb-0">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "panels" && (
                <div className="tab-content-fade">
                  <h4 className="text-success mb-3 border-bottom pb-2">
                    Panel Discussions & Sessions
                  </h4>
                  <div className="row mb-4">
                    {activeInitiative.panels?.map((item, i) => (
                      <div className="col-md-6 mb-3" key={i}>
                        <div className="card h-100 border-1 border-light bg-white p-3 shadow-sm rounded-3">
                          <h6 className="fw-bold text-dark">{item.title}</h6>
                          <p className="small text-muted mb-0">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Initiatives;
