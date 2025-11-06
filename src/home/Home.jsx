import { useEffect, useState } from "react";
import Header from "../components/Header";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import BookMark from "../components/Bookmark";





export default function Home(){
const bookMarked = function(){
    const saved = localStorage.getItem('recipe-bookmarks')
    return saved ? JSON.parse(saved) : []
  }


    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [isLoading,setIsLoading ] =useState(false)
    const [errorMsg,setErroMsg ] =useState("")
  const [displayCount, setDisplayCount] = useState(8)
    const [bookMarks, setBookMarks] = useState(bookMarked())



    // Recipe fetch data
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


// bookMark loclstorage

 useEffect(function() {
    localStorage.setItem('recipe-bookmarks', JSON.stringify(bookMarks))
  }, [bookMarks])

// Recipe filter
 const filteredRecipes = search.trim() === ""
      ? recipes.slice(0,displayCount)
      : recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  // toggle favourite
  function toggleFavorite(recipe) {
    setBookMarks((prev) => {
      const isBookmarked = prev.some((item) => item.id === recipe.id)
      if (isBookmarked) {
        return prev.filter((item) => item.id !== recipe.id)
      } else {
        return [...prev, recipe]
      }
    })
  }

  function handleLoadMore() {
        setDisplayCount(prev => prev + 4) 
    }
  
     const hasMore = search.trim() === "" && displayCount <recipes.length



    return (<div>
    <Header><Search search={search} setSearch={setSearch} /></Header>
    <BookMark bookMarks={bookMarks} setBookMarks={setBookMarks} recipes={recipes}/> 
   { isLoading && <Loader/>}
   { !isLoading && !errorMsg &&<RecipeList recipes={filteredRecipes} search={search} onToggleFavorite={toggleFavorite} bookMarks={bookMarks}/> }
    {errorMsg && <ErrorMessage message={errorMsg} />}
   {hasMore && <ButtonLoadMore onHandleLoadMore={handleLoadMore}/>}
    </div>)
}


function Loader() {
  return <div className="flex justify-center items-center mt-20 font-bold"> <p className="text-[25px]">Loading...</p></div>
}


function ErrorMessage({message}) {
  return <div className="flex justify-center items-center font-bold mt-20"> <p className="text-[25px]">{message}</p></div>
}

function ButtonLoadMore({onHandleLoadMore}){
 return <div className="flex justify-center my-8">
 <button  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg" onClick={onHandleLoadMore}>
  See More
 </button>
 </div>
}