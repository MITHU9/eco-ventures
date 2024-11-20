import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DynamicTitle from "../components/DynamicTitle";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-600">
      <DynamicTitle location={location} />
      <Navbar />
      <div className="max-w-7xl mx-auto py-8 border mt-4 rounded-lg shadow-lg mb-3">
        <form
          className="flex flex-col gap-5 p-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your name..."
              className="p-3 outline-none flex-1 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Enter your email..."
              className="p-2 outline-none flex-1 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your phone number..."
              className="p-2 outline-none flex-1 border border-gray-300 rounded-lg"
            />
            <div className="flex-1">
              <select className="select outline-none select-bordered w-full">
                <option disabled selected>
                  Choose Your Inquiry Type
                </option>
                <option>Eco Adventure Booking Assistance</option>
                <option>Adventure Activity Feedback</option>
                <option>Environmental Sustainability Questions</option>
                <option>Eco-Friendly Gear Recommendations</option>
                <option>Wildlife Protection Concerns</option>
                <option>Carbon Footprint Reduction Ideas</option>
                <option>Adventure Trip Safety Tips</option>
                <option>Nature Conservation Suggestions</option>
                <option>Other Eco-Adventure Queries</option>
              </select>
            </div>
          </div>
          <textarea
            placeholder="Enter your feedback/complain description..."
            rows={5}
            className="p-3 border outline-none border-gray-300 rounded-lg"
          ></textarea>
          <div>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
            <div className="py-2">
              <h2 className="text-xl font-semibold">Important:</h2>
              <p className="text-sm text-gray-500">
                - Upload any supporting documents
              </p>
              <p className="text-sm text-gray-500">
                - Image size should be less than 500kb and in .jpg, .jpeg, .png
              </p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-primary to-orange-400 text-white p-3 rounded-lg font-semibold hover:from-orange-400 hover:to-primary">
            Submit Feedback/Complain
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
