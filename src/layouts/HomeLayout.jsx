import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useAdventureContext } from "../context/Context";

const HomeLayout = () => {
  const { loading } = useAdventureContext();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 ">
      <div className="w-full mx-auto">
        <Navbar />
      </div>
      <main className="max-w-7xl mx-auto ">
        <section>
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default HomeLayout;
