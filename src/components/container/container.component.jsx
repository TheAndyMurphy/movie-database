import React from 'react';
import './container.styles.scss';
import Card from '../card/card.component';

const Container = ({movies, baseUrl, posterSize}) => {
    return(
        <div className="container">
          {
              movies.map(movie => (
                  <Card key={movie.id} poster={movie.poster_path} title={movie.title} baseUrl={baseUrl} posterSize={posterSize} />
              ))
          }
        </div>
    )
    
};
export default Container;