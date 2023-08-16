import React from 'react';
import { useState } from 'react';
import Ingredient from './Ingredient.jsx';
import Button from './Button.jsx';

const IngredientList = ({ result }) => {

  async function onClick(e) {
    e.preventDefault();
    const ingredientsArr = [];
    result.ingredients.forEach((item) => {
      ingredientsArr.push({"name": item.ingredient})
    });

    const ingredients = {"ingredients": ingredientsArr}
    console.log(ingredients);

    try {
      const response = await fetch("http://localhost:3000/api/store", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Origin": "http://localhost:3000",
          "Referer": "http://localhost:3000"
        },
        body: `ingredients=${encodeURIComponent(JSON.stringify(ingredients))}`
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const encodedRecipeUrl = await response.text();
        window.open(`https://www.amazon.com/${encodedRecipeUrl}`, '_blank', 'noopener,noreferrer')
      }
    } catch(error) {
      console.error('THIS', error);
    }
}


return (
  <ul className="list-group">
    {result?.ingredients?.[0] ? result.ingredients.map((item) => {
     return <Ingredient item={item.ingredient} key={item.ingredient} amount={item.amount}/>
    }) : <Ingredient item='Item' amount='Amount'/>
  }
    {result?.ingredients?.[0] ? <Button onClick={onClick} btnClass='btn-success amazon-btn' btnName='Order With Amazon Fresh' /> : null}
  </ul>

)}

export default IngredientList;