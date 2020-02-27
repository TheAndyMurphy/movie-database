import React, { useState, useEffect }from 'react';
import './App.scss';
import NavBar from './components/navbar/navbar.component';
import Section from './components/section/section.component';


const App = () => {

  const apiKey = process.env.REACT_APP_KEY;
  const [newMovies, setNewMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [baseUrl, setBaseUrl] = useState('');
  const [posterSize, setPosterSize] = useState('');

  useEffect(() => {
    const loadConfig = async() => {
      try{
        const response = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`);
        const data = await response.json();
        setBaseUrl(data.images.base_url);
        setPosterSize(data.images.poster_sizes[4]);
      }
      catch(err){
        console.log(err);
      }
    }
  
    const loadPopularMovies = async() => {
      try{
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
        const data = await response.json();
        setPopularMovies(data.results);
      }
      catch(err){
        console.log(err);
      }
    }
    const loadNewestMovies = async() => {
      try{
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1&sort_by=primary_release_date.desc&primary_release_date.gte=2020-01-25`);
        const data = await response.json();
        setNewMovies(data.results);
      }
      catch(err){
        console.log(err);
      }
    }
    loadConfig();
    loadPopularMovies();
    loadNewestMovies();
  }, [apiKey])




  return(
    <div className="App">
        <NavBar />
        <div className="container">
          <Section movies={popularMovies} baseUrl={baseUrl} posterSize={posterSize} />
          <Section movies={newMovies} baseUrl={baseUrl} posterSize={posterSize} />
        </div>

    </div>
  )
}

export default App;
