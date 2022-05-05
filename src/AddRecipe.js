import { useState } from "react"

export default function AddRecipe({ recipes, setRecipes }) {
    let [showAddRecipe, setShowAddRecipe] = useState(false);
    let [recipeName, setRecipeName] = useState("");
    let [recipeInstructions, setRecipeInstructions] = useState("");

    const addRecipe = () => {
        setShowAddRecipe(true);
    }

    const submitRecipe = () => {
        const newRecipes = recipes.concat({'recipe-name': recipeName, 'recipe-instructions': recipeInstructions});
        setRecipes(newRecipes);
    }
    
    if(showAddRecipe) {
        return (
            <div> 
                <form>
                    <label>recipe-name:</label><input role="textbox" name="recipe-name" value={recipeName} onChange={e => setRecipeName(e.target.value)} type="text"></input>
                    <br></br>
                    <label>recipe-instructions:</label><input role="textbox" name="recipe-instructions" value={recipeInstructions} onChange={e => setRecipeInstructions(e.target.value)} type="text"></input>
                </form>  
                <button onClick={submitRecipe}>Submit</button>
            </div>
        )
    }
    else {
        return <button onClick={addRecipe}>add recipe</button>
    }
}