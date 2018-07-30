import React from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

let count = 0;
const colors = ['#FFCCCC', '#FFE5CC', '#FFFFCC', '#E5FFCC', 'CCFFCC'];

function Recipe(props) {
  return (
    <div className='recipe' style={{ backgroundColor: colors[count++] }}>

      <img src={props.img} alt={props.name} />

      <h3>{props.name}</h3>

      <div className="ingredients">
	<h4>Ingredients:</h4>
	<ul>
	  {props.ingredients.map(ingredient => <li>{ingredient}</li>)}
	</ul>
      </div>

      <div className="instructions">
	<h4>Instructions:</h4>
	<p>{props.instructions}</p>
      </div>

    </div>
  );
}

Recipe.defaultProps = {
  ingredients: []
};

Recipe.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  ingredients: PropTypes.array,
  instructions: PropTypes.string
};

export default Recipe;
