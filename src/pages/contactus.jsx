import React from 'react';
import contact from '../assets/contact.jpg';
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdOutlineLocationCity } from "react-icons/md";

function Contactus() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7ff4f50a-34de-48b4-a00b-1d6e17feae7a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => {
        setResult("");
      }, 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${contact})` }} id='contact'>
      
      <div className=" absolute inset-0 flex justify-center items-center">
        <div className="flex w-full max-w-screen-xl px-6 md:px-16 py-8 space-x-8">
          
          <div className="mt-20 text-white flex flex-col space-y-6 w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-center md:text-left">Let’s Keep in Touch</h1>
            <p className="text-lg text-center md:text-left">
              We have created a new product that will <br />help you, and 
              others to create companies<br /> for their startups quickly and easily.
            </p>
            <ul className="space-y-4 text-center md:text-left">
              <li className=" mt-6 flex items-center justify-center md:justify-start">
                <BsTelephoneFill className="mr-2" /> +1 555 505 5050
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <MdEmail className="mr-2" /> info@smalter.com
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <MdOutlineLocationCity className="mr-2" /> San Francisco, CA560 Bush St & 20th Ave,<br /> Apt5 San Francisco, 230909
              </li>
            </ul>
          </div>
          
          
          <div className="bg-white p-8 rounded-lg shadow-lg w-full h-[500px] md:w-1/2">
            <form action="Post" method="POST" onSubmit={onSubmit}>
              
              <div className="mb-8 mt-10 flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1 md:mb-0">
                  <label htmlFor="name" className="block text-sm font-semibold">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Wick"
                    required
                    className="w-full p-2 bg-gray-200 rounded"
                  />
                </div>
                
                <div className="flex-1 mb-4 md:mb-0">
                  <label htmlFor="mail" className="block text-sm font-semibold">Email</label>
                  <input
                    type="email"
                    id="mail"
                    name="mail"
                    placeholder="email@email.com"
                    required
                    className="w-full p-2 bg-gray-200 rounded"
                  />
                </div>
              </div>

              <div className="mb-8 flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1 mb-4 md:mb-0">
                  <label htmlFor="phone" className="block text-sm font-semibold">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(123) 456-789"
                    required
                    className="w-full p-2 bg-gray-200 rounded"
                  />
                </div>
                
                <div className="flex-1 mb-4 md:mb-0">
                  <label htmlFor="company" className="block text-sm font-semibold">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Facebook"
                    required
                    className="w-full p-2 bg-gray-200 rounded"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  required
                  className="w-full p-2 bg-gray-200 rounded"
                ></textarea>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="sendCopy"
                    name="sendCopy"
                    className="h-4 w-4"
                  />
                  <label htmlFor="sendCopy" className="text-sm text-gray-400">Send me a copy</label>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white w-[180px] h-[40px] rounded-[40px]  hover:bg-blue-500 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Contactus;
