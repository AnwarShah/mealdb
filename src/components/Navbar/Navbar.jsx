import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><Link to="/categories/">Categories</Link></li>
            </ul>            
        </div>
    );
};

export default Navbar;