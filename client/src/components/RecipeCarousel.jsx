import React from 'react';
import { useState } from 'react';
import RecipeCard from './RecipeCard.jsx'

const RecipeCarousel = ( { result } ) => {

return (

<div id="carouselExample" className="carousel slide">
  <div className="d-flex carousel-inner">
    <div className="carousel-item active">
    {result?.steps?.[0] ? <RecipeCard key='1' step='Step 1' length={`1/${result.steps.length}`}  result={result.steps[0]} /> : <RecipeCard key='1' step='Step 1' result='This is a test recipe step' />}
    </div>
    {result?.steps?.[1] ? result.steps.slice(1).map((step, i) => {
     return (
      <div key={i + 2} class="carousel-item">
        <RecipeCard result={step} length={`${i+2}/${result.steps.length}`} step={`Step ${i + 2}`}/>
      </div> )
    }) : null}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

)
};

export default RecipeCarousel;