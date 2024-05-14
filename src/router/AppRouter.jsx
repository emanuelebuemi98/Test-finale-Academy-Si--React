import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { NotFound } from "../pages/NotFound/NotFound";
import { RegisterPage } from "../pages/Register/RegisterPage";
import { LoginPage } from '../pages/Login/LoginPage';
import { Layout } from "../components/layouts/MainLayout/Layout";
import { AuthContextProvider } from "../contexts/AuthContext/AuthContextProvider";
import { UserAccessPage } from "../pages/UserAccess/UserAccessPage";
import { ProtectedRoute } from '../components/ProtectedRoute';
import { MeteoPage } from '../pages/Meteo/MeteoPage';


export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: (
        <AuthContextProvider>
          <Layout />
        </AuthContextProvider>
      ),
      children: [
        {
          path: "/",
          children: [
            {
              path: "",
              element: <UserAccessPage/>
            },
            {
              path: "home",
              element: <ProtectedRoute><HomePage/></ProtectedRoute>
            },
            {
              path: "meteo",
              element: <ProtectedRoute><MeteoPage/></ProtectedRoute>
            },
            {
              path: "login",
              element: <LoginPage/>
            },
            {
              path: "register",
              element: <RegisterPage/>
            },
          ]
        }
      ]
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return <RouterProvider router={router} />;
};
