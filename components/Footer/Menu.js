import React from 'react'

const Menu = ({title, items}) => (
    <div className={`${title === "PRODUCTS" ? 'pr-48': 'pr-0'}`}>
        <h3 className="source-sans-pro-900 text-xs pb-2 px-2" style={{color: '#8998AA'}}>{title}</h3>
        <div className=" flex flex-col flex-wrap h-32 ">
            {
                items.map((item, index) => (
                    <div key={index} className="text-2xs source-sans-pro-400 px-2 pb-2 cursor-pointer pr-4 " style={{color: '#8998AA'}}>{item}</div>
                ))
            }
        </div>
    </div>
);

export default Menu;