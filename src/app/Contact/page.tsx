
import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="Full Name" 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Email Address" 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="Phone Number" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <textarea 
              placeholder="Your Message" 
              rows={5} 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-[60%] bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
