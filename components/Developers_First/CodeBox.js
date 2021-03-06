import React from 'react'

import Code from '../../images/SvgComponents/Code'



const CodeBox = () => {
    const lines = [1,2,3,4,5,6,7,8,9,10,11,12,13];

    return(
        <div className=" flex ">
        <div className=" px-4 flex flex-col text-xs items-center justify-end py-1 space-y-1 text-stripe-green shadow-md border-t border-l" style={{background: '#F2FEEF'} }>
            {
                lines.map((item, index) => (
                    <span key={index}>{item}</span>
                ))
            }
        </div>

        <div className="pl-4 pr-48 bg-white shadow-md">
            <Code />
        </div>
   
    </div>
    );
}
    

export default CodeBox;