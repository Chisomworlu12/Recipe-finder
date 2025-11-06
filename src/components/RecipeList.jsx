

import AddToFavourite from "./FavouriteIcon";
import RecipeCard from "./RecipeCard";

export default function RecipeList({recipes,search,onToggleFavorite,bookMarks}){

 function isFavourite(recipeId) {
    return bookMarks.some((item) => item.id === recipeId)
  }
    return <div className="mx-5 my-7">
        
   {recipes.length===0 ?<p className="text-center mt-20 font-bold text-[25px]">FOOD NOT FOUND</p>:<> {search=== "" ? "" : <p >result {recipes.length}</p>}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {recipes.map(recipe => <RecipeCard recipe= {recipe} key={recipe.id}><AddToFavourite onToggleFavorite={onToggleFavorite} recipe = {recipe} isFavourite={isFavourite(recipe.id)}/></RecipeCard> )}
    </div></>}
    </div>
}