
export default function Header({children}){
    return (<div style={{backgroundImage: 'url("./bg.jpg")'}} className="h-[300px] w-full bg-cover bg-center flex justify-center items-center ">
        <div className="bg-black/60 border-0 rounded-2xl p-5 flex  flex-col gap-y-2 items-center justify-center mx-4 md:mx-auto backdrop-blur-[2px]">
     <h1 className="text-center text-gray-100 text-[30px]">{`Search a food to view its recipe`.toUpperCase()}</h1> 
     {children}    
        </div>
    </div>);
}
