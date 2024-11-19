import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AdventureCard = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  //console.log(data.id);

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <img
        className="w-full h-48 object-cover"
        src={data?.Image}
        alt={data?.AdventureTitle}
        data-aos="zoom-in"
        data-aos-delay="200"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2" data-aos="fade-up">
          {data.AdventureTitle}
        </h2>
        <ul className="text-sm text-gray-600 mb-4" data-aos="slide-left">
          {data.EcoFriendlyFeatures.map((feature, index) => (
            <li key={index} className="list-disc list-inside">
              {feature}
            </li>
          ))}
        </ul>
        <NavLink
          to={`/adventure-details/${data?.id}`}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Explore Now
        </NavLink>
      </div>
    </div>
  );
};
export default AdventureCard;
