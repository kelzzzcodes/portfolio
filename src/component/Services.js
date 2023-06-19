import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import React from 'react'
import ServiceImage from '../asset/serviceImage.jpg'
import HTML from '../asset/tech/html.png'
import CSS from '../asset/tech/css.png'
import JAVASCRIPT from '../asset/tech/javascript.png'
import PHP from '../asset/tech/php.png'
import REACT from '../asset/tech/reactjs.png'
import TAILWIND from '../asset/tech/tailwind.png'
import FIREBASE from '../asset/tech/firebase.png'
import POSTGRESS from '../asset/tech/postgress.png'

const Services = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className=" flex flex-col lg:flex-row  justify-between bg-gray-300">
      <div className="flex   w-full  ">
        <img
          src={ServiceImage}
          className="w-full flex  h-full border-r-2 border-gray-200 object-cover "
        />
      </div>

  
        <div  className=" w-full flex flex-col p-8 md:p-16 gap-4">
          <div className="flex  flex-col gap-2">
            <h3 className="text-2xl md:text-4xl font-extrabold">
              Why Work With Me
            </h3>
            <p className=" text-xl md:text-2xl text-gray-600">
              I am a great communicator and love to invest the necessary time to
              understand the customer's problem very well
            </p>
          </div>

          <div className="flex  flex-col gap-2">
            <h3 className="text-2xl md:text-4xl font-extrabold">
              Design Tools
            </h3>
            <p className="text-xl md:text-2xl  text-gray-600 ">
              My favorite design tools are Photoshop and Illustrator but I can
              create designs in Figma, Sketch and Adobe XD too
            </p>
          </div>

          <div className="flex  flex-col gap-2">
            <h3 className="text-2xl md:text-4xl font-extrabold">
              Development Skills
            </h3>
            <p className="text-xl md:text-2xl  text-gray-600 ">
              I am familiar and work on a daily basis with
              HTML, CSS, Javascript, ReactJS,
              PHP, TailwindCSS, Amplify, Firebase, Postgress, and other modern
              frameworks
            </p>
          </div>

          <div className="flex   flex-wrap gap-2">
            <img src={HTML} className="w-12 h-12 object-contain" />
            <img src={CSS} className="w-12 h-12 object-contain" />

            <img src={JAVASCRIPT} className="w-12 h-12 object-contain" />
            <img src={REACT} className="w-12 h-12 object-contain" />
            <img src={PHP} className="w-12 h-12 object-contain" />
            <img src={TAILWIND} className="w-12 h-12 object-contain" />
            <img src={FIREBASE} className="w-12 h-12 object-contain" />
            <img src={POSTGRESS} className="w-12 h-12 object-contain" />
          </div>
        </div>
      </div>
  
  )
}

export default Services
