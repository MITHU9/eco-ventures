import { useLocation, useNavigate } from "react-router-dom";
import DynamicTitle from "../components/DynamicTitle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAdventureContext } from "../context/Context";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const UserProfile = () => {
  const location = useLocation();
  const { user } = useAdventureContext();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-600 overflow-hidden">
      {/* Snowflakes animation */}
      {Array.from({ length: 30 }).map((_, index) => (
        <div
          key={index}
          className="absolute top-0 text-white text-2xl animate-snow"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 5}s`,
          }}
        >
          ❄
        </div>
      ))}

      <DynamicTitle location={location} />
      <Navbar />

      <div className="flex flex-col items-center justify-center mt-6 h-[70vh] py-8">
        <div
          className="bg-white bg-opacity-80 shadow-xl rounded-lg p-8 w-11/12 md:w-2/3 lg:w-1/3 relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="absolute top-0 -mt-12 left-1/2 transform -translate-x-1/2">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Profile"
                className="w-24 h-24 rounded-full border-4 border-white shadow-md"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-lg font-bold border-4 border-white shadow-md">
                {user?.displayName?.charAt(0) || "U"}
              </div>
            )}
          </div>

          <div className="mt-16 text-center">
            <h1
              className="text-3xl font-extrabold text-gray-800 mb-2"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              Welcome, {user?.displayName || "User"}!
            </h1>
            <p
              className="text-sm font-semibold text-gray-500 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {user?.email || "No Email Provided"}
            </p>
            <div className="flex flex-col items-center space-y-3">
              <div
                className="flex items-center justify-between w-full text-gray-700"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <span className="font-semibold">Email Verified:</span>
                <span>{user?.emailVerified ? "Yes" : "No"}</span>
              </div>
              <div
                className="flex items-center justify-between w-full text-gray-700"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <span className="font-semibold">Phone Number:</span>
                <span>{user?.phoneNumber || "Not Provided"}</span>
              </div>
              <div
                className="flex items-center justify-between w-full text-gray-700"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <span className="font-semibold">Last Login:</span>
                <span>
                  {user?.metadata?.lastSignInTime
                    ? new Date(user.metadata.lastSignInTime).toLocaleString()
                    : "Unknown"}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => navigate("/update-profile")}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserProfile;
