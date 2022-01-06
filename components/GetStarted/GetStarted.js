import React from 'react'

const GetStarted = () => (
    <div className="flex pt-48 pb-24 border-b">
        <div className="flex flex-col w-1/2 source-sans-pro-400 text-xl px-20 ">
            <h3 className="text-stripe-purple">Ready to get started ?</h3>
            <p className="text-stripe-dark-pruple">Get in touch, or create an account.</p>
        </div>

        <div className="flex space-x-4 w-1/2 items-center justify-center">
            <button className="text-white bg-stripe-purple text-xs h-8
            source-sans-pro-900 px-2 shadow-lg border rounded-sm">
                CREATE STRIPE ACCOUNT
            </button>
            <button className="text-stripe-purple bg-white text-xs h-8
            source-sans-pro-900 px-2 shadow-lg border rounded-sm">
                CONTACT SALES
            </button>
        </div>
    </div>
)

export default GetStarted;