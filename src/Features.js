import React, { useEffect, useState } from 'react';
import './Css/features.css'; // Import the CSS file

function Features() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on component mount
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay before the animation starts
  }, []);

  return (
    <div className="features-container">
      <div className={`features-box ${isVisible ? 'visible' : ''}`}>
        <h2 className="features-heading">Our Features & Objectives</h2>
        <ul className="features-list">
          <li style={{ animationDelay: "0.3s" }}>• Monitor and optimize your fertilizer's pH levels.</li>
          <li style={{ animationDelay: "0.6s" }}>• Analyze nutrient content for healthier crops.</li>
          <li style={{ animationDelay: "0.9s" }}>• Track real-time data for smarter decisions.</li>
          <li style={{ animationDelay: "1.2s" }}>• Provide custom fertilizer recommendations for different &#8194; crops.</li>
          <li style={{ animationDelay: "1.5s" }}>• Ensure environment-friendly fertilizer usage.</li>
        </ul>
      </div>
    </div>
  );
}

export default Features;
