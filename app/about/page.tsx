



const AboutUs = () => {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* About Us Title */}
        <h1 className="text-4xl font-bold text-orange-600 text-center mb-10">ABOUT US <span className="text-black">-</span></h1>
  
        {/* Image & Text Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img
            src="remark.jpg"
            alt="About Us"
            className="w-[686px] h-[697px] object-cover rounded-lg"
          />
          <p className="text-gray-700 text-sm">
            SokoNdogo was born out of a passion for innovation and a desire to revolutionize the way 
            people shop online. Our journey began with a simple idea: to provide a platform where 
            customers can easily discover, explore, and purchase a wide range of products from the 
            comfort of their homes.
            <br /><br />
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality 
            products that cater to every taste and preference. From fashion and beauty to electronics 
            and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
            <br /><br />
          
            <br />
            Our mission at SokoNdogo is to empower customers with choice, convenience, and confidence. 
            We're dedicated to providing a seamless shopping experience that exceeds expectations, 
            from browsing and ordering to delivery and beyond.
          </p>
        </div>
  
        {/* Why Choose Us Section */}
        <h1 className="text-3xl font-bold text-left mt-12">WHY CHOOSE US</h1>
   


        <div className="border-t border-b border-gray-400 mt-6">
  <div className="flex flex-col lg:flex-row divide-x divide-gray-400">
    {/* Box 1 */}
    <div className="p-6 flex-1">
      <h5 className="text-sm font-semibold">Quality Assurance</h5>
      <p className="text-gray-600 mt-2 text-xs">
        We meticulously select and vet each product to ensure it meets our stringent quality standards.
      </p>
    </div>

    {/* Box 2 */}
    <div className="p-6 flex-1">
      <h5 className="text-sm font-semibold">Convenience</h5>
      <p className="text-gray-600 text-xs mt-2">
        With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
      </p>
    </div>

    {/* Box 3 */}
    <div className="p-6 flex-1">
      <h5 className="text-sm font-semibold">Exceptional Customer Service</h5>
      <p className="text-gray-600 text-xs mt-2">
        Our dedicated support team is always ready to assist you, ensuring a smooth and enjoyable shopping experience.
      </p>
    </div>
  </div>
</div>


  
        {/* Subscription Section */}
        <div className=" p-8 rounded-lg mt-12 text-center">
          <h4 className="text-xl font-bold">Subscribe now & get 20% off</h4>
          <p className="text-gray-600 mt-2">
           Subscribe to our newsletter to receive exclusive offers, updates, and more!
          </p>
          <div className="mt-6 flex justify-center">
  <div className="flex w-full sm:w-80 border border-gray-400 rounded-lg overflow-hidden">
    <input
      type="email"
      placeholder="Enter your email ID"
      className="px-4 py-2 text-xs w-full outline-none"
    />
    <button className="bg-orange-600 text-sm text-white px-6 py-2 hover:bg-orange-700">
      Subscribe
    </button>
  </div>
</div>

        </div>
      </div>
    );
  };
  
  export default AboutUs;
  
  