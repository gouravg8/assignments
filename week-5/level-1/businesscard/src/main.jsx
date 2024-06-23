import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import AdminSignin from "./components/AdminSignin.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<App />} />
      <Route path="admin/signin" element={<AdminSignin />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <RouterProvider router={router} />
  //</React.StrictMode>
);
