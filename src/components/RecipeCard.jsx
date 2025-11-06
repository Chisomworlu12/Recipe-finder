import { useState } from "react"

import { createPortal } from "react-dom"
import RecipeDetails from "./RecipeDetails.JSX"

export default function RecipeCard({recipe}){
       const [isOpen, setIsOpen] = useState(false)

function onOpen(){
    setIsOpen(true)
}
function onClose(){
    setIsOpen(false)
}
    return<><div className="flex items-center space-x-4 bg-gray-300/40 px-4 py-2 rounded-[10px] hover:opacity-75 cursor-pointer ease-in-out relative" onClick={onOpen}>
        <div className="w-20 md:w-30  "><img src={recipe.image} alt="#" className="rounded-[10px] w-20 md:w-30 h-20 object-center object-cover" loading="lazy"/></div>
         <h2  className="text-[20px]">{recipe.name}</h2>
         <AddToFavourite/>
    </div>
         
            {isOpen && createPortal(
                <RecipeDetails recipe={recipe} onClose={onClose}/>,
                document.body
            )}

    </>
}

function AddToFavourite(){
    return <div className="absolute right-3" onClick={(e) => e.stopPropagation()}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.41 19.968C7.59 17.858 2 13.035 2 8.694C2 5.826 4.105 3.5 7 3.5c1.5 0 3 .5 5 2.5c2-2 3.5-2.5 5-2.5c2.895 0 5 2.326 5 5.194c0 4.34-5.59 9.164-8.41 11.274c-.95.71-2.23.71-3.18 0"/></svg></div>
}