import { Navigate } from "react-router-dom";
import { useAdventureContext } from "../context/Context";

const AuthRedirectWrapper = ({ children }) => {
  const { user, previousRoute } = useAdventureContext();

  //console.log(previousRoute);

  if (user) {
    return <Navigate to={previousRoute} replace />;
  }

  return children;
};

export default AuthRedirectWrapper;
