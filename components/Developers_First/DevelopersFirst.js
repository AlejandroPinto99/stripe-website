import React from 'react'

import Gears from '../../images/SvgComponents/Gears'
import CodeBox from './CodeBox'
import Menu from './Menu'

const DevelopersFirst = () => (
    <div >
        <div className="flex flex-col items-center px-48 pt-32">
            <Gears />
            <div className="text-center space-y-8">
            <h3 className="source-sans-pro-900 text-2xl tracking-wider" style={{color: '#24B47E'}}>DEVELOPERS FIRST</h3>
                <p className="text-lg text-text-gray px-44">
                    We believe that payments is a problem rooted in code, not finance. We obsessively seek out elegant, composable abstractions 
                    that enable robust, scalable, flexible integrations. 
                    Because we eliminate needless complexity and extraneous details, you can get up and running with Stripe in just a couple of minutes. 
                </p>
            </div>
        </div>

        <div className="pt-12 flex justify-start space-x-4 ">
            <div className="w-10/12 ">
                <CodeBox />
            </div>
            <div>
                <Menu />
            </div>
        </div>
    </div>
)

export default DevelopersFirst