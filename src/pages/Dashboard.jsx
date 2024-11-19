import { useLocation } from "react-router-dom";
import DynamicTitle from "../components/DynamicTitle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const location = useLocation();
  const data = [
    { month: "Jan", bookings: 100 },
    { month: "Feb", bookings: 120 },
    { month: "Mar", bookings: 150 },
    { month: "Apr", bookings: 200 },
    { month: "May", bookings: 250 },
    { month: "Jun", bookings: 300 },
  ];

  return (
    <div>
      <DynamicTitle location={location} />
      <Navbar />
      <div>
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex-1 p-8">
            <h1 className="text-3xl font-semibold mb-6">Dashboard Overview</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700">
                  Total Bookings
                </h3>
                <p className="text-2xl text-green-500">1,254</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700">
                  Active Adventures
                </h3>
                <p className="text-2xl text-blue-500">15</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700">
                  Customer Satisfaction
                </h3>
                <p className="text-2xl text-yellow-500">4.8/5</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-12">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Bookings Trend
              </h3>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  Booking Trends (Last 6 Months)
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="bookings"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-2 rounded-lg shadow-md mb-12 w-[100vw] md:w-full -ml-8 md:-ml-0">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Recent Bookings
              </h3>
              <table className="min-w-full table-auto">
                <thead className="bg-green-800 text-white">
                  <tr>
                    <th className="px-4 py-2">Customer</th>
                    <th className="px-4 py-2">Adventure</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">John Doe</td>
                    <td className="px-4 py-2">Forest Hiking</td>
                    <td className="px-4 py-2 text-green-500">Confirmed</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Jane Smith</td>
                    <td className="px-4 py-2">River Kayaking</td>
                    <td className="px-4 py-2 text-yellow-500">Pending</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Dashboard;
