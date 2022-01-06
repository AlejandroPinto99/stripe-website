import React from 'react'
import Stripe from '../../images/SvgComponents/Stripe'


const NavBar = () => {
    return(
        <div className="flex w-full justify-between pt-4 pl-4">
            <div className="flex justify-center items-center  cursor-pointer pl-12">
                <Stripe />
            </div>

            <div className="flex items-center space-x-12 mr-32">
                <div>
                    <ul className="flex space-x-8 text-xs text-white px-6 source-sans-pro-300">
                        <li className="cursor-pointer">Products</li>
                        <li className="cursor-pointer">Developers</li>
                        <li className="cursor-pointer">Company</li>
                    </ul>
                </div>

                <div className="flex items-center space-x-8 text-xs text-white source-sans-pro-300 px-12">
                    <div className="cursor-pointer" >Support</div>
                    <div className="flex items-center cursor-pointer">
                        <p>Sign in</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-6" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default NavBar;