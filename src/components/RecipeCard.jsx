/* eslint-disable react/prop-types */
import { Heart, HeartPulse, Soup } from "lucide-react"
import { useState } from "react";

const RecipeCard = ({ recipe, bg, badge }) => {
    const healthLabels = recipe.healthLabels;
    const [isFavorite, setIsFavorite] = useState(localStorage.getItem("favorites")?.includes(recipe.label));
    const addToFavorites = () => {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const isRecipeAlreadyInFavorites = favorites.some(favorite => favorite.label === recipe.label);
        if (isRecipeAlreadyInFavorites) {
            favorites = favorites.filter(favorite => favorite.label !== recipe.label);
            setIsFavorite(false);
        }
        else {
            favorites.push(recipe);
            setIsFavorite(true);
        }
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    return (
        <div className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}>
            <a href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`} target="_blank" className="relative h-32">
                <div className="skelton inset-0 absolute" />
                <img src={recipe.image} alt="recipe" className="rounded-md w-full h-full object cover cursor-pointer opacity-0 transition-opacity duration-300"
                    onLoad={(e) => {
                        e.currentTarget.style.opacity = 1;
                        e.currentTarget.previousElementSibling.style.display = "none";
                    }}
                />
                <div className="absolute bottom-2 left-2 bg-white rounded-full cursor-pointer p-1 flex items-center gap-1 text-sm">
                    <Soup size={24} /> {recipe.yield} Servings
                </div>
                <div className="absolute top-1 right-2 cursor-pointer p-1 bg-white rounded-full"
                    onClick={(e) => {
                        e.preventDefault()
                        addToFavorites();
                    }}
                >
                    {!isFavorite && <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />}
                    {isFavorite && <Heart size={20} className="fill-red-500 hover:text-red-500" />}
                </div>
            </a>
            <div className=" mt-1">
                <p className="font-bold tracking-wide">{recipe.label}</p>
                <p className="my-2">{recipe.cuisineType[0].charAt(0).toUpperCase() + recipe.cuisineType[0].slice(1)} Kitchen</p>
                <div className="flex gap-2 mt-auto">
                    {healthLabels.slice(0, 2).map((healthLabel, index) => (
                        <div className={`flex gap-1 ${badge} items-center rounded-md p-1`} key={index}>
                            <HeartPulse size={16} />
                            <span className="text-sm font-semibold tracking-tighter">{healthLabel}</span>
                        </div>
                    ))}



                </div>
            </div>
        </div>
    )
}

export default RecipeCard