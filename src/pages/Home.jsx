import AdventureCard from "../components/AdventureCard";
import { useAdventureContext } from "../context/Context";
import Banner from "../components/Banner";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DynamicTitle from "../components/DynamicTitle";
import { useLocation } from "react-router-dom";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const { adventures, loading } = useAdventureContext();
  const location = useLocation();
  //console.log(adventures);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  //console.log(location);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-200">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="mb-10 bg-gradient-to-b from-blue-50 to-blue-200">
      <DynamicTitle location={location} />
      <section>
        <Banner />
      </section>
      <div className="flex flex-col items-center justify-center">
        <div className="text-center py-6 mt-12">
          <h2 className="text-3xl font-bold text-gray-600">
            Explore Your Next Adventure
          </h2>
          <p className="text-lg font-semibold text-gray-500 py-2">
            Discover thrilling adventures with a focus on sustainability and
            nature conservation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 w-11/12 mx-auto">
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            adventures.length > 0 &&
            adventures.map((data, index) => (
              <div
                key={data.id}
                data-aos="flip-up"
                data-aos-delay={index * 150}
              >
                <AdventureCard key={data.id} data={data} />
              </div>
            ))
          )}
        </div>
      </div>
      <section className="mt-20">
        <ChooseUs />
      </section>
      <section>
        <Testimonials />
      </section>
    </div>
  );
};
export default Home;
