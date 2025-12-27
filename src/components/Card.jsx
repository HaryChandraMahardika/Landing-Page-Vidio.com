import React from 'react';
import './style.css';

function Card({ image, index, title, subtitle, type }) {
  return (
    <div className={`card-wrapper ${type === 'upcoming' ? 'upcoming-card' : ''}`}>
      {index && <div className="card-rank">{index}</div>}
      <div className="card">
        <img src={`/image/${image}`} alt={title || "poster"} />
      </div>
      {type === 'upcoming' && (
        <div className="card-info-bottom">
          <p className="card-title-text">{title}</p>
          <p className="card-subtitle-text">{subtitle}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
