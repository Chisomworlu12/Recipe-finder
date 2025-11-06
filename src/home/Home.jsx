import { useEffect, useState } from "react";
import Header from "../components/Header";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";




export default function Home(){
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [isLoading,setIsLoading ] =useState(false)
    const [errorMsg,setErroMsg ] =useState("")


    useEffect( function(){
    async function fetchRecipe() {
      try{  setIsLoading(true)
        setErroMsg("")
        const res = await fetch(`/data/recipes.json`);
        const data = await res.json()
    setRecipes(data)}catch (err){
setErroMsg(err.message)
    }finally{
        setIsLoading(false)
    }
    } 
    fetchRecipe()
},[]);

 const filteredRecipes = search.trim() === ""
      ? recipes.slice(0,8)
      : recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );


    return (<div>
    <Header><Search search={search} setSearch={setSearch}  /></Header> 
   { isLoading && <Loader/>}
   { !isLoading && !errorMsg &&<RecipeList recipes={filteredRecipes} search={search}/>}
    {errorMsg && <ErrorMessage message={errorMsg} />}
    </div>)
}


function Loader() {
  return <div className="flex justify-center items-center mt-20 font-bold"> <p className="text-[25px]">Loading...</p></div>
}


function ErrorMessage({message}) {
  return <div className="flex justify-center items-center font-bold mt-20"> <p className="text-[25px]">{message}</p></div>
}