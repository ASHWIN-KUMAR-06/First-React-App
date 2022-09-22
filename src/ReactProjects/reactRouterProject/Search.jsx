import React, { useState } from 'react';
import SearchResult from './SearchResult';



function Search() {
  const [img, setImg] = useState("");

  function inputEvent(event) {
    const data = event.target.value;
    setImg(data);
  }

  return (
    <>
    <div className='search_bar'> 

      <input type="text" placeholder='Search Anything..' onChange={inputEvent} value={img} />

      {
        img==="" ? null : <SearchResult name={img} />
      }
    </div>
    </>
  )
}

export default Search;