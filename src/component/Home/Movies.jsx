import React from 'react'
import "./Home.scss"
import Row from '../Row';
import { useLocation } from 'react-router-dom'; // Import useLocation


function Movies() {
  const { state } = useLocation();
  const searchResults = state && state.searchResults ? state.searchResults : [];
  return (
   <div className='searchtab' > 
      {searchResults.length > 0 && (
        <Row tittle={"Searched Movies"} arr={searchResults} />
      )}
    </div>
  )
}

export default Movies
