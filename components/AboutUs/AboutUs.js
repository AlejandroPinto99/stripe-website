import React from 'react'

import AlwaysImproving  from '../../images/SvgComponents/AlwaysImproving';
import GlobalScale from '../../images/SvgComponents/GlobalScale';
import Feature from './Feature'

//Brands
import Instacart from '../../images/Brands/Instacart'
import Twitter from '../../images/Brands/Twitter'
import Kickstarter from '../../images/Brands/Kickstarter'
import Lyft from '../../images/Brands/Lyft'
import Opentable from '../../images/Brands/Opentable'
import Pinterest from '../../images/Brands/Pinterest'
import Shopify from '../../images/Brands/Shopify'
import Slack from '../../images/Brands/Slack'




const content1 = "Stripe is an always-improving toolchain that gains new features every month. Our world-class engineering team constantly iterates upon every facet of the Stripe stack. And from Apple Pay to Bitcoin, building on Stripe means you get early access to the latest technologies."
const content2="We help power 100,000+ businesses in 100+ countries and across nearly every industry. Headquartered in San Francisco, Stripe has 9 global offices and hundreds of people working to help transform how modern businesses are built and run."

const OurServices = () => (
    <div>
        <div className="flex justify-center space-x-20 shadow-sm py-20 px-10">
            <Feature title="ALWAYS IMPROVING" content={content1} icon={<AlwaysImproving />} link="Learn about Strip's products"/>
            <Feature title="GLOBAL SCALE" content={content2} icon={<GlobalScale />} link="More About us" />
        </div>
        <div className="flex justify-around py-12 px-14">
            <Kickstarter />
            <Twitter />
            <Instacart />
            <Pinterest />
            <Lyft />
            <Shopify />
            <Opentable />
            <Slack />
        </div>
    </div>

);

export default OurServices;