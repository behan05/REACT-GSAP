import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import Support from "./components/Support";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/support", element: <Support /> },

            {
                path: "/profile",
                element: <Profile />,
                children: [
                    {
                        path: "setting/:id",
                        element: <Setting />
                    }
                ]
            },

        ]
    }
])