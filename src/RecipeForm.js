import React, { Component } from 'react';
import './RecipeForm.css';

class RecipeForm extends Component {

  static defaultProps = {
    onClose(){},
    onSave(){}
  };

  constructor(props){
    super(props);
    this.state = {
      title: '',
      instructions: '',
      ingredients: [''],
      img:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewIngredient = this.handleNewIngredient.bind(this);
    this.updateIngredient = this.updateIngredient.bind(this);
  }

  updateIngredient(e) {
    let idx = Number(e.target.name.split('-')[1]);
    console.log(idx);
    console.log(e.target.value);
    let ingredients = this.state.ingredients.map((ing, i) => (
      i === idx ? e.target.value: ing
    ));
    this.setState({ingredients});
  }

  handleNewIngredient(e) {
    const {ingredients} = this.state;
    this.setState({ingredients: [...ingredients, '']})

  } 

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave({...this.state});
    this.setState({
      title: '',
      instructions: '',
      ingredients: [''],
      img: ''
    });
  }



  render(){

    const {title, instructions, ingredients, img} = this.state;

    let inputs = ingredients.map((ingredient, idx) => (
	  <div
	    className="recipe-form-line"
	    key={`ingredient-${idx}`}
	  >
	    <label>
	      {`${idx+1}. `}
	      <input
		type="text"
		name={`ingredient-${idx}`}
		placeholder=" Ingredient"
		onChange={this.updateIngredient}
		value={ingredient}
	      />
	    </label>
	  </div>
	));

    return (
      <div className="recipe-form-container">
	<form className="recipe-form" onSubmit={this.handleSubmit}>
	  <button onClick={this.props.onClose}>
	    X
	  </button>
	  <div className="recipe-form-line">
	    <label htmlFor="recipe-title-input">Title</label>
	    <input 
	      id="recipe-title-input" 
	      name="title"
	      type="text" 
	      value={title}
	      size={42}
	      autoComplete="off"
	      onChange={this.handleChange} 
	    />
	  </div>

	    <label 
	      htmlFor="recipe-instructions-input"
	      style={{marginTop: '5px'}}
	    >
	      Instructions
	    </label>
	    <textarea
	       key="instructions"
	       id="form-recipe-inst-input"
	       type="Instructions"
	       name="instructions"
	       cols="50"
	       rows="8"
	       autoComplete="off"
	       value={instructions}
	       onChange={this.handleChange} 
	    />
	    {inputs}
	    <button
	      type="button"
	      onClick={this.handleNewIngredient}
	      className="buttons"
	    >
	      +
	    </button>

	  <div className="recipe-form-line">
	    <label htmlFor="recipe-img-input">Image Url</label>
	    <input 
	      id="recipe-img-input"
	      type="text" 
	      placeholder=""
	      name="img" 
	      value={img}
	      autoComplete="off"
	      onChange={this.handleChange} 
	    />
	  </div>

	  <button 
	    type="submit" 
	    className="buttons"
	    style={{alignSelf: 'flex-end', marginRight: 0}}
	  >
	    SAVE
	  </button>
        </form>
      </div>
    );
  }
}

export default RecipeForm;

