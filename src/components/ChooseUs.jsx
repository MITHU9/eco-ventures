import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ChooseUs = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-16 px-6 bg-green-100">
      <h2 className="text-center text-4xl font-bold mb-12" data-aos="fade-up">
        Why Choose Our Eco-Adventures?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">
            Sustainable Travel
          </h3>
          <p className="text-lg">
            We prioritize sustainable practices that respect nature and protect
            the environment, ensuring a minimal ecological footprint.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">
            Expert Guides
          </h3>
          <p className="text-lg">
            Our certified and passionate guides provide the best adventure
            experiences with a deep understanding of the ecosystems we explore.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">
            Community Impact
          </h3>
          <p className="text-lg">
            By partnering with local communities, we ensure that your adventure
            supports the people and places you visit.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ChooseUs;
