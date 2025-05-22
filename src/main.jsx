import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./screens/AboutUs.jsx";
import ErrorPage from "./screens/ErrorPage.jsx";
import PreloadWrapper from "./PreloadWrapper.jsx";
import CorporateTraining from "./screens/services/techForBusiness/CorporateTraining";
import SoftwareDevelopment from "./screens/services/techForBusiness/SoftwareDevelopment";
import Consulting from "./screens/services/techForBusiness/Consulting";
import AgriBusiness from "./screens/services/AgriBusiness/UrbanBrews";
import MarketResearch from "./screens/services/AgriBusiness/MarketResearch";
import UrbanBrews from "./screens/services/AgriBusiness/UrbanBrews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/services/corporate-training",
    element: <CorporateTraining />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/services/software-development",
    element: <SoftwareDevelopment />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/services/consulting",
    element: <Consulting />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/services/market-research",
    element: <MarketResearch />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/services/urban-brews",
    element: <UrbanBrews />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  //   // errorElement: <ErrorPage />,
  // },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PreloadWrapper>
      <RouterProvider router={router} />
    </PreloadWrapper>
  </StrictMode>
);
