import { Link } from 'react-router-dom';
import Nav from './Nav.css'

const Navbar = () => {
    return (  
        <nav className="navbar">
           <h1> Show Fest</h1> 
           <div className="links">
            <Link to="/">Home</Link>
            <Link to="/summary" style= {{
                color:"white",
                backgroundColor:"#1356de",
                borderRadius:"8px"
            }}> Movies</Link>
           </div>

        </nav>
    );
}
 
export default Navbar;