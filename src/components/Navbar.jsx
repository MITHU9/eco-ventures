import { Compass, LogIn, LogOut } from "lucide-react";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { useAdventureContext } from "../context/Context";

const Navbar = () => {
  const { user, signOutUser } = useAdventureContext();

  const handleSignout = () => {
    signOutUser();
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-400 mt-2 text-white shadow-lg">
      <div className="navbar bg-gradient-to-r from-blue-600 to-blue-400 max-w-7xl mx-auto px-5">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-gray-600 rounded-box mt-3 w-52 p-2 shadow-lg z-50"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {user && (
                <li>
                  <NavLink to="/update-profile">Update Profile</NavLink>
                </li>
              )}

              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>

              {user && (
                <li>
                  <NavLink to="/user-profile">My Profile</NavLink>
                </li>
              )}

              <li>
                <div className="relative flex items-center space-x-4">
                  {user ? (
                    <button
                      onClick={handleSignout}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition flex items-center gap-1"
                    >
                      <LogOut className="h-5 w-5 mt-0.5" />
                      Logout
                    </button>
                  ) : (
                    <Link to="/auth/login" className="flex items-center gap-1">
                      <LogIn className="h-5 w-5 mt-0.5" />
                      Login
                    </Link>
                  )}
                </div>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Compass className="h-8 w-8" />
            <span className="font-bold text-xl"> EcoVentures </span>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-5 font-semibold">
            <li className="hover:text-white rounded-lg">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white text-blue-700 p-2 rounded-lg"
                    : "hover:bg-blue-300 hover:text-white p-1.5 rounded-lg"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="hover:text-white rounded-lg">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white text-blue-700 p-2 rounded-lg"
                    : "hover:bg-blue-300 hover:text-white p-1.5 rounded-lg"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li className="hover:text-white rounded-lg">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white text-blue-700 p-2 rounded-lg"
                    : "hover:bg-blue-300 hover:text-white p-1.5 rounded-lg"
                }
              >
                Contact
              </NavLink>
            </li>

            {user && (
              <li className="hover:text-white rounded-lg">
                <NavLink
                  to="/update-profile"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-white text-blue-700 p-2 rounded-lg"
                      : "hover:bg-blue-300 hover:text-white p-1.5 rounded-lg"
                  }
                >
                  Update Profile
                </NavLink>
              </li>
            )}

            {user && (
              <li className="hover:text-white rounded-lg">
                <NavLink
                  to="/user-profile"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-white text-blue-700 p-2 rounded-lg"
                      : "hover:bg-blue-300 hover:text-white p-1.5 rounded-lg"
                  }
                >
                  My Profile
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <div className="relative flex items-center space-x-4">
            {user ? (
              <>
                {/* User Avatar */}
                <div className="relative group">
                  <img
                    src={user.photoURL || "https://via.placeholder.com/150"}
                    alt="User Profile"
                    className="w-10 h-10 rounded-full border-2 border-blue-400 shadow-md cursor-pointer"
                  />
                  {user.displayName && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white text-gray-700 text-sm font-medium py-1 px-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition z-50">
                      {user.displayName}
                    </div>
                  )}
                </div>

                {/* Logout Button */}
                <button
                  onClick={handleSignout}
                  className="bg-red-500 hidden lg:flex text-white px-4 py-2 rounded-md hover:bg-red-600 transition items-center gap-1"
                >
                  <LogOut className="h-5 w-5 mt-0.5" />
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/auth/login"
                className="bg-blue-500 hidden lg:flex text-white px-4 py-2 rounded-md hover:bg-blue-600 transition items-center gap-1"
              >
                <LogIn className="h-5 w-5 mt-0.5" />
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
