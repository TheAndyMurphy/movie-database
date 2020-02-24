import React from 'react';
import './App.scss';
import Container from './components/container/container.component';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        apiKey : process.env.REACT_APP_KEY,
        movies: [],
        baseUrl: '',
        posterSize: ''
    }
  }
  componentDidMount(){
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.state.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
    .then(res => res.json())
    .then(data => this.setState(prevState => ({...prevState, movies: data.results})))
    .catch(err => console.log(err));
    fetch(`https://api.themoviedb.org/3/configuration?api_key=${this.state.apiKey}`)
    .then(res => res.json())
    .then(data => this.setState(prevState => ({...prevState, baseUrl: data.images.base_url, posterSize: data.images.poster_sizes[4]})))
  }
  render(){
    return (
      <div className="App">
        <h1>Movie Database</h1>
        <Container movies={this.state.movies} baseUrl={this.state.baseUrl} posterSize={this.state.posterSize} />
      </div>
    );
  }
}

export default App;
