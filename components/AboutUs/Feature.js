import React from 'react'

const Feature = ({title, content, icon, link}) => (
    <div className="flex flex-col justify-start space-y-4 w-1/3">
        <div>
            {icon}
        </div>
        <h3 className="source-sans-pro-600 text-stripe-green text-xl">{title}</h3>
        <p className="ource-sans-pro-400 text-lg text-text-gray">{content}</p>
        <div className="flex flex-row items-center cursor-pointerh-10  
         group">
            <p className="source-sans-pro-400 text-base text-stripe-purple transition duration-100 ease-in-out cursor-pointer">{link}</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-8 group-hover:translate-x-4 transition duration-100 ease-in-out"
             fill="none" viewBox="0 0 24 24" stroke="#6772E5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </div>
      
    </div>
);

export default Feature;