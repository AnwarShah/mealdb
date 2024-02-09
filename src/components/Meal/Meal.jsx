import { useLoaderData } from "react-router-dom";

const Meal = () => {
    const meal = useLoaderData().meals[0]; // there will be only 1 meal
    
    const {idMeal, strMeal, strDrinkAlternate, strCategory, strArea, strInstructions, strMealThumb, strTags, strYoutube } = meal;

    console.log(meal);
    return (
        <div className="bg-green-50 mx-auto my-10 py-6 rounded-lg px-10">
            <h3 className="text-4xl font-bold text-orange-800 py-4 underline">Welcome to {strMeal}</h3>
            <p className="italic py-2">
                <span className="font-semibold">ID:</span> {idMeal}, <br />
                <span className="font-semibold">Drink Alternative? </span>{strDrinkAlternate ? 'Yes' : 'No'}, <br />
                <span className="font-semibold">Category: </span> {strCategory}, <br />
                <span className="font-semibold">Origin:</span> {strArea}
            </p>
            <h5 className="mt-2 py-2 text-xl font-semibold">Preparation</h5>
            <p>{strInstructions}</p>
        </div>
    );
};

export default Meal;