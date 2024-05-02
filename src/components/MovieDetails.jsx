// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import img from "./img.avif"
import PaginationCard from './Pagination';
import axios from 'axios';

const MovieDetails = ({getPage,allPages}) => {
  const [oneMovie,setOneMovie] = useState([]);
  const id = useParams();
  const getMovie = async () => {
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/${id.id}?api_key=63ea384a25fc9f28f99bddf97bb0196c`);
    setOneMovie(movie.data)
}

  useEffect(()=>{
    getMovie();
  },[])

  return (
    <Container className=' w-100 my-4'>
      <Row >
        <Col>
            <Card className='d-flex w-100 flex-row align-items-center movie-details-card'>
              <Card.Img  src={`https://image.tmdb.org/t/p/original${oneMovie.poster_path}`} className='movie-details-card-img'/>
              <Card.Body>
                <Card.Title>Movie Name: {oneMovie.original_title}</Card.Title>
                <Card.Title>Release Date: {oneMovie.release_date}</Card.Title>
                <Card.Title>vote counts: {oneMovie.vote_count}</Card.Title>
                <Card.Title>vote_average: {oneMovie.vote_average}</Card.Title>
              </Card.Body>
            </Card>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex align-items-start'>
          <Card className=' w-100 flex-row align-items-start movie-details-card mt-2'>
            <Card.Body className=''>
              <Card.Title>Description</Card.Title>
              <Card.Text>{oneMovie.overview}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col className='d-flex gap-2 justify-content-center'>
          <Link to={"/"}>
            <Button variant='btn btn-outline' className='btn btn-primary'>Go To Home Page</Button>
          </Link>
          <a href={`${oneMovie.homepage}`} target='_blank'>
          <Button variant='btn btn-outline' className='btn btn-primary'>Show The Movie</Button>
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetails