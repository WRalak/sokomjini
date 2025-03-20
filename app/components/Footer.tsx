import { AiTwotoneShop } from "react-icons/ai";

const Footer = () => {
    return (
      <footer className="bg-white text-gray-800 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Left Section - Logo & Description */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 sm:p-2">
                  <div className="text-xl md:text-3xl font-bold flex items-center">
                    <span className="text-orange-500">Soko</span>
                    <span className="text-black">Ndogo</span>
                    <AiTwotoneShop className=" text-xl text-orange-500 md:text-3xl" />
                  </div>
                </div>
            <p className="text-gray-700 mt-2 max-w-xs">
              SokoNdogo is your go-to platform for the latest trends, offering a seamless shopping experience.
            </p>
          </div>
  
          {/* Right Section - Company & Get in Touch */}
          <div className="flex flex-col lg:flex-row gap-12 mt-6 lg:mt-0">
            {/* Company Links */}
            <div>
              <h1 className="text-lg font-semibold">COMPANY</h1>
              <nav className="mt-2 space-y-1 text-gray-700">
                <a href="#" className="block hover:text-white">Home</a>
                <a href="#" className="block hover:text-white">About Us</a>
                <a href="#" className="block hover:text-white">Delivery</a>
                <a href="#" className="block hover:text-white">Privacy Policy</a>
              </nav>
            </div>
  
            {/* Get in Touch */}
            <div>
              <h1 className="text-lg font-semibold">GET IN TOUCH</h1>
              <p className="text-gray-700 mt-2">Phone: +123 456 7890</p>
              <p className="text-gray-700 mt-2">Email: contact@sokondogo.com</p>
            </div>
          </div>
        </div>
  
        {/* Divider & Copyright */}
        <hr className="border-gray-300 my-6" />
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} SokoNdogo. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  
  