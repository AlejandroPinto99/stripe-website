import React from 'react'
import Toggle_Button from '../../images/SvgComponents/Toggle_Button';

const Internet_Business = () => (
    <div className="grid grid-cols-2">
        <div className="pr-12">
            <div className="flex items-center justify-end space-x-4 pt-8 -mr-12">
                <h3 className="text-right pl-10 pr-2 source-sans-pro-900 w-2/3 tracking-wider text-2xl" style={{color: '#24B47E'}}>THE COMPLETE TOOLKIT FOR INTERNET BUSINESS</h3>
                <Toggle_Button />
            </div>

            <div className="flex justify-end">
                <p className="text-right source-sans-pro-400 text-lg w-2/3 pt-10 pb-6 text-text-gray">
                    Stripe builds the most powerful and flexible tools for internet commerce. Whether you’re creating a subscription service, 
                    an on-demand marketplace, an e-commerce store, or a crowdfunding platform, Stripe’s meticulously-designed APIs and unmatched 
                    functionality help you create the best possible product for your users. Hundreds of thousands of the world’s 
                    most innovative technology companies are scaling faster and more efficiently by building their businesses on Stripe.
                </p>
            </div>
            

            <div className="flex mt-8 ml-4 justify-end items-center cursor-pointer group">
                <p className="source-sans-pro-400 text-lg pr-2 transition duration-100 ease-in-out hover:-translate-y-1" style={{color: '#6772E5'}}>Discover how businesses use Stripe</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 group-hover:translate-x-10 transition duration-100 ease-in-out"
                 fill="none" viewBox="0 0 24 24" stroke="#6772E5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </div>
        </div>
    </div>
);

export default Internet_Business;