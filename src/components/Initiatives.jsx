import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "../css/initiatives.css";

const initiatives = [
  {
    id: 1,
    title: "Youth Leadership in Sustainability",
    subtitle: "Ritva × Youth India × SAGE University",
    desc: "A youth dialogue on sustainability featuring global environmental leader Erik Solheim, focusing on renewable energy and SDG impact.",
    tag: "Sustainability",
  },
  {
    id: 2,
    title: "Safe Body, Safe Mind Campaign",
    subtitle: "Collab with Global Shapers New Delhi",
    desc: "Empowered 1,500 children through book donations and safety sessions on 'good touch vs bad touch' using Abhya.",
    tag: "Child Safety",
  },
  {
    id: 3,
    title: "Cycle of Dignity Campaign",
    subtitle: "Partnership with PANS NGO",
    desc: "Installed biodegradable pad vending machines in Jaipur, helping women like Payal achieve financial independence through organic pad sales.",
    tag: "Empowerment",
  },
  {
    id: 4,
    title: "BRICS4Her Cervical Cancer Awareness",
    subtitle: "Delhi",
    desc: "Reached 3,000 individuals via interactive workshops, pottery, and art-based sessions led by Gynac experts on HPV and screening.",
    tag: "Health",
  },
  {
    id: 5,
    title: "Climate Conversations",
    subtitle: "Collab with Sangini Saheli",
    desc: "A discussion featuring IPS Shubman Agarwal, Richa Anirudh, and Peepal Baba exploring youth engagement in climate action.",
    tag: "Climate",
  },
  {
    id: 6,
    title: "An Ode to Womanhood – Podcast",
    subtitle: "Ritva Kalindi × Ritva DRC",
    desc: "Featured Dr. Gunjan Malhotra Sarin, a gynaecologist and cancer survivor, sharing her journey and insights on women's health.",
    tag: "Podcast",
  },
  {
    id: 7,
    title: "Inspire India Conversation",
    subtitle: "Miranda House × Enactus",
    desc: "Engaged 300 aspiring changemakers through discussions on entrepreneurship and leadership.",
    tag: "Leadership",
  },
  {
    id: 8,
    title: "Saeif India Session",
    subtitle: "NGO Partner",
    desc: "Shared insights on biodegradable menstrual solutions and sustainable livelihoods for community empowerment.",
    tag: "Sustainability",
  },
  {
    id: 9,
    title: "Plastic Free Sunday Fellowship",
    subtitle: "Outreach Partner",
    desc: "A fellowship program aimed at amplifying the global movement toward a plastic-free future.",
    tag: "Environment",
  },
  {
    id: 10,
    title: "Not a Victim but a Survivor",
    subtitle: "Campaign",
    desc: "Challenging victim-blaming and promoting accountability and stronger support systems for survivors of violence.",
    tag: "Awareness",
  },
  {
    id: 11,
    title: "Riturja – Menstrual Waste",
    subtitle: "Waste Management Campaign",
    desc: "Focused on responsible disposal and sustainable practices to reduce the environmental harm of menstrual products.",
    tag: "Environment",
  },
  {
    id: 12,
    title: "The Red Drop Event",
    subtitle: "Miranda House × Pee Safe",
    desc: "Documentary screenings and panel discussions busting myths around PCOS/PCOD and promoting biodegradable pads.",
    tag: "Health",
  },
  {
    id: 13,
    title: "MenstruAsan – The Art of Relief",
    subtitle: "Yoga with Dr. Nutan Pakhare",
    desc: "A specialized yoga session focusing on natural ways to relieve menstrual discomfort and promote health.",
    tag: "Wellness",
  },
  {
    id: 14,
    title: "Salaam Baalak Trust Session",
    subtitle: "Udaan DMRC Children’s Home",
    desc: "A dedicated menstrual health awareness session conducted by Dr. Tanya for young girls in residential care.",
    tag: "Community",
  },
];

