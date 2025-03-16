import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home"
import Counter from './components/Counter';
import ErrorPage from './components/ErrorPage';
import Form from './components/Form';
import Todo from "./components/Todo";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/form", element: <Form /> },
      { path: "/todo", element: <Todo /> },
      { path: "/counter", element: <Counter /> },
      { path: "*", element: <ErrorPage /> },
    ]
  }
]);