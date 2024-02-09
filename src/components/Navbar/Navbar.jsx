import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><Link to="/categories/">Categories</Link></li>
                <li><Link to="/random">Random Meal</Link></li>
            </ul>            
        </div>
    );
};

export default Navbar;