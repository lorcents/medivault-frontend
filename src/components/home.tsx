// components/Content.js
import React from "react";
import Image from "next/image";
import pic1 from "../../public/digital-patient-record_imac2013_left.png"
import pic2 from "../../public/digital-patient-record_imac2013_right.png"
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck,faArrowRight} from '@fortawesome/free-solid-svg-icons'

const LI= <FontAwesomeIcon icon={faCheck} style={{color: "#e70d2e",}} />


function Content(props:{imageOnLeft :boolean} ) {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0">
      {props.imageOnLeft ? (
        <>
          {/* Image on the left */}
          <div className="lg:w-1/2">
            <Image
              src={pic2}
              alt="Picture of the author"
              width={500} 
              height={500} 
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>

          {/* Content on the right */}
          <div className="lg:w-1/2 p-4">
            <h2 className="text-2xl font-bold">Manage your health records </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sagittis tellus ut odio lacinia, vel fermentum mi vestibulum.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              {LI} Point 1 <br></br>
              {LI} Point 2<br></br>
              {LI} Point 3<br></br>
              {LI} Point 4<br></br>
            </ul>
            <Button className=" hover:bg-deep-royal-blue text-white rounded-full px-6 py-2 mt-4 flex items-center">
                <a className="px-3" href='/auth'>Get started</a><FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </div>
        </>
      ) : (
        <>
          {/* Content on the left */}
          <div className="lg:w-1/2 p-4">
            <h2 className="text-2xl font-bold">Are you health facility</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sagittis tellus ut odio lacinia, vel fermentum mi vestibulum.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              {LI} Point 1 <br></br>
              {LI} Point 2<br></br>
              {LI} Point 3<br></br>
              {LI} Point 4<br></br>
            </ul>
            <Button className=" hover:bg-deep-royal-blue text-white rounded-full px-6 py-2 mt-4 flex items-center">
              <span className="px-3">Get Started </span><FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </div>

          {/* Image on the right */}
          <div className="lg:w-1/2">
          <Image
              src={pic1}
              alt="Picture of the author"
              width={500} 
              height={500} 
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Content;
