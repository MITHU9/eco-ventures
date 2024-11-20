import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-900 via-blue-800 to-blue-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">
              About EcoVentures
            </h3>
            <p className="text-blue-200">
              Discover sustainable adventures that respect and preserve our
              planet's natural beauty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">
              Quick Links
            </h3>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a
                  href="/adventures"
                  className="hover:text-blue-100 transition"
                >
                  Adventures
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-blue-100 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-100 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">
              Contact Us
            </h3>
            <p className="text-blue-200">
              Email: info@ecoventures.com
              <br />
              Phone: (555) 123-4567
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/MITHU.CSE.PUST"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-100 transition transform hover:scale-110"
              >
                <Facebook />
              </a>
              <a
                href="https://x.com/MithuShahariar"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-100 transition transform hover:scale-110"
              >
                <Twitter />
              </a>
              <a
                href="https://www.instagram.com/shahariar_mithu/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-100 transition transform hover:scale-110"
              >
                <Instagram />
              </a>
              <a
                href="https://mail.google.com"
                className="hover:text-blue-100 transition transform hover:scale-110"
              >
                <Mail />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-blue-600 text-center text-blue-200">
          <p>
            &copy; {new Date().getFullYear()} EcoVentures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
