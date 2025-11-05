export default function RecipeCard({recipe}){
    return<div className="flex items-center space-x-4 bg-gray-300/40 px-4 py-2 rounded-[10px] hover:opacity-75 cursor-pointer">
        <div className="w-20 md:w-30  "><img src={recipe.image} alt="#" className="rounded-[10px] w-20 md:w-30 h-20 object-center object-cover" /></div>
         <h2  className="text-[20px]">{recipe.name}</h2>
    </div>

    
}