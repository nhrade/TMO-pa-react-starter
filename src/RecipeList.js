
export default function RecipeList({ recipes, setRecipes }) {
    console.log(recipes);
    if(recipes.length <= 0) {
        return <p>There are no recipes to list</p>
    }
    else {
        return (
        <ul>
            {recipes.map(recipe => {
            return ( <li key={recipe["recipe-name"]}>
                <h3>{recipe["recipe-name"]}</h3>
                <p>{recipe["recipe-instructions"]}</p>
                </li>
            );
            })}
        </ul>
        );
    }
}