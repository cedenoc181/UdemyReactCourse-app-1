import './App.css';
import {useEffect} from "react";

// my api key 191e2350

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=191e2350"
function App() {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();


      console.log(data.Search);
  }

useEffect(() => {
    searchMovies('batman')
}, []);

  return (
    <div className="App">
        <h1>New app </h1> 
    </div>
  );
}

export default App;
