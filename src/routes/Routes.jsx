import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "./pages/Home";

const RoutePage = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Home />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
};

export default RoutePage;
