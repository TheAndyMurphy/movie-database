import React from 'react';
import './modal.styles.scss';
import { ReactComponent as Star } from '../../assets/icons/star.svg';

const Modal = ({movie, toggleModal, baseUrl, posterSize}) => {
    const movieLink = `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
    const playClick = () => {
        setTimeout(()=>{
            console.log(movieLink);
            window.open(movieLink);
        }, 1000, {movieLink})
    }
    return(
        
    <div className="modal">
        <div className="modal__movie">
            <button className="modal__movie__close" onClick={toggleModal}>
                Close X
            </button>
            <img src={`${baseUrl}${posterSize}${movie.backdrop_path}`} alt=""/>
            <button className="modal__movie__play" onClick={playClick}>
                <span><Star /> {movie.vote_average}</span>
                Watch Trailer
                <svg className="play__icon" width="543" height="543" viewBox="0 0 543 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="271.5" cy="271.5" r="251.5" stroke="white" strokeWidth="40"/>
                    <circle cx="271.5" cy="271.5" r="251.5" stroke="url(#linear)" strokeWidth="50"/>
                    <path d="M198.506 395.226L197.917 141.141L417.667 268.694L198.506 395.226Z" stroke="white" strokeWidth="0"/>
                    <defs>
                        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%"   stopColor="#0D3D52"/>
                        <stop offset="100%" stopColor="#3DBCF2"/>
                        </linearGradient>
                    </defs>
                </svg>
            </button>
            <div className="modal__movie__details">
                <div className="modal__movie__details__title"><h3>{movie.title}</h3><span>{movie.release_date.slice(0,4)}</span></div>
                <hr/>
                <div className="modal__movie__details__desc">
                    <p>{movie.overview}</p>
                </div>

            </div>
        </div>
    </div>
    )
};

export default Modal;