const Initiatives = () => {
  return (
    <div className="initiatives-page py-5">
      <div className="container">
        {/* --- 1. TOP COUNTERS --- */}
        <div className="text-center mb-5">
          <h6 className="about-subtitle text-uppercase mb-2">Our Footprint</h6>
          <h1 className="about-title mb-4">
            Driving <span className="highlight-text">Change</span> through
            Action
          </h1>

          <div className="row justify-content-center mt-4">
            <div className="col-md-3 col-6 mb-4">
              <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                {({ isVisible }) => (
                  <div className="clean-counter">
                    <h2 className="fw-bold mb-0">
                      {isVisible ? <CountUp end={30} duration={2} /> : "0"}
                    </h2>
                    <p className="fw-bold mb-0">Campaigns</p>
                  </div>
                )}
              </VisibilitySensor>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                {({ isVisible }) => (
                  <div className="clean-counter">
                    <h2 className="fw-bold mb-0">
                      {isVisible ? <CountUp end={35} duration={2} /> : "0"}
                    </h2>
                    <p className="fw-bold mb-0">Events</p>
                  </div>
                )}
              </VisibilitySensor>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                {({ isVisible }) => (
                  <div className="clean-counter">
                    <h2 className="fw-bold mb-0">
                      {isVisible ? <CountUp end={50} duration={2} /> : "0"}
                    </h2>
                    <p className="fw-bold mb-0">Panel Discussions</p>
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>
        </div>

        {/* --- 2. THE FEATURED RITVA "SUPER CARD" --- */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="initiative-card ritva-super-card p-4 p-md-5">
              {/* Changed align-items-center to align-items-start so it grows downward naturally */}
              <div className="row align-items-start">
                <div className="col-lg-8">
                  <span className="badge-tag mb-3">Project</span>
                  <h2 className="card-heading ritva-hero-title mb-2">
                    Project Ritva
                  </h2>
                  <h6 className="card-subheading mb-4">
                    SAFE, SUSTAINABLE, AND "UNPLASTIC" MENSTRUATION
                  </h6>

                  {/* The Always-Visible Text */}
                  <p className="card-desc ritva-hero-desc mb-0">
                    Ritva, derived from the Sanskrit word for menstruation, was
                    established in 2019 to break the silence around a natural
                    biological process. What began as an initiative to
                    de-mystify menstrual stigma has evolved into a student-led
                    movement ensuring access to accurate knowledge and
                    eco-friendly resources for women and girls.
                  </p>

                  {/* The Hover-Revealed Text */}
                  <div className="ritva-more-info">
                    <p className="card-desc ritva-hero-desc mt-3 mb-3">
                      Despite being a basic aspect of human health, menstrual
                      hygiene continues to be overlooked, misunderstood, or
                      treated with silence in many communities. Ritva was
                      founded to change that narrative. Through awareness
                      initiatives, community engagement, and educational
                      efforts, the project works to normalize conversations
                      around menstruation and ensure that women and girls have
                      access to the knowledge and resources they deserve.
                    </p>
                    <p className="card-desc ritva-hero-desc mb-4">
                      Beyond awareness, Ritva also focuses on empowering women
                      to take ownership of their health and well-being, while
                      encouraging a shift towards sustainable and eco-friendly
                      menstrual practices.
                    </p>

                    <h5 className="text-success fw-bold mb-2">Vision</h5>
                    <p className="card-desc ritva-hero-desc mb-4">
                      To build a society where menstruation is no longer a taboo
                      but a conversation rooted in awareness, dignity, and
                      acceptance, and where every woman and girl has the
                      knowledge, access, and confidence to manage her menstrual
                      health safely and sustainably.
                    </p>

                    <h5 className="text-success fw-bold mb-2">Goals</h5>
                    <ul className="card-desc ritva-hero-desc colored-bullets ps-4 mb-0">
                      <li className="mb-2">
                        Normalize conversations around menstruation by
                        addressing stigma and misinformation in communities.
                      </li>
                      <li className="mb-2">
                        Promote menstrual hygiene awareness and ensure access to
                        accurate information.
                      </li>
                      <li className="mb-2">
                        Support women’s empowerment by encouraging financial
                        independence and informed health choices.
                      </li>
                      <li className="mb-2">
                        Encourage sustainable menstruation by advocating for
                        eco-friendly and plastic-free menstrual products.
                      </li>
                      <li>
                        Create inclusive spaces where menstrual health is
                        treated as a fundamental part of human well-being.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 text-center mt-4 mt-lg-0"></div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 3. INITIATIVE CARDS GRID --- */}
        <div className="row mt-5">
          {initiatives.map((item) => (
            <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
              <div className="initiative-card h-100 p-4">
                <span className="badge-tag mb-3">{item.tag}</span>
                <h4 className="card-heading mb-2">{item.title}</h4>
                <h6 className="card-subheading mb-3">{item.subtitle}</h6>
                <p className="card-desc mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Initiatives;
