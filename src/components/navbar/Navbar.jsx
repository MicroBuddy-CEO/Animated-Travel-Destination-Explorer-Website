import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div className="w-full mt-[50px] bg-transparent flex justify-center items-center">
            

            <ul className="flex items-center  gap-[178px] font-Poppins font-[600] font-Inter uppercase text-[15px] text-white text-opacity-[50%]">
                <li><a href="">HOME</a></li>
                <li><a href="">Tour Place</a></li>
                <li ><a href=""><img src={logo} alt="" className="w-[224px] h-[61px] mt-[-20px]"/></a></li>
                <li><a href="">ABOUT US</a></li>
                <li><a href="">ABOUT US</a></li>
            </ul>

        </div>
    )
}

export default Navbar