import Card from "./Card";
import CloseModal from "./Close";


export default function Favourite({ bookMarks, onClose}){
    
    return <>
        <div 
                className="fixed inset-0 bg-black/50 z-40 flex justify-center backdrop-blur-[2px]" onClick={onClose}>
             
                <div className=" my-[20%] md:my-auto z-50 rounded-[18px] bg-gray-300 shadow-lg max-w-[85%] h-fit  md:max-w-[450px] w-full mx-4 p-4 relative" onClick={(e) => e.stopPropagation()}>
                    <CloseModal onClose={onClose}/>
                       {bookMarks.length<1 ? <p className=" p-4 text-center">BOOKMARK EMPTY</p> :
                        <><h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Bookmarks ({bookMarks.length})
          </h2>
          <div className="grid grid-cols-1 gap-y-1  overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 max-h-[400px]">
          { bookMarks.map(recipe => <div className="flex space-x-1" key={recipe.id} ><Card recipe= {recipe} /> </div>)}
          </div></>}
                   </div> 
            
</div>
        
    </>
}