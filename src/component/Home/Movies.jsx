import React from 'react'
import Row from '../Row'
import { useLocation } from 'react-router-dom'; // Import useLocation


function Movies() {
  const { state } = useLocation();
  const searchResults = state && state.searchResults ? state.searchResults : [];
  return (
    <div className='seachtab' >
      <Row tittle={"Searched Movies"} arr={searchResults} />
     
    </div>
  )
}

export default Movies
