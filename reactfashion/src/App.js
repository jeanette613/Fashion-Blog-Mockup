import "./style.css";

import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main"
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </div>
    );
}