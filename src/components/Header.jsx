import Search from "./Search";

export default function Header({search, setSearch}){
    return (<div style={{backgroundImage: 'url("./bg.jpg")'}} className="h-[300px] w-full bg-cover bg-center flex justify-center items-center ">
        <div className="bg-black/50 border-0 rounded-2xl p-5 flex  flex-col gap-y-2 items-center justify-center mx-4 md:mx-auto">
     <h1 className="text-center text-gray-100 text-[30px]"> FIND YOUR RECIPES HERE</h1> 
     <Search search={search} setSearch={setSearch} />    
        </div>
    </div>);
}
