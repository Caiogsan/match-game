import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header({level}){
    return (
        <div className="flex items-end px-24 justify-between">
            <h1 className="w-[20%] pb-1 text-2xl"><Link to={'/'} className="block w-[5px]"><FaAngleLeft></FaAngleLeft></Link></h1>
            <h1 className="text-center items-center w-[40%] text-3xl pt-4 font-login">{level}</h1>
            

            <h1 className="text-end w-[20%]"></h1>
        </div>
    )
}

export default Header