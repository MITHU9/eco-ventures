import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "John Doe",
    location: "New York, USA",
    feedback:
      "An unforgettable experience! The river kayaking was thrilling, and I learned so much about the local ecosystem. Highly recommended!",
  },
  {
    name: "Jane Smith",
    location: "London, UK",
    feedback:
      "The forest hike was magical. I felt truly connected to nature, and the guide was so knowledgeable. This trip changed my life!",
  },
  {
    name: "Carlos Ruiz",
    location: "Barcelona, Spain",
    feedback:
      "What a fantastic experience! The mountain climbing challenge was tough but rewarding, and the views were absolutely stunning.",
  },
];

const Testimonials = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-16 px-6 bg-gray-100">
      <h2 className="text-center text-4xl font-bold mb-12" data-aos="fade-up">
        What Our Customers Say
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 max-w-xs"
            data-aos="fade-up"
          >
            <p className="text-lg italic mb-4">"{testimonial.feedback}"</p>
            <div className="font-semibold text-green-600">
              {testimonial.name}
            </div>
            <div className="text-gray-500">{testimonial.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
