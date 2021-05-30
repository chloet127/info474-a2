import React from 'react';

import VegaChart from './charts/vegaChart';
import final1 from './data/final1.json';
import final2 from './data/final2.json';

function Final() {

  return (
    <div className='container'>
      <div className='flex-child'>
        <h1>Interactive Dashboard: Spotify Songs</h1>
        <p>Final Project, INFO 474 Spring 2021</p>
      </div>

      <div className='flex-child'>
        <Intro />
      </div>

      <div className='flex-child'>
        <VegaChart data={final2} id={'final2'} />
      </div>

      <div className='flex-child'>
        <VegaChart data={final1} id={'final1'} />
      </div>

      <div className='flex-child'>
        <WriteUp />
      </div>

    </div>
  );
}

function Intro(){
  return(
    <div>
      <h2>Introduction</h2>
      <p>
        
      </p>
    </div>
  );
}

function WriteUp(){
  return(
    <div>
      <h2>Write-Up</h2>
      <p>
        
      </p>
    </div>
  );
}

export default Final;