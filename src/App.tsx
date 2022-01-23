import Routes from "./routes/index";
import GlobalStyles from "./GlobalStyles";
import React, { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, authStore } from "./stores/AuthStore";
// import { VerifyToken } from './routes/VerifyToken';
export const RouterContext = createContext({});

function App() {
  return (
    <>
      <AuthProvider value={authStore}>
        <BrowserRouter>
          {/* <VerifyToken /> */}
          <GlobalStyles />
          <Routes />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
