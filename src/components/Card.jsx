export default function Card ({recipe, className}){
    return<> <div className={className}><img src={recipe.image} alt="#" className="rounded-[10px] w-20 md:w-30 h-20 object-center object-cover" loading="lazy"/></div>
             <h2  className="text-[20px]">{recipe.name}</h2>
             </>
}