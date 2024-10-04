import React from 'react';

function SchemeCard({ title, description, imageUrl, websiteUrl, benifits }) {
  return (
    <div className="scheme-card">
      <img src={imageUrl} alt={title} className="scheme-image" />
      <div className="scheme-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className='ch'>{benifits}</div>
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">Learn More</a>
      </div>
    </div>
  );
}

export default SchemeCard;
