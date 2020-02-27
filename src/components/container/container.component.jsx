import React from 'react';
import './container.styles.scss';

const Container = ({movies, baseUrl, posterSize}) => {
    return(
        <div className="container">
            <Section title="new releases" movies={movies} baseUrl={baseUrl} posterSize={posterSize} />
            <Section title="new releases" movies={movies} baseUrl={baseUrl} posterSize={posterSize} />
        </div>
    )
    
};
export default Container;