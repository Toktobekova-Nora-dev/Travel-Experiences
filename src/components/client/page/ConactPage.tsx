import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="relative h-80 bg-gradient-to-r from-emerald-800 to-emerald-600">
      <div className="flex items-center justify-center h-full px-4 mx-auto text-center text-white max-w-7xl">
        <div>
          <h1 className="mb-4 text-5xl font-bold">Contact Us</h1>
          <p className="text-xl">We're here to help plan your adventure</p>
        </div>
      </div>
    </div>
    <div className="max-w-5xl px-4 py-16 mx-auto">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="p-8 bg-white shadow-lg rounded-2xl">
          <h2 className="mb-6 text-2xl font-bold">Send a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
            ></textarea>
            <button className="w-full py-3 font-semibold text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700">
              Send Message
            </button>
          </form>
        </div>
        <div className="space-y-6">
          <div className="p-6 bg-white shadow-lg rounded-2xl">
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100">
                <Phone className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Call Us</h3>
                <a href="tel:+996555123456" className="text-emerald-600">
                  +996 555 123 456
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-2xl">
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100">
                <Mail className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Email Us</h3>
                <a
                  href="mailto:info@kyrgyztravel.com"
                  className="text-emerald-600"
                >
                  info@kyrgyztravel.com
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-2xl">
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Visit Us</h3>
                <p className="text-sm text-gray-600">
                  Chuy Avenue 123, Bishkek
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
