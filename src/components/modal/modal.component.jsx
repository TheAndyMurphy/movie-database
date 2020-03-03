import React from 'react';
import './modal.styles.scss';

const Modal = ({movie, toggleModal, baseUrl, posterSize}) => (
    <div className="modal">
        <div className="modal__movie">
            <img src={`${baseUrl}${posterSize}${movie.poster_path}`} alt=""/>
            <a href={`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`} target='blank'>Watch Trailer</a>
            <p>{movie.title}</p>
            <button onClick={toggleModal}>CLOSE X</button>
        </div>
    </div>
);

export default Modal;