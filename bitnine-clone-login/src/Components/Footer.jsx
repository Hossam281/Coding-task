import React from "react";
import { AiFillGithub, AiFillYoutube, AiOutlineTwitter,AiFillMediumSquare } from "react-icons/ai";
import { BsStackOverflow, BsFacebook } from "react-icons/bs";
import {BiLogoLinkedin} from "react-icons/bi";
const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-white pb-7">
      <ul className="flex justify-between gap-28  text-[#ababab] text-xl list-none cursor-pointer mb-32 ">
        <li className=" ">
          <h2 className=" font-extrabold pb-2 cursor-text">PRODUCTS</h2>
          <ul>
            <li className="hover:text-[#2d6fad] list-none  transition-all duration-30">
              Relational Database
            </li>
            <li className="hover:text-[#2d6fad] list-none  transition-all duration-30">
            Graph Database
            </li>
            <li className="hover:text-[#2d6fad] list-none  transition-all duration-30">
            Graph-based Solution
            </li>
          </ul>
        </li>
        <li ><span className=" font-extrabold hover:text-[#4078ad] transition-all duration-500">USE CASES</span><span></span></li>
        <li ><span className="hover:text-[#4078ad] transition-all duration-300 font-extrabold">SERVICES</span><span></span></li>
        <li>
          <h2 className="font-extrabold cursor-text pb-2">RESOURCES</h2>
          <ul>
            <li className="hover:text-[#4078ad] transition-all duration-300 list-none"> Documentation</li>
            <li className="hover:text-[#4078ad] transition-all duration-300 list-none"> Learn</li>
          </ul>
        </li>
        <li ><span className="hover:text-[#4078ad] transition-all duration-300 font-extrabold">BLOG</span><span></span></li>
        <li>
          <h2 className="font-extrabold cursor-text pb-2">COMPANY</h2>
          <ul>
            <li className="hover:text-[#4078ad] transition-all duration-300 list-none"> About Us</li>
            <li className="hover:text-[#4078ad] transition-all duration-300 list-none"> Contact</li>
          </ul>
        </li>
      </ul>
      <div className="flex justify-between gap-[25rem]">
        <p className=" block text-[#ababab] text-lg">
          &copy; 2023 by Bitnine Global Inc. All Rights Reserved.
        </p>
        <div className="flex justify-between gap-1 ">
          <a
            href="https://github.com/apache/incubator-age"
            className="px-3 py-2.5 relative rounded-none group overflow-hidden font-medium bg-white text-orange-400 inline-block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-[400ms] ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">
              <AiFillGithub size={15} />
            </span>
          </a>
          <a
            href="https://stackoverflow.com/nocaptcha?s=dddf270a-f96e-413a-bfcf-96af39ee5308"
            className="px-3 py-2.5 relative rounded-none group overflow-hidden font-medium bg-white text-[#ababab] inline-block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-[400ms] ease-out transform translate-y-0 bg-[#ff9702] group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">
              <BsStackOverflow size={15} />
            </span>
          </a>
          <a
            href="https://www.youtube.com/channel/UCBJNYamALEqrfxiOCgYyP2g/featured?view_as=subscriber"
            className="px-3 py-2.5 relative rounded-none group overflow-hidden font-medium bg-white text-[#ababab] inline-block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-[400ms] ease-out transform translate-y-0 bg-[#cd201f] group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">
              <AiFillYoutube size={15} />
            </span>
          </a>
          <a
            href="https://twitter.com/AgensGraph"
            className="px-3 py-2.5 relative rounded-none group overflow-hidden font-medium bg-white text-[#ababab] inline-block"
          >
            <span className=" absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-[400ms] ease-out transform translate-y-0 bg-[#55acee] group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">
              <AiOutlineTwitter size={15} />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/company/bitnineglobal"
            className="px-3 py-2.5 relative rounded-none group overflow-hidden font-medium bg-white text-[#ababab] inline-block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-[400ms] ease-out transform translate-y-0 bg-[#117eb9] group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">
              <BiLogoLinkedin size={15} />
            </span>
          </a>
          <a
            href="https://www.facebook.com/bitninesns/"
            className="px-3 py-2.5 relative rounded-none group overflow-hidden font-medium bg-white text-[#ababab] inline-block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-[400ms] ease-out transform translate-y-0 bg-[#42599e] group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">
              <BsFacebook size={15} />
            </span>
          </a>
          <a
            href="https://medium.com/agensgraph"
            className="px-3 py-2.5 relative rounded-none group overflow-hidden font-medium bg-white text-[#ababab] inline-block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-[400ms] ease-out transform translate-y-0 bg-[#00ab6c] group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">
              <AiFillMediumSquare size={15} />
            </span>
          </a>

          <div className="flex  gap-4 pl-6">
            <a href="https://github.com/apache/incubator-age" className="text-[#ababab] text-xl hover:font-extrabold hover:text-[#2d6fad] scale-[0.90] hover:scale-[1]"> Apache AGE</a>
            <a href="https://bitnine.net/contact/" className="text-[#ababab] text-xl hover:font-extrabold hover:text-[#2d6fad] scale-[0.90] hover:scale-[1]"> CONTACT</a>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
