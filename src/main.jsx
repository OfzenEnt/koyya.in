import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./screens/AboutUs.jsx";
import ErrorPage from "./screens/ErrorPage.jsx";
import PreloadWrapper from "./PreloadWrapper.jsx";
import Services from "./screens/services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  // {
  //   path: "/careers",
  //   element: <Careers />,
  //   // errorElement: <ErrorPage />,
  // },
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
