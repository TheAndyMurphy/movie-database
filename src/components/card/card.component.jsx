import React from 'react';
import './card.styles.scss';

const Card = ({title, baseUrl, posterSize, poster}) => (
    <div className="card">
        <img src={`${baseUrl}/${posterSize}/${poster}`} alt="Poster"/>
        <div className="card__details">
            <h2>{title}</h2>
        </div>
    </div>
);

export default Card;