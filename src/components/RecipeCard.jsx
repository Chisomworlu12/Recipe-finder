import { useState } from "react"

import { createPortal } from "react-dom"
import RecipeDetails from "./RecipeDetails"

import Card from "./Card"



export default function RecipeCard({recipe, children}){
       const [isOpen, setIsOpen] = useState(false)

function onOpen(){
    setIsOpen(true)
}
function onClose(){
    setIsOpen(false)
}
    return<><div className="flex items-center space-x-4 bg-gray-300/40 px-4 py-2 rounded-[10px] hover:opacity-75 cursor-pointer ease-in-out relative" onClick={onOpen}>
        <Card className="w-20 md:w-30" recipe={recipe}/>
         {children}
    </div>
         
            {isOpen && createPortal(
                <RecipeDetails recipe={recipe} onClose={onClose}/>,
                document.body
            )}

    </>
}

