import reactDOM from 'react-dom/client'
import './index.css'
import { router } from "./App";
import { RouterProvider } from 'react-router-dom';

const root = reactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={router} />
)
