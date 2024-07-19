import "./Header.css"
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import SearchIcon from '@mui/icons-material/Search'
import ScrollableNavbar from "../ScrollableNavbar/ScrollableNavbar"
import Logo from "../Logo/Logo"
import MenuButton from "../MenuButton/MenuButton"
import BasicMenu from "../BasicMenu/BasicMenu"
import SignInButton from "../SignInButton/SignInButton"
import { useNavigate } from "react-router-dom"

export default function Header() {
    const navigate = useNavigate();
    const headerShopIcon = {
        width: "2rem",
        height: "2rem",
        stroke: "#ffffff",
        border: "none",
        strokeWidth: 1,
    }

    return (
        <>
        <div className="header">
        <nav className="navbar bottom">
            <div className="header-service">
                <p>Customer Service</p>
                <p>Newsletter</p>
                <p>Find a Store</p>
                <BasicMenu/>

            </div>
            <div className="header-menu-button"><MenuButton/></div>
            <div className="header-logo">
                <Logo/>
            </div>
            <div className="header-shop">
                <div className="header-shop-icons">
                    <SignInButton/>
                </div>
                <div className="header-shop-icons" onClick={ () => navigate('/Favourites')} >
                    <div><FavoriteBorderIcon sx={headerShopIcon}/></div>
                    {/* <div className="header-shop-text">Favourites</div> */}
                </div>
                <div className="header-shop-icons" onClick={ () => navigate('/ShoppingCart')}>
                    <div><ShoppingBagOutlinedIcon sx={headerShopIcon}/></div>
                    {/* <div className="header-shop-text">Shopping</div> */}
                </div>
                <div className="header-shop-icons">
                    <div><SearchIcon sx={headerShopIcon}/></div>
                    {/* <div className="header-shop-text">Search</div> */}
                </div>
            </div>
        </nav>
        <div className="header-scrollable-navbar">
            <ScrollableNavbar/>
        </div>
        </div>
        </>
    );
}