import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Dashboard from "pages/Dashboard";
import Rides from "pages/Rides";
import Drivers from "pages/Drivers";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "rides",
      element: <Rides />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
