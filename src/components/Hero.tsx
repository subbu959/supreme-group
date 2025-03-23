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
          <p className="text-xl  text-white tracking-wider uppercase mb-2">
            Performance in motion
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Soft Trims and <span className="text-cyan-400">NVH Solutions</span>
          </h1>

          <p className="text-3xl  text-white ">
            For seamless rides
          </p>
        </div>
      </div>
    </div>
  );
}
