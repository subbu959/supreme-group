import hero from "../assets/hero.mp4";
export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
        <div className="text-white max-w-4xl">
          <p className="text-base sm:text-lg text-gray-300 mb-2 tracking-wide">
            Performance in motion
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Soft Trims and NVH Solutions
          </h1>
          <p className="text-lg sm:text-2xl font-light text-gray-200">
            for seamless rides
          </p>
        </div>
      </div>
    </div>
  );
}
