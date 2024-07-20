import { useNavigate } from "react-router-dom"
import "./ShoppingCart.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function ShoppingCart(){
    const navigate=useNavigate();

    const handleClick = async() => {
        navigate('/');
    }
    
    return (
        <>

        <div className="cart-container">
            <div className="cart-heading"><h1>Your shopping bag is empty</h1></div>
            <div className="cart-text">
                <p>
                Want to buy the items that you love? Just click on the add to cart option to buy your favourite products.
                </p>
            </div>
            <div className="cart-button" onClick={handleClick}>
                <h3>Browse now</h3>
            </div>
            <div className="cart-shopping-cart-icon">
                <ShoppingCartOutlinedIcon style={{fontSize: "10rem"}}/>
            </div>
        </div>
        
        </>
    )
}