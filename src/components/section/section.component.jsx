import React from 'react';
import './section.styles.scss';
import Card from '../card/card.component';


const Section = ({title, movies, baseUrl, posterSize}) => (
    <div className="section">
        <h3 className="section__title">{title}</h3>
        <div className="section__movies">
            {
                movies.map(movie => (
                    <Card key={movie.id} poster={movie.poster_path} title={movie.title} baseUrl={baseUrl} posterSize={posterSize} vote={movie.vote_average} date={movie.release_date} />
                )).slice(0, 10)
            }
        </div>
    </div>
    
);

export default Section;