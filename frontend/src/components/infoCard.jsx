import React from 'react';
import './infoCard.css';

function InfoCard({ title, imgUrl, description, youtubeUrl }) {
    return (
      <div className="card">
        <div className="img-container">
          <img src={imgUrl} alt={title} className="card-img" />
          <div className="overlay">
            <h2 className="card-title">{title}</h2>
            <p className="description">{description}</p>
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
              <button className="card-button">Watch on YouTube</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default InfoCard;