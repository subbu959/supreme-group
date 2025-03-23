import logo from "../assets/logo.png";
export default function Footer() {
  return (
    <footer className="bg-white text-black pt-16 pb-8 snap-start" id="footer">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-12">
      
      {/* Logo Section */}
      <div>
        <img
          src={logo}
          alt="Supreme Logo"
          className="h-8 mb-6"
        />
      </div>

      {/* Applications */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Applications</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-500">Apparel</a></li>
          <li><a href="#" className="hover:text-blue-500">Automotive</a></li>
          <li><a href="#" className="hover:text-blue-500">Filtration</a></li>
          <li><a href="#" className="hover:text-blue-500">Customised Nonwoven</a></li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-500">Who We Are</a></li>
          <li><a href="#" className="hover:text-blue-500">Global Competency</a></li>
          <li><a href="#" className="hover:text-blue-500">Innovation</a></li>
          <li><a href="#" className="hover:text-blue-500">ESG Impact</a></li>
        </ul>
      </div>

      {/* More */}
      <div>
        <h3 className="text-lg font-semibold mb-4">More</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
          <li><a href="#" className="hover:text-blue-500">Careers</a></li>
        </ul>
      </div>

      {/* Social */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-500">Twitter</a></li>
          <li><a href="#" className="hover:text-blue-500">LinkedIn</a></li>
          <li><a href="#" className="hover:text-blue-500">Instagram</a></li>
          <li><a href="#" className="hover:text-blue-500">Medium</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom Footer */}
    <div className="border-t border-gray-300 pt-6 text-sm flex flex-col md:flex-row justify-between gap-4">
      <p>© 2024 Supreme Group. All rights reserved.</p>
      <p>Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.</p>
    </div>
  </div>
</footer>

  );
}