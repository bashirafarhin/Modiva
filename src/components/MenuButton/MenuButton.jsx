import "./MenuButton.css";
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useRef, useEffect } from "react";
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from "react-router-dom"
const obj1={
    imgUrl : "/button/Sale1.avif",
    buttonType : "Sale"
}
const obj2={
    imgUrl : "/button/Ladies1.avif",
    buttonType : "Ladies"
}
const obj3={
    imgUrl : "/button/Men1.avif",
    buttonType : "Men"
}
const obj4={
    imgUrl : "/button/Baby1.avif",
    buttonType : "Baby"
}
const obj5={
    imgUrl : "/button/Kids1.avif",
    buttonType : "Kids"
}
const obj7={
    imgUrl : "/button/Sport1.avif",
    buttonType : "Sport"
}
const obj8={
    imgUrl : "/button/Sustainability1.avif",
    buttonType : "Sustanability"
}

let buttonTypes=[obj1,obj2,obj3,obj4,obj5,obj7,obj8];



export default function MenuButton() {
    const navigate=useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleClick = (type) => {
        setMenuOpen(false);
        navigate(`/${type}/shop-by-products`);
    }

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
                <MenuIcon fontSize="large" onClick={() => setMenuOpen(true)}/>
            <div className={`menu-button ${menuOpen ? 'open' : ''}`} ref={menuRef}>
                <div className="menu-button-container">
                    {
                        buttonTypes.map((button,ind) => {
                           return <div key={ind} className="menu-button-type" onClick={ () => handleClick(button.buttonType) }>
                            <div className="menu-button-type-image"><img src={button.imgUrl} /></div>
                            <div className="menu-button-type-text">{button.buttonType}</div>
                            <div className="menu-button-type-icon"><EastIcon/></div>
                            </div>
                        })
                    }
                    <div className="menu-button-type">Customer Servie</div>
                    <div className="menu-button-type">Newsletter</div>
                    <div className="menu-button-type">Find a Store</div>
                    <div className="menu-button-type">Download Android</div>
                    <div className="menu-button-type">Download iOS</div>
                                        
                </div>
            </div>
        </>
    );
}