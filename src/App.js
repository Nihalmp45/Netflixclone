import React from 'react';
import Rows from './Components/Rows';
import requests from './requests';
import './App.css'
import Banner from './Components/Banner';

function App() {
  return (
    <div className='app'>
      <Banner/>
      <Rows title="NETFLIX ORIGINALS"  
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Rows title="Trending Now"  fetchUrl={requests.fetchTrending} />
      <Rows title="Top Rated"  fetchUrl={requests.fetchTopRated} />
      <Rows title="Action Movies"  fetchUrl={requests.fetchActionMovies} />
      <Rows title="Comedy Movies"  fetchUrl={requests.fetchComedyMovies} />
      <Rows title="Romance Movies"  fetchUrl={requests.fetchRomanceMovies} />
      <Rows title="Documentaries"  fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
