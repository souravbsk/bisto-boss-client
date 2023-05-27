import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app)



const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
const [loading,setLoading] = useState(true);


const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
} 


const loginUser = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}


const logOut = () => {
    setLoading(true)
    return signOut(auth)
}






useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,currentUser => {
        setUser(currentUser);
        console.log(currentUser);
        setLoading(false)
    })
    return () => {
        unsubscribe()
    }
},[])


const updateUserProfile = (name,photo) => {
  return updateProfile(auth.currentUser,{
    displayName:name,
    photoURL:photo
  })
}



  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logOut,
    updateUserProfile
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProviders;