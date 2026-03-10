import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

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

  // --- CAROUSEL SLIDES MAPPING ---
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
          // If clicking the currently active card, toggle the details box open/closed
          setShowDetails(!showDetails);
        } else {
          // If clicking a new card in the background, bring it forward and open details
          setCard({ ...card, goToSlide: index });
          setShowDetails(true);
        }
      },
    };
  });

  const activeInitiative = initiativeData[card.goToSlide];

  return (
    <div className="Initiatives">
      <div className="title">
        <p className="hint-text">
          Click on an initiative to explore our impact
        </p>
      </div>

      {/* --- CAROUSEL DISPLAY --- */}
      <div className="initiative-cards">
        <Carousel
          slides={InCards}
          goToSlide={card.goToSlide}
          offsetRadius={card.offsetRadius}
          showNavigation={card.showNavigation}
          animationConfig={card.config}
        />
      </div>

      {/* --- EXPANDING DETAILS SECTION --- */}
      <div className={`initiative-details ${showDetails ? "show" : ""}`}>
        {activeInitiative && (
          <>
            <h2 className="text-success mb-2">{activeInitiative.title}</h2>
            <h5 className="text-primary mb-4" style={{ letterSpacing: "1px" }}>
              {activeInitiative.subtitle}
            </h5>

            {/* Render each paragraph from the description array */}
            {activeInitiative.description.map((paragraph, index) => (
              <p key={index} className="about-text-body mb-3">
                {paragraph}
              </p>
            ))}

            {/* Vision Section */}
            <h4 className="text-success mb-3 mt-4">Vision</h4>
            <p className="about-text-body mb-4">{activeInitiative.vision}</p>

            {/* Goals Section */}
            <h4 className="text-success mb-3 mt-4">Goals</h4>

            {/* The 'colored-bullets' class syncs this perfectly with your About Us page! */}
            <ul className="about-text-body ps-4 colored-bullets">
              {activeInitiative.goals.map((goal, i) => (
                <li className="mb-3" key={i}>
                  {goal}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Initiatives;
