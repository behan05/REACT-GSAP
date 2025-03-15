import reactDOM from 'react-dom/client';
import App from "./App";
import "./styles/index.css";
import { ThemeContextProvider } from './themeContext/ThemeContext';


reactDOM.createRoot(document.getElementById("root")).render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
)