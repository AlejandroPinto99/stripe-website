import React from 'react'

const GetStarted = () => (
    <div className="flex pt-64 px-32 pb-24 border-b">
        <div className="flex flex-col w-1/2 source-sans-pro-400 text-xl px-20 ">
            <h3 className="text-stripe-purple text-3xl">Ready to get started ?</h3>
            <p className="text-stripe-dark-pruple text-3xl">Get in touch, or create an account.</p>
        </div>

        <div className="flex space-x-4 w-1/2 items-center justify-center">
            <button className="text-white bg-stripe-purple text-xl h-16
            source-sans-pro-900 px-4 shadow-lg border rounded-md">
                CREATE STRIPE ACCOUNT
            </button>
            <button className="text-stripe-purple bg-white text-xl h-16
            source-sans-pro-900 px-4 shadow-lg border rounded-md">
                 CONTACT SALES
            </button>
        </div>
    </div>
)

export default GetStarted;