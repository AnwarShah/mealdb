import { useLoaderData } from "react-router-dom";

const Meals = () => {
    const all_meals = useLoaderData();
    console.log(all_meals)
    return (
        <div>
            <h3 className="text-3xl">All Meals: all_meals.length</h3>
        </div>
    );
};

export default Meals;