import "./Home.css"
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from "react";
import ImageBox from "../ImageBox/ImageBox";
import EastIcon from '@mui/icons-material/East';
import ScrollableNavbar from "../ScrollableNavbar/ScrollableNavbar";

let url1=""
let url2=""
let video=""
let videoText=""

const getImage = (type) => {
if(type=="Sale"){
    url1=`/HomePageImages/Sale/Sale1.jpg`;
    url2=`/HomePageImages/Sale/Sale2.jpg`;
    video=`/Video/Home.mp4`;
    videoText="Fashion that Inspires Confidence";
} else if(type=="Ladies") {
    url1=`/HomePageImages/Ladies/Ladies1.jpg`;
    url2=`/HomePageImages/Ladies/Ladies2.jpg`;
    video=`/Video/Ladies.mp4`;
    videoText="The joy of dressing is an art."
} else if(type=="Men") {
    url1=`/HomePageImages/Men/Men1.jpg`;
    url2=`/HomePageImages/Men/Men2.jpg`;
    video=`/Video/Men.mp4`;
    videoText="Fashion changes, but style endures."
} else if(type=="Baby") {
    url1=`/HomePageImages/Baby/Baby1.jpg`;
    url2=`/HomePageImages/Baby/Baby2.jpg`;
    video=`/Video/Baby.mp4`;
    videoText="Little one, big style."
} else if(type=="Kids") {
    url1=`/HomePageImages/Kids/Kid1.jpg`;
    url2=`/HomePageImages/Kids/Kid2.jpg`;
    video=`/Video/Kids.mp4`;
    videoText="Grow with style."
} else if(type=="Sport") {
    url1=`/HomePageImages/Sport/Sport1.jpg`;
    url2=`/HomePageImages/Sport/Sport2.jpg`;
    video=`/Video/Sports.mp4`;
    videoText="Fit and Fierce"
} else if(type=="Jewellery") {
    url1=`/HomePageImages/Jewellery/Jewellery1.jpg`;
    url2=`/HomePageImages/Jewellery/Jewellery2.jpg`;
    video=`/Video/Jewellery.mp4`;
    videoText="Jewellery is a treasure that lasts from one generation to another."
} else if(type=="MakeUp") {
    url1=`/HomePageImages/MakeUp/MakeUp1.jpg`;
    url2=`/HomePageImages/MakeUp/MakeUp2.jpg`;
    video=`/Video/MakeUp.mp4`;
    videoText="rocking the 'no-makeup' makeup look."
} else if(type=="Games") {
    url1=`/HomePageImages/Games/Games1.jpg`;
    url2=`/HomePageImages/Games/Games2.jpg`;
    video=`/Video/Games.mp4`;
    videoText=" The more you play, the better you get."
} else if(type=="SkinCare") {
    url1=`/HomePageImages/SkinCare/SkinCare1.jpg`;
    url2=`/HomePageImages/SkinCare/SkinCare2.jpg`;
    video=`/Video/SkinCare.mp4`;
    videoText="Skincare is a journey, not a destination."
}
}




function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Home() {
    const [ openButtonContainer,setButtonContainer ] = useState(false)
    const query = useQuery();
    const navigate=useNavigate();
    const type = query.get('type') || 'Sale';
    getImage(type);

    const handleClick = () => {
        if(type=="Sale"){
            navigate(`/Ladies/shop-by-products`);
        } else {
            navigate(`/${type}/shop-by-products`);
        }
    };

    const handleButtonClick = (type) => {
            navigate(`/${type}/shop-by-products`);
    };

    return (
        <div className="home">
            <div className="home-video-container">
                <video src={video} autoPlay loop muted className="home-video"/>
                <div className="home-video-text"><h1>{videoText}</h1></div>
                
            </div>
            <div className="sale-container" >
                <div className="sale-box" onClick={() => setButtonContainer(!openButtonContainer)}>
                <h1>Hurry Up !</h1>
                <h3>Summer Sale ⭐</h3>
                <p>Upto 70% off</p>
                <p>discount on your favourite products</p>
                <div className="sale-button-container">
                    <div onClick={ () => handleButtonClick("Ladies")}>Women</div>
                    <div onClick={ () => handleButtonClick("Men")}>Men</div>
                    <div onClick={ () => handleButtonClick("Jewellery")}>Jewellery</div>
                    <div onClick={ () => handleButtonClick("Sport")}>Sportswear</div>
                    <div onClick={ () => handleButtonClick("Kids")}>Kids</div>
                </div>
                </div>
                { openButtonContainer && <div className="sale-button-container-small-screen">
                    <div className="sale-button-container-small-screen-buttons" onClick={ () => handleButtonClick("Ladies")}>
                        <div>Ladies</div>
                        <div className="sale-button-east-icon"><EastIcon/></div>
                    </div>
                    <div className="sale-button-container-small-screen-buttons" onClick={ () => handleButtonClick("Men")}>
                        <div>Men</div>
                        <div className="sale-button-east-icon"><EastIcon/></div>
                    </div>
                    <div className="sale-button-container-small-screen-buttons" onClick={ () => handleButtonClick("Jewellery")}>
                        <div>Jewellery</div>
                        <div className="sale-button-east-icon"><EastIcon/></div>
                    </div>
                    <div className="sale-button-container-small-screen-buttons" onClick={ () => handleButtonClick("Sport")}>
                        <div>Sportswear</div>
                        <div className="sale-button-east-icon"><EastIcon/></div>
                    </div>
                    <div className="sale-button-container-small-screen-buttons" onClick={ () => handleButtonClick("Kids")}>
                        <div>kids</div>
                        <div className="sale-button-east-icon"><EastIcon/></div>
                    </div>
                    
                    </div>
                }
            </div>
            
            <ImageBox
            onClick={handleClick}
            url={url1}
            heading="New Collection"
            text="Sleek, chic, smart - your perfect style upgrade"
            buttonText="Shop Now"
            />
            
            <ImageBox
            onClick={handleClick}
            url={url2}
            heading="Trending Collection"
            text="Classic tweed and timeless refined layers."
            buttonText="Shop Now"
            />

            {/* <ScrollableNavbar/> */}
        </div>
    );
}

