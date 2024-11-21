import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../lib/firebase";

const AdventureContext = createContext({
  adventures: [],
});

const ContextProvider = ({ children }) => {
  const [adventures, setAdventures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [previousRoute, setPreviousRoute] = useState("/");

  //Authenticating the user
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const createUserWithEmail = (email, password, name) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password, name);
  };

  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  //get Current User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (
      location.pathname !== "/auth/login" &&
      location.pathname !== "/auth/register"
    ) {
      setPreviousRoute(location.pathname);
    }
  }, [location.pathname]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setAdventures(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //console.log(previousRoute);
  //console.log(user);

  return (
    <AdventureContext.Provider
      value={{
        adventures,
        loading,
        setLoading,
        signInWithGoogle,
        createUserWithEmail,
        signInWithEmail,
        signOutUser,
        forgotPassword,
        user,
        updateUser,
        previousRoute,
      }}
    >
      {children}
    </AdventureContext.Provider>
  );
};

export const useAdventureContext = () => {
  return useContext(AdventureContext);
};

export default ContextProvider;
