import { Heart, HeartPulse, Soup } from "lucide-react"

const RecipeCard = () => {
    return (
        <div className="flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative ">
            <a href="" className="relative h-32">
                <img src="/1.jpg" alt="recipe" className="rounded-md w-full h-full object cover cursor-pointer" />
                <div className="absolute bottom-2 left-2 bg-white rounded-full cursor-pointer p-1 flex items-center gap-1 text-sm">
                    <Soup size={24} /> 4 Servings
                </div>
                <div className="absolute top-1 right-2 cursor-pointer p-1 bg-white rounded-full">
                    <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />
                </div>
            </a>
            <div className=" mt-1">
                <p className="font-bold tracking-wide">Roasted Chicken</p>
                <p className="my-2">Turkish Chicken</p>
                <div className="flex gap-2 mt-auto">
                    <div className="flex gap-1 bg-[#d6f497] items-center rounded-md p-1">
                        <HeartPulse size={16} />
                        <span className="text-sm font-semibold tracking-tighter">Gluten Free</span>
                    </div>
                    <div className="flex gap-1 bg-[#d6f497] items-center rounded-md p-1">
                        <HeartPulse size={16} />
                        <span className="text-sm font-semibold tracking-tighter">Heart-healthy</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RecipeCard