import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebas/firebase.init";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  
  const coffeeIfo = {
    user,
    loading,
    createUser,
    logInUser
  }
  return (
    <AuthContext.Provider value={coffeeIfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;