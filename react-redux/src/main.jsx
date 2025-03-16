import reactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from "./Routes";
import { Provider } from "react-redux";
import { store } from './store/store';
import "./styles/index.css";

reactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)