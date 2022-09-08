import './Workcard.css';
import Workcard from './Workcard';
import WorkCardData from './WorkCardData';

import React from 'react';



function Work() {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects

        </h1>
        <div className='project-container'>
            {WorkCardData.map((val, ind) => {
                return (
                    <Workcard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    source={val.source}
                    
                    />

                )
            })}
        </div>
    </div>
  )
}

export default Work;