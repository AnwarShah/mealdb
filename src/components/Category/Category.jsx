import { Link, useNavigate } from "react-router-dom";

const Category = ({categoryData}) => {
    const {idCategory: id, strCategory: name, strCategoryDescription: description, strCategoryThumb: image} = categoryData;
    const navigate = useNavigate();

    const handleShowMeals = () => {
        navigate(`/categories/${name}`);
    }

    return (
        <div className="bg-blue-200 rounded-lg p-8">
            <h4 className="text-2xl font-medium">{name}</h4>
            <img className="py-4" src={image} alt={`${name}-image`} />
            <p className="h-60 text-clip overflow-hidden ...">{description}</p>
            <button onClick={handleShowMeals} className="bg-blue-400 rounded-md py-2 px-4 font-medium">Show All Meals</button>
        </div>
    );
};

export default Category;