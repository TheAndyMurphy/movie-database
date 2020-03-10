import React, { useState, useEffect }from 'react';
import './App.scss';
import NavBar from './components/navbar/navbar.component';
import Section from './components/section/section.component';
import Modal from './components/modal/modal.component';
import Footer from './components/footer/footer.component';



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
    const loadNewReleases = async() => {
      try{
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US?&primary_release_date.gte=2020-02-15&primary_release_date.lte=2020-03-10`);
        const data = await response.json();
        setNewMovies(data.results);
      }
      catch(err){
        console.log(err);
      }
    }
    loadConfig();
    loadPopularMovies();
    loadNewReleases();
  }, [apiKey]);

  const [modalState, setModalState] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const toggleModal =() => setModalState(!modalState);
  const toggleMovie = async (movie) => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${apiKey}&append_to_response=videos`);
      const data = await response.json();
      setSelectedMovie(data);
      toggleModal();
      console.log(data)
  };


  return(
    <div className="App">
      {
        modalState && 
        <Modal movie={selectedMovie} toggleModal={toggleModal} baseUrl={baseUrl} posterSize={posterSize} />
      }
        <NavBar />
        <div className="container">
          <Section title='popular movies' movies={popularMovies} baseUrl={baseUrl} posterSize={posterSize} toggleMovie={toggleMovie}/>
          <Section title='new releases' movies={newMovies} baseUrl={baseUrl} posterSize={posterSize}  toggleMovie={toggleMovie}/>
          <Footer />

        </div>

    </div>
  )
}

export default App;
