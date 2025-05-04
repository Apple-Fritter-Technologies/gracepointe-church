export default function Hero() {
  return (
    <section id="home" className="relative pt-20 md:pt-24">
      <div className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Gracepointe
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            A place where faith, community, and purpose come together
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#services"
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              Join Us Sunday
            </a>
            <a
              href="#beliefs"
              className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-8 rounded-md transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
