import React from 'react'
import Toggle_Button from '../../images/SvgComponents/Toggle_Button';

const Internet_Business = () => (
    <div>
        <div className="flex justify-center w-1/2 space-x-4 pt-12 pl-24">
            <h3 className="text-right source-sans-pro-900 items-center w-2/3 tracking-wider" style={{color: '#24B47E'}}>THE COMPLETE TOOLKIT FOR INTERNET BUSINESS</h3>
            <Toggle_Button />
        </div>

        <p className="text-right w-1/2 source-sans-pro-400 text-xs px-16 pt-2 ml-4 text-text-gray">
            Stripe builds the most powerful and flexible tools for internet commerce. Whether you’re creating a subscription service, 
            an on-demand marketplace, an e-commerce store, or a crowdfunding platform, Stripe’s meticulously-designed APIs and unmatched 
            functionality help you create the best possible product for your users. Hundreds of thousands of the world’s 
            most innovative technology companies are scaling faster and more efficiently by building their businesses on Stripe.
        </p>

        <div className="flex w-1/2 mt-8 ml-4 justify-end px-16 items-center">
            <p className="source-sans-pro-400 text-xs" style={{color: '#6772E5'}}>Discover how businesses use Stripe</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-6" fill="none" viewBox="0 0 24 24" stroke="#6772E5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            
        </div>
        

        
    </div>
);

export default Internet_Business;