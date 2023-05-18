import React, { useEffect, useReducer } from "react";
import { appState } from "./initialState";
import { appReducer } from "./reducers";
import { setMenuLinks } from "./actions";

export const AppContext = React.createContext(null);
const { Provider } = AppContext;

export const AppProvider = ({ children }) => {
  const [app, dispatchApp] = useReducer(appReducer, appState);

  useEffect(() => {
    setMenuLinks(dispatchApp);
    return () => {};
  }, []);

  const state = {
    menu: app.menu,
    dispatchApp: dispatchApp,
  };
  const value = React.useMemo(() => state, [app]);
  return <Provider value={value}>{children}</Provider>;
};
