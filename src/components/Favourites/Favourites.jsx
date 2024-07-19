import { useNavigate } from "react-router-dom"
import "./Favourites.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Favourites(){
    const navigate=useNavigate();

    const handleClick = async() => {
        navigate('/');
    }
    return (
        <>

        <div className="fav-container">
            <div className="fav-heading"><h1>Favourites</h1></div>
            <div className="fav-text">
                <p>
                Want to save the items that you love? Just click on the heart symbol beside the item and it will show up here.
                </p>
            </div>
            <div className="fav-button" onClick={handleClick}>
                <h3>Browse now</h3>
            </div>
            <div className="fav-shopping-cart-icon">
                <ShoppingCartOutlinedIcon style={{fontSize: "10rem"}}/>
            </div>
        </div>
        
        </>
    )
}