import React from 'react';
import './RecipeList.css';
import Recipe from './Recipe';

function RecipeList(props){

  const recipes = props.recipes.map(recipe => (
      <Recipe 
	deleteRecipe={props.deleteRecipe} 
	key={recipe.id} 
	{...recipe} 
      />));

  return (
    <ul className="RecipeList">
      {recipes} 
    </ul>
  );
}

export default RecipeList;
