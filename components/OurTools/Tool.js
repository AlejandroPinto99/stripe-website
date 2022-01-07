import React from 'react'

const Tool = ({title, icon, content}) => (
    <div className="flex w-1/3 shadow-md py-8 bg-white ">
        <div >
            {icon}
        </div>
        <div className="flex flex-col px-12">
            <div className="flex items-center mb-4">
                <h4 className="source-sans-pro-600 text-base tracking-wider" style={{color: '#B76AC4'}}>{title}</h4>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6" fill="none" viewBox="0 0 24 24" stroke="#B76AC4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </div>
            <p className="source-sans-pro-400 text-sm pr-12 text-text-gray">{content}</p>
        </div>
    </div>
);

export default Tool;