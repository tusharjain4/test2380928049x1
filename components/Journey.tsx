'use client';

import React from 'react';

interface JourneyProps {
  about: string;
  experience: number;
  currentRole: string;
}

const Journey: React.FC<JourneyProps> = ({ about, experience, currentRole }) => {
  return (
    <section className="journey-section">
      <div className="journey-content">
        <h2 className="journey-title">My Journey</h2>
        
        <div className="journey-list" role="list">
          <article className="journey-item" role="listitem">
            <div className="journey-header">
              <div className="journey-icon">
                <img src="/assets/images/img_icon_building_2.svg" alt="Experience icon" />
              </div>
              <div className="journey-info">
                <h3 className="journey-institution">Overall Experience</h3>
                <p className="journey-period">{experience} Years</p>
              </div>
            </div>
            <div className="journey-details">
              <img src="/assets/images/img_line_container.svg" alt="" className="journey-line" />
              <p className="journey-description">
                {about}
              </p>
            </div>
          </article>
          
          <article className="journey-item" role="listitem">
            <div className="journey-header">
              <div className="journey-icon">
                <img src="/assets/images/img_icon_building_2.svg" alt="Current role icon" />
              </div>
              <div className="journey-info">
                <h3 className="journey-institution">{currentRole}</h3>
                <p className="journey-period">Present</p>
              </div>
            </div>
            <div className="journey-details">
              <img src="/assets/images/img_line_container.svg" alt="" className="journey-line" />
              <p className="journey-description">
                {about}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Journey;