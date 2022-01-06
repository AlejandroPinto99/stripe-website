import React from 'react'

import NavBar from '../components/Navbar/navbar'
import Header from '../components/Header/Header'
import Internet_Business from '../components/Internet_Business/Internet_Business'
import DevelopersFirst from '../components/Developers_First/DevelopersFirst'
import AboutUs from '../components/AboutUs/AboutUs'
import OurTools from '../components/OurTools/OurTools'
import GetStarted from '../components/GetStarted/GetStarted'

//Image

import DigitalOcean from '../images/SvgComponents/digital_ocean'
import Rectangle2 from '../images/SvgComponents/Rectangle2'
import Rectagle from '../images/SvgComponents/Rectangle'
import Ipad from '../images/SvgComponents/Salesforce_Ipad'



const Home = () => {
  return (
    <div className="relative">

      <div className="h-full pb-24 bg-gradient-to-b from-stripe-end-blue to-stripe-mid-blue
        origin-top-left relative header-content">
          <div className="relative z-10 ">
            <NavBar />
            <Header />
          </div>
          <div className=" absolute -bottom-32 -left-14 z-0">
            <Rectagle fill="#1FA2FF" height={390} width={450}/>
          </div>
          <div className="right-1/2 absolute -top-32 z-0">
            <Rectagle fill="#4553FF" height={280} width={350}/>
          </div>
          <div className="absolute top-10 -right-10">
            <Rectangle2 fillColor="#25DDF5" />
          </div>
          <div className="absolute top-48 -right-10">
            <Rectangle2 fillColor="#73EED6" />
          </div>
        </div>

        <div>
            <Internet_Business />
        </div>
        <div className=" pb-12 bg-gray-100 pt-36 dev-content ">
          <DevelopersFirst />
        </div>

        <AboutUs />
        <OurTools />
        <div>
          <GetStarted />
        </div>
        

      <div className="absolute top-0 right-0">
        <DigitalOcean />
      </div>
  
      <div className="absolute top-60 right-20" >
        <Ipad />
      </div>
 

    </div>
    
  );
};

export default Home;
