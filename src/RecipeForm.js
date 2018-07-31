import React, { Component } from 'react';
import './RecipeForm.css';

class RecipeForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
      instructions: '',
      ingredients: [''],
      img:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  addIngredient(e) {
    return 1;
  }

  handleCloseForm(e) {

  }


  render(){

    const ingredients = this.state.ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>);
    return (
      <form className="form-recipe" onSubmit={this.handleSubmit}>
	<button onClick={this.handleCloseForm}>
	  X
	</button>
	<div className="form-recipe-title">
	  <label htmlFor="recipe-title">Title</label>
	  <input 
	    id="recipe-title" 
	    name="title"
	    type="text" 
	    onChange={this.handleChange} 
	    value={this.state.title}
	  />
	</div>

	<div className="form-recipe-inst">
	  <label htmlFor="form-recipe-inst-input">Instructions</label>
	  <textarea
	     id="form-recipe-inst-input"
	     name="instructions"
	     cols="100"
	     rows="40"
	     onChange={this.handleChange} 
	     value={this.state.instuctions}
	  />
	</div>

	<div className="form-recipe-ing">
	  <ol>
	    {ingredients}
	  </ol>
	  <button onClick={this.addIngredient}>+</button>
	</div>

	<div className="form-recipe-img">
	  <label htmlFor="img">Image Url</label>
	  <input 
	    type="text" 
	    name="img" 
	    onChange={this.handleChange} 
	  />
	</div>

	<input type="submit" value="SAVE"/>

      </form>
    );
  }
}

export default RecipeForm;

