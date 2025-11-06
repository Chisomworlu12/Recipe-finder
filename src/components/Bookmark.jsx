import { createPortal } from "react-dom"
import Favourite from "./Favourite"
import { useState } from "react"

export default function BookMark({bookMarks, setBookMarks,recipes}){

       const [isOpen, setIsOpen] = useState(false)
    
    function onOpen(){
        setIsOpen(true)
    }
    function onClose(){
        setIsOpen(false)
    }
    return<> <div className="flex justify-end my-4 mx-5"><div className="relative z-0" onClick={onOpen}><svg className="text-gray-300" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19.5V4h12v15.5l-6-2.583z"/></svg>
    {bookMarks.length<1 ?"":<div className="absolute font-bold z-50 -top-2 left-2.5 text-red-500 ">{bookMarks.length}</div>}
    </div>
    </div>
       {isOpen && createPortal(
                    <Favourite onClose={onClose} bookMarks={bookMarks} setBookMarks={setBookMarks} recipes={recipes}/>,
                    document.body
                )}
                </>
}