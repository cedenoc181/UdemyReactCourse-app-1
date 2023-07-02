import React from 'react'

function MovieCard({ testMovie }) {
  return (
    <div className='movie'>
    <div>
      <p>{testMovie.Year}</p>
    </div>

    <div>
      <img 
      src={testMovie.Poster !== "N/A" ? testMovie.Poster : "https://via.placeholder.com/400"}
      alt={testMovie.Title}
      />
    </div>

    <div>
      <span>
        {testMovie.Type}
      </span>
      <h3>
        {testMovie.Title}
      </h3>
    </div>
</div>
  )
}

export default MovieCard