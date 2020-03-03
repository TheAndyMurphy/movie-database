import React from 'react';
import './card.styles.scss';
import { ReactComponent as Star } from '../../assets/icons/star.svg';

const Card = ({title, baseUrl, posterSize, poster, vote, date, handleClick, movie}) => (
    <div className="card" onClick={()=>handleClick(movie.id)}>
        <img src={`${baseUrl}${posterSize}${poster}`} alt="Poster"/>
        <div className="card__details">
            <h2 className="card__title">{title.slice(0,25)}</h2>
            <div className="card__footer">
            <span className="card__date">{date.slice(0,4)}</span><span className="card__score">{vote} <Star /></span>
            </div>
        </div>
    </div>
);

export default Card;