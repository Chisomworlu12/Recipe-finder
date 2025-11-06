export default function Search({search, setSearch}){
    return( <div>
        <div className="flex items-center space-x-1  bg-gray-500/70 p-2 rounded-lg hover:scale-105 ease-in-out">
        <input type="text" value={search} onChange={e=> setSearch(e.target.value)}  className="placeholder-white text-gray-100 p-1 border-none outline-none focus:outline-none focus:border-none" placeholder="INPUT FOOD HERE" />
        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"/></svg>
        </div>
    </div>);
}