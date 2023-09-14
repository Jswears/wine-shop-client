"use client";

import { AuthContextType, AuthContextWrapperProps } from "@/types";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextWrapper: React.FC<AuthContextWrapperProps> = (props) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authenticateUser = async () => {
    const tokenInStorage = localStorage.getItem("authToken");
    if (tokenInStorage) {
      try {
        const response = await axios.get("http://localhost:5005/auth/verify", {
          headers: { Authorization: `Bearer ${tokenInStorage}` },
        });
        setUser(response.data.currentUser);
        setIsLoading(false);
        setIsLoggedIn(true);
        // console.log(user);
      } catch (error) {
        console.log(error);
        setUser(null);
        setIsLoading(false);
        setIsLoggedIn(false);
      }
    } else {
      setUser(null);
      setIsLoading(false);
      setIsLoggedIn(false);
    }
  };

  const logoutHandle = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
  };

  const storeToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };
  useEffect(() => {
    // Run the function after the initial render,
    // after the components in the App render for the first time.
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storeToken,
        isLoading,
        isLoggedIn,
        user,
        authenticateUser,
        logoutHandle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextWrapper };
