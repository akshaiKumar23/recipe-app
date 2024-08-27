import { Search } from "lucide-react"
import RecipeCard from "../components/RecipeCard"

const HomePage = () => {
    return (
        <div className="flex-1 bg-[#faf9fb] p-10">
            <div className="max-w-screen-lg mx-auto">
                <form>
                    <label className="input shadow-md flex items-center gap-2">
                        <Search size={24} />
                        <input type="text" className="grow text-sm md:text-md" placeholder="What do you want to eat today?" />
                    </label>

                </form>
                <p className="font-bold text-3xl md:text-5xl mt-4">
                    Recommended Recipes
                </p>
                <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">Popular Choice</p>
                <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                </div>
            </div>
        </div>
    )
}

export default HomePage