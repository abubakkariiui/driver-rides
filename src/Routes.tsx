import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Dashboard from "pages/Dashboard";
import Rides from "pages/Rides";
import Drivers from "pages/Drivers";
import MyPaymentsPage from "pages/MyPayments";
import CarClassesPage from "pages/CarClasses";
import ModeratorsPage from "pages/Moderators";
import DriverPaymentPage from "pages/DriverPayments";
import DriversPage from "pages/Drivers";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "rides/",
      element: <Rides />,
      children: [
        {
          path: ":id",
          element: <CarClassesPage />,
        },
      ],
    },
    {
      path: "drivers/",
      element: <DriversPage />,
      children: [
        {
          path: ":id",
          element: <CarClassesPage />,
        },
      ],
    },
    {
      path: "mypayments/",
      element: <MyPaymentsPage />,
      children: [
        {
          path: ":id",
          element: <CarClassesPage />,
        },
      ],
    },
    {
      path: "carclasses/",
      element: <CarClassesPage />,
      children: [
        {
          path: ":id",
          element: <CarClassesPage />,
        },
      ],
    },
    {
      path: "moderators/",
      element: <ModeratorsPage />,
      children: [
        {
          path: ":id",
          element: <CarClassesPage />,
        },
      ],
    },
    {
      path: "driverpayments/",
      element: <DriverPaymentPage />,
      children: [
        {
          path: ":id",
          element: <CarClassesPage />,
        },
      ],
    },
  ]);

  return element;
};

export default ProjectRoutes;
