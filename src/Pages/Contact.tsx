import { ChangeEvent, FormEvent, useState } from "react";
import { Helmet } from "react-helmet-async";

function Contact() {
  type messageType = {
    name: string;
    phone: string;
    email: string;
    address: string;
    message: string;
  };

  const [message, setMessage] = useState<messageType>({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });

  function formSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isNaN(parseInt(message.phone)) || message.phone.length != 10) {
      alert("Invalid Number");
      return;
    }
    console.log(message);
    clearInputField(); 
  }

  function clearInputField() {
    setMessage({
      name: '',
      phone: '',
      email: '',
      address: '',
      message: ''
    });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
    setMessage({ ...message, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Helmet>
        <title>Contact page</title>
      </Helmet>
      <p className="text-center text-5xl">Contact Us</p>
      <div className="flex justify-center py-8 ">
        <form onSubmit={formSubmit} className="flex flex-col w-[23rem] gap-5 ">
          <div className="flex gap-7">
            <div className="flex flex-col gap-3 flex-wrap ">
              <label htmlFor="name" className="text-gray-300">
                Name
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                value={message.name}  
                className="bg-[#6e706f56] p-2 border-2 border-gray-500 rounded-lg focus:outline-double focus:outline-lime-500 w-[10.5rem]"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1 justify-center">
              <label htmlFor="phone" className="text-gray-300">
                Phone
              </label>
              <input
                required
                name="phone"
                type="text"
                placeholder="Enter your phone"
                value={message.phone}
                className="bg-[#6e706f56] p-2 border-2 border-gray-500 rounded-lg focus:outline-double focus:outline-lime-500 w-[10.5rem]"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex gap-7">
            <div className="flex flex-col gap-1 justify-center">
              <label htmlFor="email" className="text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                value={message.email}  
                className="bg-[#6e706f56] p-2 border-2 border-gray-500 rounded-lg focus:outline-double focus:outline-lime-500 w-[10.5rem]"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1 justify-center">
              <label htmlFor="address" className="text-gray-300">
                Address
              </label>
              <input
                required
                type="text"
                name="address"
                placeholder="Enter your Address"
                value={message.address} 
                className="bg-[#6e706f56] p-2 border-2 border-gray-500 rounded-lg focus:outline-double focus:outline-lime-500 w-[10.5rem]"
                onChange={handleChange}
              />
            </div>
          </div>
          <textarea
            rows={6}
            required
            name="message"
            id="message"
            placeholder="Enter your message"
            value={message.message} 
            className="bg-[#6e706f56] p-2 rounded-xl focus:outline-double focus:outline-lime-500"
            onChange={handleChange}
          />
          <button type="submit" className="bg-lime-500 py-1 px-3 border-2 border-white rounded-xl hover:bg-lime-400">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
