import React, {useState} from 'react'

import CreditCard from '../../images/SvgComponents/CreditCard'
import Arrow from '../../images/SvgComponents/Arrow'
import User from '../../images/SvgComponents/User'
import Graphics from '../../images/SvgComponents/Graphics'

const Menu = () => {
    const [selected, setSelected] = useState(null);

    const handleSelect = (selection) => {
        
        if(selection === selected) {
            setSelected(null);
        } else {
            setSelected(selection)
        }
        
    }

    return(
        <div className="ml-2">
            <div className="border-b pb-2">
                <div className={`flex items-center space-x-2 text-xs cursor-pointer pl-1 py-1 pr-14 border   ${ selected === 1 ? 'bg-white shadow-sm ' : 'border-0'}`} onClick={() => handleSelect(1)}>
                    <CreditCard fill={`${selected === 1 ? '#24B47E': '#6772E5'}`}/>
                    <p className={`source-sans-pro-900 ${selected === 1 ? 'text-stripe-green' : 'text-stripe-purple'}`}>Payments</p>
                </div>
                <div className={`flex items-center space-x-2 text-xs cursor-pointer pl-1 py-1 pr-14 border   ${ selected === 2 ? 'bg-white shadow-sm ' : 'border-0'}`} onClick={() => handleSelect(2)}>
                    <User fill={`${selected === 2 ? '#24B47E': '#6772E5'}`}/>
                    <p className={`source-sans-pro-900 ${selected === 2 ? 'text-stripe-green' : 'text-stripe-purple'}`}>Customers</p>
                </div>
                <div className={`flex items-center space-x-2 text-xs cursor-pointer pl-1 py-1 pr-14 border   ${ selected === 3 ? 'bg-white shadow-sm ' : 'border-0'}`} onClick={() => handleSelect(3)}>
                    <Arrow fill={`${selected === 3 ? '#24B47E': '#6772E5'}`}/>
                    <p className={`source-sans-pro-900 ${selected === 3 ? 'text-stripe-green' : 'text-stripe-purple'}`}>Subscriptions</p>
                </div>
                <div className={`flex items-center space-x-2 text-xs cursor-pointer pl-1 py-1 pr-14 border   ${ selected === 4 ? 'bg-white shadow-sm ' : 'border-0'}`} onClick={() => handleSelect(4)}>
                    <Graphics fill={`${selected === 4 ? '#24B47E': '#6772E5'}`}/>
                    <p className={`source-sans-pro-900 ${selected === 4 ? 'text-stripe-green' : 'text-stripe-purple'}`}>Reporting</p>
                </div>
            </div>

            <div className="flex items-center pt-2 cursor-pointer">
                <p className="source-sans-pro-900 text-xs text-stripe-purple">Full API reference</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-5 mt-1" fill="none" viewBox="0 0 24 24" stroke="#6772E5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </div>
        </div>
    )
}

export default Menu