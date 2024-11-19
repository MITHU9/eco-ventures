import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AdventureDetails = () => {
  const loaderData = useLoaderData();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [showCongratsModal, setShowCongratsModal] = useState(false);
  const details = loaderData.find((item) => item.id === id);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 }); // Initialize AOS with custom settings
    AOS.refresh(); // Refresh AOS to handle dynamic content
  }, []);

  const {
    AdventureTitle,
    Image,
    CategoryName,
    ShortDescription,
    AdventureCost,
    BookingAvailability,
    Location,
    Duration,
    AdventureLevel,
    IncludedItems,
    EcoFriendlyFeatures,
    MaxGroupSize,
    SpecialInstructions,
  } = details;

  const handleTalkToExpert = () => {
    const now = new Date();
    const currentHour = now.getHours();
    if (currentHour >= 10 && currentHour < 20) {
      window.open("https://meet.google.com", "_blank");
    } else {
      setShowModal(true);
    }
  };

  const handleBookNow = () => {
    setShowCongratsModal(true);
  };

  return (
    <div className="bg-gradient-to-bl from-gray-100 via-blue-50 to-purple-100 min-h-screen">
      <div
        className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]"
        data-aos="fade-zoom-in"
      >
        <img
          src={Image}
          alt={AdventureTitle}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
        <div
          className="relative z-10 text-center text-white px-4 py-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            {AdventureTitle}
          </h1>
          <p className="text-lg sm:text-xl italic">{CategoryName}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <section
          className="relative bg-white shadow-2xl rounded-xl overflow-hidden"
          data-aos="fade-right"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-green-400" />
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {ShortDescription}
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            className="relative bg-white shadow-xl rounded-lg p-8"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Details
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Cost:</strong> ${AdventureCost.toFixed(2)}
              </p>
              <p>
                <strong>Booking Availability:</strong> {BookingAvailability}
              </p>
              <p>
                <strong>Location:</strong> {Location}
              </p>
              <p>
                <strong>Duration:</strong> {Duration}
              </p>
              <p>
                <strong>Adventure Level:</strong> {AdventureLevel}
              </p>
              <p>
                <strong>Max Group Size:</strong> {MaxGroupSize}
              </p>
            </div>
          </div>

          <div
            className="relative bg-white shadow-xl rounded-lg p-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Features
            </h2>
            <div>
              <h3 className="text-lg font-medium text-gray-700">
                Included Items
              </h3>
              <ul className="mt-4 space-y-2">
                {IncludedItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-600 flex items-center space-x-2"
                  >
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-700">
                Eco-Friendly Features
              </h3>
              <ul className="mt-4 space-y-2">
                {EcoFriendlyFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="text-gray-600 flex items-center space-x-2"
                  >
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="relative bg-white shadow-xl rounded-lg p-8"
          data-aos="fade-right"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Special Instructions
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            {SpecialInstructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </section>

        <div
          className="flex justify-center space-x-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <button
            onClick={handleBookNow}
            className="px-10 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-md hover:scale-105 transition transform duration-300"
          >
            Book Now
          </button>
          <button
            onClick={handleTalkToExpert}
            className="px-10 py-3 text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-md hover:scale-105 transition transform duration-300"
          >
            Talk with Expert
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full text-center shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Consultation Hours
            </h2>
            <p className="text-gray-600">
              Our experts are available for consultations between{" "}
              <strong>10:00 AM</strong> and <strong>8:00 PM</strong>.
            </p>
            <div className="mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showCongratsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full text-center shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              🎉 Congratulations!
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Well done, <strong>Adventurer</strong>! Your booking is confirmed.
            </p>
            <button
              onClick={() => setShowCongratsModal(false)}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdventureDetails;
