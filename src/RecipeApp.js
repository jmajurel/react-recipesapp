import React, { Component} from 'react';
import './RecipeApp.css';
import Recipe from './Recipe';
import NavBar from './NavBar';

/* helper class */
class RecipeEntry {
  constructor(name, img, ingredients, instructions){
    this.name = name;
    this.img = img;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
};

class RecipeApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recipes: [ 
	new RecipeEntry (
	  "Dauphinoise potatoes",
	  "/images/Dauphinoise_potatoes.jpg", 
	  ['Butter','floury potatoes','double cream', 'milk', 'garlic', 'thyme', 'compote'],
	  "Heat the oven to 180C/fan 160C/gas 4. Butter a large baking dish, and add the potato slices in layers into the dish seasoning each layer generously. Bring the cream, milk, garlic and thyme to just before a simmer, and pour over the potatoes, removing the garlic cloves. Sit on a baking sheet (to prevent any spills) and transfer to the oven. Bake for 50 minutes until the potatoes are soft when you push a skewer or a knife into the centre, and sauce bubbling. Scatter over the comté and cook for another 10 minutes until golden. Serve with roast dinners or duck breast."),
        new RecipeEntry (
	  "Easy duck config", 
	  "/images/duckConfit.jpg",
	  ['white wine', 'chicken stock', 'thyme', 'onion', 'black peppercorns', 'bay leaves', 'garlic', 'duck legs'], 
	  "STEP 1 Heat the wine, stock, thyme, onion, peppercorns, bay and garlic in a pan just big enough to fit the duck legs, until simmering. Nestle in the duck, skin side down. The legs should be completely submerged in the liquid – top up with water if you need to. Put the lid on, and cook for 11/2 hours until the meat starts to come away from the bone. STEP 2 Cool in the stock until warm, then remove the duck and allow to cool completely, being careful not to pierce the skin. Put into a shallow freezable container, making sure they’re not touching, and freeze. They will keep in the freezer for up to 2 months. STEP 3 To serve, allow the duck legs to defrost overnight in the fridge. Heat the oven to 220C/fan 200C/gas 7 and put the duck legs on a baking tray. Make sure the duck skin still covers the meat, and sprinkle generously with sea salt. Cook for 35-40 minutes until golden and crisp."),
	new RecipeEntry (
	      "Tapenade", 
	      "/images/tapenade.jpg",
	      ['pitted black olives', 'capers', 'anchovies', 'olive oil', 'garlic', 'red chilli', 'baguette', 'herbs de Provence'],
	      "STEP 1 Blend the olives, capers, anchovies and oil, then stir in the garlic and chilli. STEP 2 Rub the baguette with olive oil and garlic, toast and spread with tapenade.")
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
	<div className="recipes-container">
	  { this.state.recipes.map((recipe, idx) => (
	      <Recipe key={idx} {...recipe} />
	    )) 
	  }
	</div>
      </div>
    );
  }
};

export default RecipeApp;
