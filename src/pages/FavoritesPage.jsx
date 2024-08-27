import RecipeCard from "../components/RecipeCard";
import { getRandomColor } from "../lib/utlis";


const FavoritesPage = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return (
        <div className="bg-[#fafbf9] flex-1 p-10 min-h-screen">
            <div className="max-w-screen-lg max-auto">
                <p className="font-bold text-3xl md:text-5xl my-4">My Favorites</p>
                {favorites.length == 0 && <div className="h-[80vh] flex flex-col items-center gap-4">
                    <img src="/404.svg" className="h-3/4" alt="404" />
                </div>}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {favorites.map((favorite, index) => (
                        <RecipeCard key={index} recipe={favorite} {...getRandomColor()} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FavoritesPage