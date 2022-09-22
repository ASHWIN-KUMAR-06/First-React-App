import React from 'react';

function SearchResult(props) {

  const api = `https://source.unsplash.com/600x400/?${props.name}`;

  return (
    <>
    <div className='img-container'>
      <img src={api} alt="image" />
    </div>
    </>
  )
}


export default SearchResult;