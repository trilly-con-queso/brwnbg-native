import React from 'react';
import Form from './Form.jsx';
import RecipeCarousel from './RecipeCarousel.jsx';
import IngredientList from './IngredientList.jsx';

const Body = ( {result} ) => (
  <>
    <div className='col d-flex justify-content-center'>
      <RecipeCarousel result={result} />
    </div>
    <div className='col d-flex'>
      <IngredientList result={result} />
    </div>
  </>
);

export default Body;