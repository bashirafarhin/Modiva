import "./ProductPage.css";
import { useParams, useNavigate } from "react-router-dom";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState, useEffect } from "react";

export default function ProductPage() {
    const [ImagesList, setImagesList] = useState([]);
    const [openDesc, setOpenDesc] = useState(false);
    const [openMaterial, setOpenMaterial] = useState(false);
    const [openCaring, setOpenCaring] = useState(false);
    const { type, index } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getImages = async () => {
            try {
                let importedModule;
                switch (type) {
                    case 'Ladies':
                        importedModule = await import("../Data/Ladies.js");
                        break;
                    case 'Men':
                        importedModule = await import("../Data/Men.js");
                        break;
                    case 'Kids':
                        importedModule = await import("../Data/Kids.js");
                        break;
                    case 'Baby':
                        importedModule = await import("../Data/Baby.js");
                        break;
                    case 'Games':
                        importedModule = await import("../Data/Games.js");
                        break;
                    case 'Jewellery':
                        importedModule = await import("../Data/Jewellery.js");
                        break;
                    case 'MakeUp':
                        importedModule = await import("../Data/MakeUp.js");
                        break;
                    case 'SkinCare':
                        importedModule = await import("../Data/SkinCare.js");
                        break;
                    case 'Sport':
                        importedModule = await import("../Data/Sport.js");
                        break;
                    default:
                        navigate('/');
                        return;
                }
                setImagesList(importedModule.default);
            } catch (error) {
                navigate('/');
            }
        };

        getImages();
    }, [type, index, navigate]);


    const obj=ImagesList[index];
    if (!obj) {
        return <div>Loading...</div>; // Show loading state until data is fetched
    }
    const images = [obj.url, obj.url, obj.url, obj.url];

    return (
        <>
        <div className="prod-container">
            <div className="prod-product">
                 <div className="prod-images">
                    {
                    images.map((url, idx) => {
                        return <div key={idx} className="prod-image">
                            <img src={url} alt="product" />
                        </div>
                    })
                    }
                 </div>
                 <div className="prod-all-details">
                    <div className="prod-details">
                        <h1>{obj.detail}</h1>
                        <div className="prod-price">
                            <div className="price">Rs. {obj.price}.0</div>
                            <div className="taxes">Price inclusive of all taxes</div>
                        </div>
                        <div className="text-colour">Colour</div>
                        <div className="prod-colours">
                            <div className="blue" style={{backgroundColor: "blue"}}></div>
                            <div className="black" style={{backgroundColor: "black"}}></div>
                            <div className="yellow" style={{backgroundColor: "#AA9586"}}></div>
                        </div>
                        <div className="text-size">Size</div>
                        <div className="prod-sizes">
                            <div>XXS</div>
                            <div>XS</div>
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                        </div>
                        <div className="add-to-cart-button">
                            Add to Cart
                        </div>
                        <div className="delievery-details">
                            <div><LocalShippingOutlinedIcon/></div>
                            <div>Delievery and payment</div>
                        </div>
                        <div className="delievery-timing">
                            <div><AccessTimeIcon/></div>
                            <div>Delivery Time : 2-7 days</div>
                        </div>

                        <div className="details-for-user">
                            <div className="desc Row" onClick={() => setOpenDesc(!openDesc)}>
                            <div className="heading">Description</div>
                            <div className="heading-icon">{ openDesc ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon className="row-down"/>}</div>
                            </div>
                            { openDesc && <div>{obj.description}</div> }
                        
                            <div className="material Row" onClick={() => setOpenMaterial(!openMaterial)}>
                            <div className="heading">Materials</div>
                            <div className="heading-icon">{ openMaterial ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon className="row-down"/>}</div>
                            </div>
                            { openMaterial && <div>{obj.material}</div> }
                       
                            <div className="caring Row" onClick={() => setOpenCaring(!openCaring)}>
                            <div className="heading">Care guide</div>
                            <div className="heading-icon">{ openCaring ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon className="row-down"/>}</div>
                            </div>
                            { openCaring && <div>{obj.careGuide}</div> }
                        </div>
                        
                    </div>
                 </div>
            </div>
        </div>
        </>
    );
}
