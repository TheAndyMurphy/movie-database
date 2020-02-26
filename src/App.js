import React, { useState, useEffect }from 'react';
import './App.scss';
import Container from './components/container/container.component';

const App = () => {

  const apiKey = process.env.REACT_APP_KEY;
  const [movies, setMovies] = useState([]);
  const [baseUrl, setBaseUrl] = useState('');
  const [posterSize, setPosterSize] = useState('');

  useEffect(() => {
    loadConfig();
    loadData();
  })

  const loadConfig = async() => {
    const response = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`);
    const data = await response.json();
    setBaseUrl(data.images.base_url);
    setPosterSize(data.images.poster_sizes[4]);
  }

  const loadData = async() => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
    const data = await response.json();
    setMovies(data.results);
  }


  return(
    <div className="App">
        <h1>Movie Database</h1>
        <Container movies={movies} baseUrl={baseUrl} posterSize={posterSize} />
    </div>
  )
}

export default App;
