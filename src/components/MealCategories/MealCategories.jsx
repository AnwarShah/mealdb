import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const MealCategories = () => {
    const all_categories = useLoaderData().categories;

    return (
        <div>
            <h2 className="text-4xl">All Meal Categories:</h2>
            <div className="grid grid-cols-3 gap-8 my-4">
                {
                    all_categories.map(category => <Category key={category.idCategory} categoryData={category}></Category>)
                }
            </div>
        </div>
    );
};

export default MealCategories;