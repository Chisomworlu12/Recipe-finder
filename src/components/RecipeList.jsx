import RecipeCard from "./RecipeCard";

export default function RecipeList({recipes,search}){
   
    return <div className="m-4">
    {search=== "" ? "" : <p >result {recipes.length}</p>}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {recipes.map(recipe => <RecipeCard recipe= {recipe} key={recipe.id}/>)}
    </div>
    </div>
}