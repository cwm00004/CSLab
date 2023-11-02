import React from 'react';

const Card = ({ backgroundColor }) => {
  const cardStyle = {
    width: '18rem',
  };

  const imgStyle = {
    /* Define styles for your image here, if needed */
  };

  const cardBackgroundClass = `bg-${backgroundColor}`;

  return (
    <div className={`card ${cardBackgroundClass}`} style={cardStyle}>
      <img src="..." className="card-img-top" alt="..." style={imgStyle} />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default Card;
