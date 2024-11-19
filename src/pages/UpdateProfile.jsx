import { useLocation, useNavigate } from "react-router-dom";
import DynamicTitle from "../components/DynamicTitle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAdventureContext } from "../context/Context";
import { useState } from "react";

const UpdateProfile = () => {
  const location = useLocation();
  const { user, updateUser } = useAdventureContext();
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      if (user) {
        await updateUser({
          photoURL,
          displayName,
        });
        alert("Profile updated successfully!");
        navigate("/user-profile");
        setPhotoURL("");
        setDisplayName("");
      } else {
        alert("No user is logged in!");
      }
    } catch (error) {
      console.error("Error updating profile: ", error.message);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <div>
      <DynamicTitle location={location} />
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[70vh] bg-gradient-to-br from-green-400 via-teal-500 to-blue-600">
        <div className="bg-white shadow-xl rounded-lg p-8 w-11/12 md:w-2/3 lg:w-1/3">
          <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
            Update Your Profile
          </h1>

          <form onSubmit={handleUpdate} className="flex flex-col space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Display Name
              </label>
              <input
                id="name"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="photoURL"
                className="block text-gray-700 font-semibold mb-2"
              >
                Photo URL
              </label>
              <input
                id="photoURL"
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="Enter photo URL"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-2 rounded-lg shadow-md hover:opacity-90 transition"
            >
              Update Information
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default UpdateProfile;
