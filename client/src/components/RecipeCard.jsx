import React from 'react';
import { useState } from 'react';

const RecipeCard = ( {result, step, length} ) => (
  <div>
    <div className="card recipe-card" style={{width: '18rem'}}>
      <div className="card-body d-flex align-items-center flex-column justify-content-between">
        <h5 className="card-title">{step}</h5>
        <p className="card-text">{result}</p>
        <p className="recipe-length">{length}</p>
      </div>
    </div>
  </div>
)

export default RecipeCard;