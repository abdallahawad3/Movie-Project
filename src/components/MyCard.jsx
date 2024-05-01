import React from 'react'
const MyCard = ({data}) => {

  return (
    <div className='card'>
      <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt={data.title} />
      <div className='main-content'>
        <p>Movie Name: {data.original_title}</p>
        <p>Release Date: {data.release_date}</p>
        <p>Number of residents: {data.vote_average}</p>
        <p>Evaluation number: {data.vote_count}</p>
      </div>
    </div>
  )
}

export default MyCard