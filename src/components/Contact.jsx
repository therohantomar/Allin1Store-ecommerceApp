import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { handleSubmit } from "../utils/helper";
import { Link } from "react-router-dom";
import Getintouch from "../assets/Images/getintouch.svg"


function Contact() {
const formRef=useRef()
const [status,setStatus]=useState(null)

  return (
    <div className=" flex items-center min-h-screen border-2 justify-center  w-full">
    <div className="flex items-center w-full flex-wrap  justify-center  ">
    <div className="container  w-max  mt-2  px-20">
      <h1 className="text-3xl font-bold mb-4">Contact Page</h1>
      <form onSubmit={(e)=>handleSubmit(e,status,setStatus,emailjs,formRef)} ref={formRef} className="w-max">
        <div className=" flex sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row flex-wrap gap-2">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-2 font-bold">
            Phone Number (max 12 digits)
          </label>
          <input
            type="tel"
            id="phoneNumber"
            pattern="[0-9]{1,12}"
            maxLength="12"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"

            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-bold">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        {status==="OK"?<Span className="flex items-center"><h1 className="text-gray-500 font-semibold">Thank Your For Your Feedback :) </h1>
          <h1><Link to={"/"} >Continue Shopping</Link></h1>
        </Span>:
        <input
          type="submit"
          value={"send"}
          className="bg-black  w-full cursor-pointer text-white rounded-md px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300"
        />
        }
      </form>
    </div>
    <img src={Getintouch} alt="getin touch"  className="w-96  h-max"/>

    </div>
    </div>
  );
}

export default Contact
