import React from 'react'
import MyCard from '../components/MyCard';
import { Container } from 'react-bootstrap';
import PaginationCard from '../components/Pagination';

const MainSection = ({data,getPage,allPages}) => {
  const allMovies = data.map((e)=>{
    return <MyCard key={e.id} data = {e} />
  })
  return (
    <>
        <Container className='main-section my-4'>
          {allMovies}
        </Container>
        <PaginationCard getPage={getPage} allPages = {allPages}/>
    </>
  )
}

export default MainSection;