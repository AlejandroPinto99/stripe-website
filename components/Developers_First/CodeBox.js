import React from 'react'

import Code from '../../images/SvgComponents/Code'



const CodeBox = () => {
    const lines = [1,2,3,4,5,6,7,8,9,10,11,12,13];

    return(
        <div className="bg-white flex">
        <div className="w-1/12 flex flex-col text-xs items-center py-1 text-stripe-green" style={{background: '#F2FEEF'}}>
            {
                lines.map(item => (
                    <span>{item}</span>
                ))
            }
        </div>

        <div className="w-11/12 pt-3">
            <Code />
        </div>
   
    </div>
    );
}
    

export default CodeBox;