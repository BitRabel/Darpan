import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="https://via.placeholder.com/50x50?text=Darpan" 
                alt="sparkLogo.svg" 
                className="w-12 h-12 mr-3"
              />
              <span className="text-2xl font-bold text-yellow-400">Darpan</span>
            </div>
            <p className="text-gray-400">
            Connect students to learning and opportunities.
            </p>
            <div className="flex space-x-4">
              <FaYoutube className="text-gray-400 hover:text-yellow-400 text-xl cursor-pointer transition-colors" />
              <FaInstagram className="text-gray-400 hover:text-yellow-400 text-xl cursor-pointer transition-colors" />
              <FaLinkedin className="text-gray-400 hover:text-yellow-400 text-xl cursor-pointer transition-colors" />
              <FaFacebook className="text-gray-400 hover:text-yellow-400 text-xl cursor-pointer transition-colors" />
              <FaXTwitter className="text-gray-400 hover:text-yellow-400 text-xl cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-yellow-400 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-yellow-400 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Education Street, Learning City, 101010</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-yellow-400 mr-3" />
                <span className="text-gray-400">+91 9128254130</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-yellow-400 mr-3" />
                <span className="text-gray-400">rajadityasing09@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-yellow-400 pb-2 inline-block">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get updates on new courses and offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-gray-800 text-white rounded-l focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-4 py-2 rounded-r transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Course Categories Section */}
        <div className="border-t border-gray-700 pt-10">
          <h3 className="text-xl font-bold text-white mb-6">Our Course Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* IB Section */}
            

            {/* Cambridge Section */}
            

            {/* Subjects Section */}
            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-3">Subjects</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mathematics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Physics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Chemistry</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Biology</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">English</a></li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Past Papers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Study Guides</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mock Exams</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Video Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Online Support</a></li>
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-3">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Darpan. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}