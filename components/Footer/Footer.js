import React from 'react'

import Menu from './Menu'

const Footer = () => {

    const products = ['Payments', 'Subscriptions', 'Connect', 'Relay', 'Atlas', 'Pricing', 'Customers', 'Global'];
    const developers = ['Documentation', 'API reference', 'API status', 'Open source'];
    const company = ['About', 'Blog', 'Jobs', 'Press'];
    const resources = ['Support', 'Contact', 'Privacy & terms'];


    return(
        <div className="flex justify-between px-40">
            <div className="flex flex-col space-y-4 w-1/3">
                <div className="flex items-center space-x-2 text-lg source-sans-pro-700 text-stripe-purple cursor-pointer">
                    <svg width="15" height="15" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 11L11 0L0 5.5L5 6L6 11Z" fill="#6772E5"/>
                    </svg>
                    <p>United States</p>
                </div>

                <div className="flex items-center space-x-2 text-lg source-sans-pro-700 text-stripe-purple cursor-pointer">
                    <svg width="15" height="15" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.40845 8.72168C9.50537 8.08691 11 6.43628 11 4.5C11 2.01465 8.5376 0 5.5 0C2.4624 0 0 2.01465 0 4.5C0 6.55981 1.69153 8.29639 4 8.83057V9V11.5C4 11.5 6.71143 10.1443 7.40845 8.72168Z" fill="#6772E5"/>
                    </svg>
                    <p>English</p>
                </div>

                <div className="flex items-end space-x-2 h-full">
                    <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.51 13.156C6.10267 13.156 5.72567 13.0823 5.379 12.935C5.041 12.7877 4.742 12.5753 4.482 12.298C4.23067 12.0207 4.03133 11.6827 3.884 11.284C3.74533 10.8767 3.676 10.413 3.676 9.893C3.676 9.373 3.754 8.90933 3.91 8.502C4.066 8.086 4.274 7.73933 4.534 7.462C4.794 7.18467 5.093 6.97233 5.431 6.825C5.77767 6.67767 6.14167 6.604 6.523 6.604C6.95633 6.604 7.316 6.682 7.602 6.838C7.888 6.994 8.13933 7.17167 8.356 7.371L8.018 7.774C7.81867 7.58333 7.59767 7.42733 7.355 7.306C7.11233 7.176 6.83933 7.111 6.536 7.111C6.21533 7.111 5.91633 7.18033 5.639 7.319C5.37033 7.449 5.132 7.63967 4.924 7.891C4.72467 8.13367 4.56433 8.424 4.443 8.762C4.33033 9.1 4.274 9.477 4.274 9.893C4.274 10.3003 4.326 10.673 4.43 11.011C4.54267 11.349 4.69433 11.6393 4.885 11.882C5.08433 12.1247 5.32267 12.3153 5.6 12.454C5.886 12.584 6.198 12.649 6.536 12.649C6.86533 12.649 7.16867 12.5797 7.446 12.441C7.732 12.3023 7.98333 12.1333 8.2 11.934L8.499 12.337C8.23033 12.571 7.93133 12.766 7.602 12.922C7.27267 13.078 6.90867 13.156 6.51 13.156Z" fill="#CFD7DF"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.5 15C9.53757 15 12 12.5376 12 9.5C12 6.46243 9.53757 4 6.5 4C3.46243 4 1 6.46243 1 9.5C1 12.5376 3.46243 15 6.5 15Z" stroke="#CFD7DF" strokeWidth="0.6" strokeLinecap="square"/>
                    </svg>
                    <p className="text-xs" style={{color: '#CFD7DF'}}>Stripe</p>
                </div>
            </div>

            <div className="flex justify-between w-2/3 space-x-16">
                <div className="w-1/4">
                    <Menu title="PRODUCTS" items={products} />
                </div>
                <div className="w-1/4">
                    <Menu title="DEVELOPERS" items={developers}/>
                </div>
                <div className="w-1/4">
                    <Menu title="COMPANY" items={company}/>
                </div>
                <div className="w-1/4">
                    <Menu title="RESOURCES" items={resources}/>
                </div>
                
            </div>

        </div>
    )
}

export default Footer;