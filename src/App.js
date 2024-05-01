// import { useEffect } from 'react';
import axios, { all } from 'axios';
import MainSection from "./containers/MainSection";
import NavBar from "./components/NavBar";
import { useEffect, useState } from 'react';

function App() {
  const [movie, setMovie] = useState([]);
  const [allPages, setAllPages] = useState(0);
  // Get All movies //
  const getAllData = async () => {
    const data = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=63ea384a25fc9f28f99bddf97bb0196c&language=en-US");
    const finalData = data.data.results;
    setAllPages(data.data.total_pages);
    setMovie(finalData);
  }

  useEffect(() => {
    getAllData();
  }, [])
  // ## Get All movies ## //

  // Get movie Page //
  async function getPage(page) {
    const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=63ea384a25fc9f28f99bddf97bb0196c&page=${page}`);
    console.log(data.data.total_pages);
    const finalData = data.data.results;
    setMovie(finalData);
  }
  //## Get movie Page ## //

  // Search in movie list
  const search = async (text) => {
    if (text === "") {
      getAllData();
    } else {

      const searchData = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${text}&api_key=63ea384a25fc9f28f99bddf97bb0196c`);
      setMovie(searchData.data.results);
      setAllPages(searchData.data.total_pages);
    }
  }
  return (
    <div className="App">
      <NavBar search={search} />
      <MainSection data={movie} getPage={getPage} allPages={allPages} />
    </div>
  );
}

export default App;
