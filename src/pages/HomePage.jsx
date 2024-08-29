import { Search } from "lucide-react"
import RecipeCard from "../components/RecipeCard"
import { useEffect, useState } from "react"
import { getRandomColor } from './../lib/utlis';
import debounce from 'lodash/debounce'

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("")

    const fetchRecipes = async (searchQuery) => {
        setLoading(true);
        setRecipes([]);

        try {
            const res = await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}&q=${searchQuery}&type=public`)
            const data = await res.json();
            console.log(data);
            setRecipes(data.hits)

        } catch (error) {
            console.log(error.message);
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchRecipes("chicken");
    }, [])

    const debouncedFetchResults = debounce(fetchRecipes, 300)
    const handleChange = (e) => {

        const value = e.target.value;
        setQuery(value);
        debouncedFetchResults(value);
    }
    return (
        <div className="flex-1 bg-[#faf9fb] p-10">
            <div className="max-w-screen-lg mx-auto">
                <form >
                    <label className="input shadow-md flex items-center gap-2">
                        <Search size={24} />
                        <input value={query} onChange={handleChange} type="text" className="grow text-sm md:text-md" placeholder="What do you want to eat today?" />
                    </label>

                </form>
                <p className="font-bold text-3xl md:text-5xl mt-4">
                    Recommended Recipes
                </p>
                <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">Popular Choice</p>
                <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    {!loading && recipes.map(({ recipe }, index) => (
                        <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
                    ))}
                    {loading &&
                        [...Array(9)].map((_, index) => (
                            <div key={index} className='flex flex-col gap-4 w-full'>
                                <div className='skeleton h-32 w-full'></div>
                                <div className='flex justify-between'>
                                    <div className='skeleton h-4 w-28'></div>
                                    <div className='skeleton h-4 w-24'></div>
                                </div>
                                <div className='skeleton h-4 w-1/2'></div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage