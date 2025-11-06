

export default function RecipeDetails({onClose, recipe}){

    return <>
        <div 
                className="fixed inset-0 bg-black/50 z-40 flex justify-center backdrop-blur-[2px]"
                onClick={onClose}>
                   
            <div className=" my-[20%] md:my-auto z-50 rounded-[18px] bg-gray-300 shadow-lg max-w-[85%] h-fit  md:max-w-[450px] w-full mx-4 "  onClick={(e) => e.stopPropagation()} >
                <div className="h-[300px] relative">
                    <img src={recipe.image} alt={recipe.name} className="w-full h-full object-center object-cover rounded-t-[18px]" loading="lazy"/>
                    <div className="absolute right-3 top-3 text-gray-300/80 rounded-full cursor-pointer hover:text-gray-100/80 bg-black/70" onClick={onClose} >
                       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"/></svg>
                    </div>
                </div>
                <div className="p-4 text-center">
                    <h2 className="text-xl font-bold">{recipe.name}</h2>
                    <h3 className=" mt-3 text-[18px] font-bold underline">INGREDIENTS</h3>
                    <p>{recipe.ingredients.join(", ")}</p>
                </div>
</div>
        </div>
    </>
}