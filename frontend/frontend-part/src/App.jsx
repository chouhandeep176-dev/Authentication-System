import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  authFailure,
  setUserData,
} from "./features/user slice/userSlice.js";
import Layout from "./components/Layout/Layout.jsx";
import Profile from "./components/Layout/Profile.jsx";
import Home from "./components/Layout/Home.jsx";

import AuthLayout from "./components/AuthLayout.jsx";
import LoginForm from "./components/login-form/LoginForm.jsx";
import Signup from "./components/Signup.jsx";

import PublicRoute from "./components/Route guards/PublicRoute.jsx";
import ProtectedRoute from "./components/Route guards/ProtectedRoute.jsx";

import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

import { apiFetch } from "../utils/apiFetch.jsx";

// apply router -->
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      }, //todo: needs loader
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: (
          <PublicRoute>
            <LoginForm />
          </PublicRoute>
        ),
      },
      {
        path: "login",
        element: (
          <PublicRoute>
            <LoginForm />
          </PublicRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <PublicRoute>
            <Signup />
          </PublicRoute>
        ),
      }, //todo: needs loader
    ],
  },
]);

function App() {
  const [loading, setLoading] = useState(true);

  const { authError } = useSelector((state) => state.userSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await apiFetch(
          `${import.meta.env.VITE_API_URL}/user/profile`,
          dispatch,
        );

        if (!res) {
          setLoading(false);
          return;
        }

        const resdata = await res.json();

        if (!res.ok || !resdata.success) {
          dispatch(authFailure(resdata.message));
          return;
        }

        dispatch(setUserData(resdata.data));

        //? logout user after token cookie expires -->
        const interval = setInterval(
          () => {
            apiFetch(`${import.meta.env.VITE_API_URL}/user/profile`, dispatch);
          },
          15 * 60 * 1000,
        );

         return () => {
           if (interval) clearInterval(interval);
         };
      } catch (err) {
        console.log("error : ", err);
        toast.error("unknown error occured !");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
