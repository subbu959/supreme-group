

export default function Contact() {
  return (
    <section
    className="h-screen snap-start py-16 px-16 bg-[#0067B1] text-white flex items-center"
    id="contact"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-lg">For general enquiries</p>
  
          <div>
            <h3 className="font-semibold">Address:</h3>
            <p className="text-white/90">110, 16th Road, Chembur, Mumbai - 400071</p>
          </div>
  
          <div>
            <h3 className="font-semibold">Phone:</h3>
            <p className="text-white/90">+91 22 25208822</p>
          </div>
  
          <div>
            <h3 className="font-semibold">Email:</h3>
            <p className="text-white/90">info@supremegroup.co.in</p>
          </div>
        </div>
  
        {/* Right Side - Contact Form */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-transparent border-b border-white placeholder-white/70 text-white focus:outline-none focus:border-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-white placeholder-white/70 text-white focus:outline-none focus:border-white"
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full bg-transparent border-b border-white placeholder-white/70 text-white focus:outline-none focus:border-white"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full bg-transparent border-b border-white placeholder-white/70 text-white resize-none focus:outline-none focus:border-white"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-[#0067B1] px-4 py-2 rounded-xl text-sm hover:bg-gray-100 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </section>
  
  

  );
}