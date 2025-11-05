import { useEffect, useState } from "react";
import Header from "../components/Header";
import RecipeList from "../components/RecipeList";




export default function Home(){
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')

    useEffect( function(){
    async function fetchRecipe() {
        const res = await fetch(`/data/recipies.json`);
        const data = await res.json()
    setRecipes(data)
    } 
    fetchRecipe()
},[]);

 const filteredRecipes = search.trim() === ""
      ? recipes.slice(0,9)
      : recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );
    return <div>
    <Header search={search} setSearch={setSearch}/> 
    <RecipeList recipes={filteredRecipes} search={search}/>
    </div>
}
