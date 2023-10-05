import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="nav-container">
            <ul className="font-Inter">
                <li><a href="">HOME</a></li>
                <li><a href="">Tour Place</a></li>
                <div><a href=""><img src={logo} alt="" className="w-[224px] h-[61px] mt-[-20px]"/></a></div>
                <li><a href="">ABOUT US</a></li>
                <li><a href="">Contact US</a></li>
            </ul>
        </nav>
    )
}

export default Navbar