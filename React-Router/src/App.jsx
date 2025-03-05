import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Home />
            </>
        )
    },
    {
        path: "/about",
        element: (
            <>
                <Header />
                <About />
            </>
        )
    },
    {
        path: "/dashboard",
        element: (
            <>
                <Header />
                <Dashboard />
            </>
        ),
        
        // Nested URL
        children: [
            {
                path: "profile/:id",
                element: <Profile />
            }
        ]
    },
])