import React, { useEffect, useReducer } from "react";
import { appState } from "./initialState";
import { appReducer } from "./reducers";
import { getLogo, setMenuLinks } from "./actions";

export const AppContext = React.createContext(null);
const { Provider } = AppContext;

export const AppProvider = ({ children }) => {
  const [app, dispatchApp] = useReducer(appReducer, appState);

  useEffect(() => {
    getLogo(dispatchApp);
    setMenuLinks(dispatchApp);
    return () => {};
  }, []);

  const state = {
    menu: app.menu,
    logo: app.logo,
    dispatchApp: dispatchApp,
  };
  const value = React.useMemo(() => state, [app]);
  return <Provider value={value}>{children}</Provider>;
};
