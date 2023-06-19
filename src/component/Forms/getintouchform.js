import React, { useRef, useState } from 'react'
import Swal from 'sweetalert2'

import emailjs from '@emailjs/browser'

const getintouchform = () => {
  const form = useRef()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };


  const sendEmail = (e) => {
    e.preventDefault();

  

    emailjs
      .sendForm(
        'service_tiqfb8h',
        'template_3giubiv',
        form.current,
        'V2Ms9H9CLZLm5PUQs',
      )
      .then(
        (result) => {
          Swal.fire('Message sent you will receive a response shortly')
          form.current.reset()
        },
        (error) => {
          console.log(error.text)
        },
      )

      setName('');
      setEmail('');
      setMessage('');
  }
  return (
    <div className="w-full  ">
      <form
        className="flex flex-col gap-4 border-black border-2 rounded-md  p-8"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="flex flex-col mt-2 gap-2">
          <label className="text-2xl">Full Name</label>
          <input
            type="text"
            placeholder="Enter your Full Name"
            name="user_name"
            value={name} onChange={handleNameChange}
            className="w-full  capitalize rounded-md bg-transparent   p-2   focus:outline-none focus:ring focus:ring-white   "
          />
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <label className="text-2xl">Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            name="user_email"
            value={email} onChange={handleEmailChange}
            className="w-full  capitalize rounded-md bg-transparent   p-2   focus:outline-none focus:ring focus:ring-white   "
          />
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <label className="text-2xl">Message</label>
          <textarea
            rows="4"
            placeholder="Enter your Message"
            name="message"
            value={message} onChange={handleMessageChange}
            className="w-full resize-none  capitalize rounded-md bg-transparent   p-2   focus:outline-none focus:ring focus:ring-white   "
          />
        </div>

        <div className=" w-full">
        <button className="w-full  text-xl bg-sky-600 hover:bg-sky-800 cursor-pointer  border-[1px] border-transparent  hover:text-opacity-50 hover:border-gray-800 text-white font-bold py-2 px-4 md:py-6 md:px-16 transition duration-1000 rounded-full">
          Submit
          </button>
        </div>

 
      </form>
    </div>
  )
}

export default getintouchform
