import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
    const all_meals = useLoaderData().meals;

    return (
        <div>
            <h3 className="text-3xl">All Meals: {all_meals.length}</h3>
            <div className="grid grid-cols-2 gap-2">
                {
                    all_meals.map(meal => <Meal id={meal.id} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;