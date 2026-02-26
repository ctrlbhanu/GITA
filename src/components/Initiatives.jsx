import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

// --- Assets & Styles ---
import ritva from "../assets/Initiatives/Ritva.png";
import kalaher from "../assets/Initiatives/KalaHer.png";
import "../css/initiatives.css";

// ==========================================
// 1. INITIATIVE DATA (Add new projects here!)
// ==========================================
const initiativeData = [
  {
    key: uuidv4(),
    image: ritva,
    title: "Ritva Foundation",
    subtitle: 'SAFE, SUSTAINABLE, AND "UNPLASTIC" MENSTRUATION',
    description:
      "Founded in 2020 by Tanisha Pandit and alumni of Kirori Mal College, the Ritva Foundation is a student-led, non-profit organization dedicated to promoting sustainable, healthy, and stigma-free menstruation across India. We work tirelessly to destigmatize periods, educate communities on reproductive health, and provide biodegradable menstrual products to women in rural areas.",
    impact: [
      {
        bold: "Education & Awareness:",
        text: "Organizing workshops and educational sessions on critical reproductive health topics, including cervical cancer awareness.",
      },
      {
        bold: "Direct Action:",
        text: "Hosting regular donation camps to distribute biodegradable and eco-friendly sanitary products to underprivileged women.",
      },
      {
        bold: "Expanding Chapters:",
        text: "Operating a growing network of active student chapters across the University of Delhi, including Hindu College, Miranda House, and Deshbandhu College.",
      },
    ],
  },
  // You can easily add KalaHer here later like this:
  // {
  //   key: uuidv4(),
  //   image: kalaher,
  //   title: "Project KalaHer",
  //   subtitle: "EMPOWERING WOMEN THROUGH ART",
  //   description: "...",
  //   impact: [ ... ]
  // }
];

const Initiatives = () => {
  // ==========================================
  // 2. STATE MANAGEMENT
  // ==========================================
  const [card, setCard] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.slow,
  });

  // NEW: State to track if the text box should be visible
  const [showDetails, setShowDetails] = useState(false);

  // ==========================================
  // 3. CAROUSEL SLIDES CONFIGURATION
  // ==========================================
  const InCards = initiativeData.map((slide, index) => {
    return {
      key: slide.key,
      content: <img src={slide.image} alt={slide.title} />,
      onClick: () => {
        if (index === card.goToSlide) {
          // If they click the center image, toggle the text box open/closed
          setShowDetails(!showDetails);
        } else {
          // If they click a side image, bring it to center AND open its text
          setCard({ ...card, goToSlide: index });
          setShowDetails(true);
        }
      },
    };
  });

  // Find the currently active initiative to display its text
  const activeInitiative = initiativeData[card.goToSlide];

  // ==========================================
  // 4. COMPONENT RENDER
  // ==========================================
  return (
    <div className="Initiatives">
      {/* --- PAGE TITLE --- */}
      <div className="title">
        <h1>
          <span>OUR</span> INITIATIVES
        </h1>
      </div>

      {/* --- 3D CAROUSEL --- */}
      <div className="initiative-cards">
        <Carousel
          slides={InCards}
          goToSlide={card.goToSlide}
          offsetRadius={card.offsetRadius}
          showNavigation={card.showNavigation}
          animationConfig={card.config}
        />
      </div>

      {/* --- DYNAMIC INITIATIVE DETAILS --- */}
      {/* Only render this block if showDetails is TRUE */}
      {showDetails && activeInitiative && (
        <div className="initiative-details p-4 fade-in-up">
          {/* Header Section */}
          <h2 className="text-success mb-2">{activeInitiative.title}</h2>
          <h5 className="text-primary mb-4" style={{ letterSpacing: "1px" }}>
            {activeInitiative.subtitle}
          </h5>

          {/* Main Description */}
          <p className="about-text-body mb-4">{activeInitiative.description}</p>

          {/* Key Activities & Reach */}
          <h4 className="text-success mb-3 mt-4">Our Impact & Reach</h4>
          <ul className="about-text-body list-unstyled">
            {activeInitiative.impact.map((item, i) => (
              <li className="mb-3" key={i}>
                <span className="text-primary fw-bold me-2">—</span>{" "}
                <strong>{item.bold}</strong> {item.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Initiatives;
