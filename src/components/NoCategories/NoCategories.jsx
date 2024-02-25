import { useNavigate } from "react-router-dom";

const NoCategories = () => {
    const navigate = useNavigate();

    const backHandler = () => {
        navigate('/categories')
    }

    return (
        <div className="text-orange-600">
            <h3 className="text-3xl font-bold">Sorry, no such category exists!</h3>
            <button onClick={backHandler}>Go back to cateogries menu</button>            
        </div>
    );
};

export default NoCategories;