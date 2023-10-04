import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="w-full mt-[50px] bg-transparent flex justify-center items-center">
            

            <ul className="flex items-center  gap-[178px] font-Poppins font-[900] font-Inter uppercase text-[15px] text-white drop-shadow-4xl">
                <li><a href="">HOME</a></li>
                <li><a href="">Tour Place</a></li>
                <div><a href=""><img src={logo} alt="" className="w-[224px] h-[61px] mt-[-20px]"/></a></div>
                <li><a href="">ABOUT US</a></li>
                <li><a href="">Contact US</a></li>
            </ul>

        </div>
    )
}

export default Navbar