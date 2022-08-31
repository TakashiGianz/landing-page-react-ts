import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage/landing-page";

import GlobalStyle from "./styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <LandingPage />
  </React.StrictMode>
);
