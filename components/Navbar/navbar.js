import React from 'react'
import Stripe from '../../images/SvgComponents/Stripe'


const NavBar = () => {
    return(
        <div className="flex w-full justify-between pt-4 pl-32">
            <div className="flex justify-center items-center  cursor-pointer pl-12">
                <Stripe />
            </div>

            <div className="flex items-center space-x-12 mr-52">
                <div>
                    <ul className="flex space-x-8 text-lg text-white pr-14 source-sans-pro-300 ">
                        <li className="cursor-pointer transition duration-100 hover:text-yellow-400">Products</li>
                        <li className="cursor-pointer transition duration-100 hover:text-yellow-400">Developers</li>
                        <li className="cursor-pointer transition duration-100 hover:text-yellow-400">Company</li>
                    </ul>
                </div>

                <div className="flex items-center space-x-8 text-lg text-white source-sans-pro-300 px-12 pt-2">
                    <div className="cursor-pointer hover:text-yellow-400" >Support</div>
                    <div className="flex items-center cursor-pointer transition duration-100 hover:translate-x-4 hover:scale-125">
                        <p>Sign in</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-8 hover:scale-125" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default NavBar;