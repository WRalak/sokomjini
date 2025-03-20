"use client";

import Image from "next/image";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Header */}
      <h1 className="text-4xl text-orange-600 font-bold text-center mb-8">Contact Us</h1>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-5xl">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image 
            src="/conts.png" 
            alt="Contact Us" 
            width={600} 
            height={600} 
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Contact Info */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold">Our Store</h2>
          <p className="text-gray-700">
            54709 Willms Station, Suite 350
            <br />
            <strong>Tel:</strong> (415) 555‑0132
            <br />
            <strong>Email:</strong> sokondogo@gmail.com
          </p>

          <h2 className="text-2xl font-semibold">Careers at Forever</h2>
          <p className="text-gray-700">
            Learn more about our teams and job openings.
          </p>
          <button className=" border text-orange-600 px-6 py-2 rounded-lg hover:bg-orange-600 hover:text-white">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="mt-12 w-full max-w-md">
      <h4 className="text-sm font-bold text-center">Subscribe now & get 20% off</h4>
          <p className="text-gray-600 text-sm mt-2">
           Subscribe to our newsletter to receive exclusive offers, updates, and more!
          </p>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email ID"
            className="px-4 py-2 border border-gray-400 rounded-l-lg w-full"
          />
          <button className="bg-orange-600 text-white px-6 py-2 rounded-r-lg hover:bg-orange-700">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;


