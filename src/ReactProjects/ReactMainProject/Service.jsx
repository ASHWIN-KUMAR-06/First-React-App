import React from 'react';
import Card from './Card';

import Sdata from './Sdata';


function Service() {

  return (
    <>
      <div className='service'>
        <h2>our Services</h2>
        <div className='cards-container'>
          {
            Sdata.map((value, index)=>{
              return <Card
                key={index}
                title={value.title}
                src={value.src}
               />
            })
          }
        </div>
      </div>
    </>
  )
}

export default Service;