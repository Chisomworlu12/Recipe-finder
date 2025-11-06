import RecipeCard from "./RecipeCard";

export default function Favourite(){
    return <>
        <div 
                className="fixed inset-0 bg-black/50 z-40 flex justify-center backdrop-blur-[2px]">
               
                <div className="grid grid-cols-1">
                       {recipes.map(recipe => <RecipeCard recipe= {recipe} key={recipe.id} />)}
                   </div> 
            
</div>
        
    </>
}