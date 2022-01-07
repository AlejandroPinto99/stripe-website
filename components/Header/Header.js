import React from 'react'

const Header = () => {
    return(
        <div className="px-8 mt-12 w-2/3 pl-12 pt-12 pb-20">

            <div className="flex space-x-2 pb-10 pl-2">
                <span className="bg-green-500 rounded-lg px-2 text-white text-xs source-sans-pro-900">NEW</span>
                <p className="text-xs text-white source-sans-pro-300 ">Introducing Radar: Modern tools to help you beat fraud, fully integrated with your payments.</p>
            </div>

            <h3 className="source-sans-pro-300 text-white text-4xl">The new standard in online payments</h3>
            <p className="text-xs pt-4 text-white w-2/3 leading-5">Stripe is the best software platform for running an internet
                business. We handle billions of dollars every year for forward-
                thinking businesses around the world.
            </p>

            <div className="flex space-x-6 pt-8">
                <button className="bg-green-400 text-white px-4 py-2 shadow-md rounded-sm source-sans-pro-700 
                flex items-center space-x-2">
                    <div>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6 11H13V13H6V11Z" fill="#0A7261"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.51672 0.685913L6.79969 5.27833L5.48757 6.78775L0.204606 2.19533L1.51672 0.685913Z" fill="#0A7261"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.595581 9.33118L5.18799 4.04821L6.69741 5.36033L2.105 10.6433L0.595581 9.33118Z" fill="#0A7261"/>
                        </svg>
                    </div>
                    <p>EXPLORE THE STACK</p>
                </button>
                <button className="bg-white text-blue-400 px-4 py-2 shadow-md rounded-sm source-sans-pro-600">
                    <p>CREATE ACCOUNT</p>
                </button>
            </div>

            </div>
    );
};

export default Header;