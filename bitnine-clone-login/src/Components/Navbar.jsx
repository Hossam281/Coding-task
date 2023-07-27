import React,{useState} from "react";
import bitlogo from "../assets/b_logo.png";
const Navbar = () => {
const [color,setColor]=useState(0)



  return (
    <div className="navbar bg-white fixed top-0 text-xl z-[10] ">
      <ul className=" mt-4 w-full space-x-5">
        <li className=" cursor-pointer mr-auto">
          {" "}
          <img className=" h-16" src={bitlogo} alt="" />
        </li>
        <div className="dropdown dropdown-hover hover:text-yellow-500">
            <label tabIndex={0} className=" m-1 bg-transparent cursor-pointer">
              PRODUCTS
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-gray-700 text-white rounded-lg w-52"
            >
              <li>
                <a className=" text-white hover:text-white hover:rounded-md hover:bg-gray-950">Graph Database</a>
              </li>
              <li>
                <a className=" text-white hover:text-white hover:rounded-md hover:bg-gray-950"> Relational Database</a>
              </li>
            </ul>
          </div>
        <li   onClick={()=>setColor(2)} className={`${color===2&&"text-yellow-500"} dropdown dropdown-hover cursor-pointer hover:text-yellow-500`}>
          USE CASES
        </li>
        <li  onClick={()=>setColor(3)} className={`${color===3&&"text-yellow-500"} dropdown dropdown-hover cursor-pointer hover:text-yellow-500`}>
          SERVICES
        </li>
        <li  onClick={()=>setColor(4)} className={`${color===4&&"text-yellow-500"} dropdown dropdown-hover cursor-pointer hover:text-yellow-500`}>
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className=" m-1 bg-transparent cursor-pointer">
              RESOURCES
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-gray-700 text-white rounded-lg w-52"
            >
              <li>
                <a className=" text-white hover:text-white hover:rounded-md hover:bg-gray-950">Documentation</a>
              </li>
              <li>
                <a className=" text-white hover:text-white hover:rounded-md hover:bg-gray-950"> Learn</a>
              </li>
            </ul>
          </div>
        </li>
        <li  onClick={()=>setColor(5)} className={`${color===5&&"text-yellow-500"} dropdown dropdown-hover cursor-pointer hover:text-yellow-500`}>
          BLOG
        </li>
        <li  onClick={()=>setColor(6)} className={`${color===6&&"text-yellow-500"} dropdown dropdown-hover cursor-pointer hover:text-yellow-500`}>
        <div className="dropdown dropdown-hover">
            <label tabIndex={0} className=" m-1 bg-transparent cursor-pointer">
              COMPANY
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-gray-700 text-white rounded-lg w-52"
            >
              <li>
                <a className=" text-white hover:text-white hover:rounded-md hover:bg-gray-950">About Us</a>
              </li>
              <li>
                <a className=" text-white hover:text-white hover:rounded-md hover:bg-gray-950"> Contact</a>
              </li>
            </ul>
          </div>
        </li>
        <li onClick={()=>setColor(7)} className={`${color===7&&"text-yellow-500"} dropdown dropdown-hover cursor-pointer hover:text-yellow-500`}>
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className=" m-1 bg-transparent cursor-pointer">
              IR
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-gray-700 text-white rounded-lg w-36 "
            >
              <li>
                <a className=" text-white hover:text-white hover:rounded-md hover:bg-gray-950">IR</a>
              </li>
              <li>
                <a className=" text-white hover:text-white hover:rounded-md hover:bg-gray-950"> IR</a>
              </li>
              <li>
                <a className=" text-white hover:text-white hover:rounded-md hover:bg-gray-950">IR</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="btn rounded-md btn-normal font-normal bg-blue-700 text-xl text-white hover:bg-blue-700 hover:text-yellow-500 ">
          <button> TRY FREE </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
