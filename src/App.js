import './App.css';
import {useEffect} from "react";

// my api key 191e2350

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=191e2350"
function App() {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();


      console.log(data.search);
  }

useEffect(() => {
    searchMovies('yugioh')
}, []);

  return (
    <div className="App">
New app 
    </div>
  );
}

export default App;
