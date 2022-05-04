import './App.css';
import { useState } from 'react'
import AddRecipe from './AddRecipe';
import RecipeList from './RecipeList';

function App() {

  const [recipes, setRecipes] = useState([]);

  return (
    <div>
      <h1>My Recipes</h1>
      <RecipeList recipes={recipes} setRecipes={setRecipes}></RecipeList>
      <AddRecipe recipes={recipes} setRecipes={setRecipes}></AddRecipe>
    </div>
  );
}

export default App;
