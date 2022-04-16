import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from './App.js';
import "./style.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <StrictMode>

        <App />

    </StrictMode>,
    document.getElementById("root")
);