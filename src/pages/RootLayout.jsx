import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header.jsx"
import Footer from "../components/Footer/Footer.jsx"
import { Link } from "react-router-dom";
import "./RootLayout.css"

export default function RootLayout() {
    <Link to="/"></Link>
    return (
        <div className="root-layout">
        <Header/>
        <Outlet/>
        <Footer/>
        </div>

    );
}