import React, { useState, useMemo, useEffect } from "react";
import { storeContext } from "./store";
import { getTheTokenFromStorage } from "./../services/auth";
import jwt from "jwt-decode";

const StoreProvider = ({ children }) => {
  const [store, setStore] = useState({
    isLogged: true,
    user: null,
    token: null,
  });

  useEffect(() => {
    const token = getTheTokenFromStorage();
    try {
      const user = jwt(token);
      const exp = new Date(user.exp * 1000);
      const now = new Date();
      const isLogged = now < exp ? true : false;
      setStore({ ...store, isLogged, token, user });
    } catch (error) {
      setStore({
        isLogged: false,
        user: null,
        token: null,
      });
    }
  }, [store.isLogged]);


  const storeValue = useMemo(() => ({ store, setStore }), [store, setStore]);

  return (
    <storeContext.Provider value={storeValue}>{children}</storeContext.Provider>
  );
};

export default StoreProvider;
