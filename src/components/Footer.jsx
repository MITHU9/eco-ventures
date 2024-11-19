import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About EcoVentures</h3>
            <p className="text-green-200">
              Discover sustainable adventures that respect and preserve our
              planet's natural beauty.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-green-200">
              <li>
                <a href="/adventures" className="hover:text-white">
                  Adventures
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-green-200">
              Email: info@ecoventures.com
              <br />
              Phone: (555) 123-4567
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/MITHU.CSE.PUST"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-200"
              >
                <Facebook />
              </a>
              <a
                href="https://x.com/MithuShahariar"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-200"
              >
                <Twitter />
              </a>
              <a
                href="https://www.instagram.com/shahariar_mithu/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-200"
              >
                <Instagram />
              </a>
              <a
                href="https://mail.google.com"
                className="hover:text-green-200"
              >
                <Mail />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-green-200">
          <p>
            &copy; {new Date().getFullYear()} EcoVentures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
