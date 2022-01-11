import React from 'react'

import NavBar from '../components/Navbar/navbar'
import Header from '../components/Header/Header'
import Internet_Business from '../components/Internet_Business/Internet_Business'
import DevelopersFirst from '../components/Developers_First/DevelopersFirst'
import AboutUs from '../components/AboutUs/AboutUs'
import OurTools from '../components/OurTools/OurTools'
import GetStarted from '../components/GetStarted/GetStarted'
import Footer from '../components/Footer/Footer'

//Image

import DigitalOcean from '../images/SvgComponents/digital_ocean'
import Rectangle2 from '../images/SvgComponents/Rectangle2'
import Rectagle from '../images/SvgComponents/Rectangle'
import Ipad from '../images/SvgComponents/Salesforce_Ipad'
import Asana from '../images/SvgComponents/Asana'
import PostMates from '../images/SvgComponents/PostMates'



const Home = () => {
  return (
    <div className="relative">
      <div className="h-full pb-24 bg-gradient-to-b from-stripe-end-blue to-stripe-mid-blue
        origin-top-left relative header-content">
          <div className="relative z-10 ml-12">
            <NavBar />
            <Header />
          </div>
          <div className=" absolute -bottom-32 -left-14 z-0">
            <Rectagle fill="#1FA2FF" height={440} width={550}/>
          </div>
          <div className="right-1/2 absolute -top-32 left-64 z-0">
            <Rectagle fill="#4553FF" height={300} width={530}/>
          </div>
          <div className="absolute top-4 right-0">
            <Rectangle2 fillColor="#25DDF5" height={300} width={220}/>
          </div>
          <div className="absolute top-52 right-0">
            <Rectangle2 fillColor="#73EED6" height={300} width={300} />
          </div>
        </div>

        <div className="relative">
            <Internet_Business />
            <div className="absolute -top-32 right-0 z-10 ">
              <Asana />
            </div>

            <div className="absolute -top-10 right-72 z-10">
              <PostMates />
            </div>

        </div>

        <div className="pb-20 bg-gray-100 pt-36 dev-content -mt-20">
          <DevelopersFirst />
        </div>

        <div className="relative">
          <AboutUs />
          <div className="absolute z-10">
            <OurTools />
          </div> 
        </div>
      

        <div className="dev-get-started" style={{backgroundColor: '#F6F9FC'}}>
          <GetStarted />
        </div>

        
        <div className="px-16 py-16" style={{backgroundColor: '#F6F9FC'}}>
          <Footer />
        </div>
      
      <div className="absolute -top-12 right-0">
        <DigitalOcean />
      </div>
  
      <div className="absolute top-64 right-24" >
        <Ipad />
      </div>

    </div>
    
  );
};

export default Home;
