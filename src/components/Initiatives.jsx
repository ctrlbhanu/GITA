import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "../css/initiatives.css";

// --- IMAGE IMPORTS ---
import podcastImg from "../assets/Initiatives/An ode to womanhood podcast.jpg";
import cervicalCancerImg from "../assets/Initiatives/Cervical Canver Awareness brics4her.jpg";
import climateConservationImg from "../assets/Initiatives/Climate Conservation.jpg";
import cycleOfDignityImg from "../assets/Initiatives/Cycle of Dignity Campaign.jpg";
import goodTouchImg from "../assets/Initiatives/Good Touch Bad Touch.jpg";
import inspireIndiaImg from "../assets/Initiatives/Inspire India.jpg";
import survivorImg from "../assets/Initiatives/Not a Victim but a Survivor.jpg";
import redDropImg from "../assets/Initiatives/Red Drop Event.jpg";
import ritvaHeroImg from "../assets/Initiatives/Ritva.png";
import saeifImg from "../assets/Initiatives/Saeif.jpg";
import salaamBalakImg from "../assets/Initiatives/Salaam Balak Trust.jpg";
import youthLeadershipImg from "../assets/Initiatives/Youth Leadership.jpg";
import freesunday from "../assets/Initiatives/Plastic Free Sunday Fellowship.jpg";
import riturja from "../assets/Initiatives/Riturja.jpg";
import yoga from "../assets/Initiatives/yoga.jpg";
import mands from "../assets/Initiatives/mands.jpg";
const initiatives = [
  {
    id: 1,
    title: "Youth Leadership in Sustainability",
    subtitle: "Ritva × Youth India × SAGE University",
    desc: "A youth dialogue on sustainability featuring global environmental leader Erik Solheim, focusing on renewable energy and SDG impact.",
    tag: "Sustainability",
    image: youthLeadershipImg,
  },
  {
    id: 2,
    title: "Safe Body, Safe Mind Campaign",
    subtitle: "Collaboration with Global Shapers New Delhi",
    desc: "Empowered 1,500 children through book donations and safety sessions on 'good touch vs bad touch' using Abhya.",
    tag: "Child Safety",
    image: goodTouchImg,
  },
  {
    id: 3,
    title: "Cycle of Dignity Campaign",
    subtitle: "Partnership with PANS NGO",
    desc: "Installed biodegradable pad vending machines in Jaipur, helping women like Payal achieve financial independence through organic pad sales.",
    tag: "Empowerment",
    image: cycleOfDignityImg,
  },
  {
    id: 4,
    title: "BRICS4Her Cervical Cancer Awareness",
    subtitle: "Delhi",
    desc: "Reached 3,000 individuals via interactive workshops, pottery, and art-based sessions led by Gynac experts on HPV and screening.",
    tag: "Health",
    image: cervicalCancerImg,
  },
  {
    id: 5,
    title: "Climate Conversations",
    subtitle: "Collaboration with Sangini Saheli",
    desc: "A discussion featuring IPS Shubman Agarwal, Richa Anirudh, and Peepal Baba exploring youth engagement in climate action.",
    tag: "Climate",
    image: climateConservationImg,
  },
  {
    id: 6,
    title: "An Ode to Womanhood – Podcast",
    subtitle: "Ritva Kalindi × Ritva DRC",
    desc: "Featured Dr. Gunjan Malhotra Sarin, a gynaecologist and cancer survivor, sharing her journey and insights on women's health.",
    tag: "Podcast",
    image: podcastImg,
  },
  {
    id: 7,
    title: "Inspire India Conversation",
    subtitle: "Miranda House × Enactus",
    desc: "Engaged 300 aspiring changemakers through discussions on entrepreneurship and leadership.",
    tag: "Leadership",
    image: inspireIndiaImg,
  },
  {
    id: 8,
    title: "Saeif India Session",
    subtitle: "NGO Partner",
    desc: "Shared insights on biodegradable menstrual solutions and sustainable livelihoods for community empowerment.",
    tag: "Sustainability",
    image: saeifImg,
  },
  {
    id: 9,
    title: "Plastic Free Sunday Fellowship",
    subtitle: "Outreach Partner",
    desc: "A fellowship program aimed at amplifying the global movement toward a plastic-free future.",
    tag: "Environment",
    image: freesunday,
  },
  {
    id: 10,
    title: "Not a Victim but a Survivor",
    subtitle: "Campaign",
    desc: "Challenging victim-blaming and promoting accountability and stronger support systems for survivors of violence.",
    tag: "Awareness",
    image: survivorImg,
  },
  {
    id: 11,
    title: "Riturja – Menstrual Waste",
    subtitle: "Waste Management Campaign",
    desc: "Focused on responsible disposal and sustainable practices to reduce the environmental harm of menstrual products.",
    tag: "Environment",
    image: riturja,
  },
  {
    id: 12,
    title: "The Red Drop Event",
    subtitle: "Miranda House × Pee Safe",
    desc: "Documentary screenings and panel discussions busting myths around PCOS/PCOD and promoting biodegradable pads.",
    tag: "Health",
    image: redDropImg,
  },
  {
    id: 13,
    title: "MenstruAsan – The Art of Relief",
    subtitle: "Yoga with Dr. Nutan Pakhare",
    desc: "A specialized yoga session focusing on natural ways to relieve menstrual discomfort and promote health.",
    tag: "Wellness",
    image: yoga,
  },
  {
    id: 14,
    title: "Salaam Baalak Trust Session",
    subtitle: "Udaan DMRC Children’s Home",
    desc: "A dedicated menstrual health awareness session conducted by Dr. Tanya for young girls in residential care.",
    tag: "Community",
    image: salaamBalakImg,
  },
  {
    id: 15,
    title: "Body positivity session with Marks & Spencer",
    subtitle: "Marks & Spencer and Girl Up Astitva",
    desc: "A body positivity and self-care session with Marks & Spencer and Girl Up Astitva, featuring a free expert-led bra-fitting experience for participants.",
    tag: "Awareness",
    image: mands,
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
              {/* IMAGE CENTERED AT THE TOP, INSIDE THE PADDING */}
              <div className="text-center mb-4">
                <div className="mb-4" style={{ width: "100%" }}>
                  <img
                    src={ritvaHeroImg}
                    alt="Project Ritva Banner"
                    className="rounded shadow-sm"
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <span className="badge-tag mb-3">Project</span>
                  <h2 className="card-heading ritva-hero-title mb-2">
                    Project Ritva
                  </h2>
                  <h6 className="card-subheading mb-4">
                    SAFE, SUSTAINABLE, AND "UNPLASTIC" MENSTRUATION
                  </h6>

                  <p className="card-desc ritva-hero-desc mb-0">
                    Ritva, derived from the Sanskrit word for menstruation, was
                    established in 2019 to break the silence around a natural
                    biological process. What began as an initiative to
                    de-mystify menstrual stigma has evolved into a student-led
                    movement ensuring access to accurate knowledge and
                    eco-friendly resources for women and girls.
                  </p>

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
                        addressing stigma.
                      </li>
                      <li className="mb-2">
                        Promote menstrual hygiene awareness and ensure access to
                        info.
                      </li>
                      <li className="mb-2">
                        Support women’s empowerment by encouraging financial
                        independence.
                      </li>
                      <li className="mb-2">
                        Encourage sustainable menstruation by advocating for
                        plastic-free products.
                      </li>
                      <li>
                        Create inclusive spaces where menstrual health is
                        treated as a fundamental right.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 3. INITIATIVE CARDS GRID --- */}
        <div className="row mt-5">
          {initiatives.map((item) => (
            <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
              <div className="initiative-card h-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top"
                />
                <div className="p-4">
                  <span className="badge-tag mb-3">{item.tag}</span>
                  <h4 className="card-heading mb-2">{item.title}</h4>
                  <h6 className="card-subheading mb-3">{item.subtitle}</h6>
                  <p className="card-desc mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Initiatives;
