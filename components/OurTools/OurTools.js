import React from 'react'

import RadarIcon from '../../images/SvgComponents/RadarIcon';
import ExploreDocs from '../../images/SvgComponents/ExploreDocs';
import Tool from './Tool';

const content1 = "Use advanced machine learning that learns from 100,000+ global businesses to help your company beat fraud.";
const content2 = "Start building your integration and accept your first payment in minutes. Stripe libraries are available in every language from Ruby to Go.";


const OurTools = () => (
    <div>
        <div className="flex space-x-8 mx-10">
            <Tool title="INTRODUCING RADAR" content={content1} icon={<RadarIcon />}/>
            <Tool title="EXPLORE THE DOCS" content={content2} icon={<ExploreDocs />}/>
        </div>
    </div>
);

export default OurTools;