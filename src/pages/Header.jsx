import { NavLink } from "react-router-dom";

const Header = () => {
    return (
<div>        
<NavLink to="/">Home</NavLink>        
<NavLink to="/categories">Categories</NavLink>
<NavLink to="/products">Products</NavLink>
</div> 
    );
}
 
export default Header;