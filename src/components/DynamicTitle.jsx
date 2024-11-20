import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = ({ location }) => {
  //console.log(location);

  useEffect(() => {
    const titles = {
      "/": "Home || EcoAdventure",
      "/adventure-details/:id": "Adventure Details || EcoAdventure",
      "/auth/login": "Login || EcoAdventure",
      "/auth/register": "Register || EcoAdventure",
      "/dashboard": "Dashboard || EcoAdventure",
      "/contact": "Contact || EcoAdventure",
      "/update-profile": "Update-Profile || EcoAdventure",
      "/user-profile": "My-Profile || EcoAdventure",
      "/auth/forgot-password": "Forgot Password || EcoAdventure",
    };

    const newTitle = titles[location.pathname] || "EcoAdventure";
    document.title = newTitle;
  }, [location]);

  return null;
};
export default DynamicTitle;
