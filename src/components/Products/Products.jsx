import "./Products.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Navigation, Pagination} from 'swiper/modules';


export default function Products(){
    const [ImagesList, setImagesList] = useState([]);

    const handleProductItem = (index) => {
        navigate(`/${type}/${index}/product-page`);
    }

    const { type } =useParams()
    const navigate=useNavigate();    
    
    const ImageCardFavouriteIcon = {
        width: "2rem",
        height: "2rem",
        stroke: "#ffffff",
        strokeWidth: 1,
    }

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


    if(ImagesList.length==0){
        getImages();
    }


    return (
        <div className="products-container">
            { 
              ImagesList.map((ImgObj, index) => (
               <div key={index} className="product-item">
                 <div className="product-image" onClick={ () => handleProductItem(index)}>
                  <Swiper
                   pagination={{clickable:true,}}
                   slidesPerView={1}
                   spaceBetween={15}
                   loop={true}
                   mousewheel={true}
                   cssMode={true}
                   modules={[Pagination, Navigation]}className="swiper-container">
                   <SwiperSlide><img src={ImgObj.url}/>
                   </SwiperSlide>
                   <SwiperSlide><img src={ImgObj.url}/></SwiperSlide>
                   <SwiperSlide><img src={ImgObj.url}/></SwiperSlide>
                   </Swiper>
                   
                  </div>
                 <div className="product-detail" onClick={ () => handleProductItem(index)}><p>{ImgObj.detail}</p></div>
                 <div className="price-icon-container">
                 <div className="product-price">Rs.{ImgObj.price}</div>
                 <div className="product-favourite-icon">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ><defs><path className="outside" d="M17.376 1C21.476 1 24 3.578 24 7.807c0 1.628-.961 3.63-2.696 5.953-.89 1.192-1.97 2.446-3.196 3.737a71.66 71.66 0 0 1-3.987 3.865 71.495 71.495 0 0 1-1.816 1.58l-.305.251-.305-.252c-.093-.076-.264-.22-.503-.424-.396-.34-.838-.727-1.313-1.155a71.66 71.66 0 0 1-3.987-3.865c-1.227-1.291-2.305-2.545-3.196-3.737C.961 11.437 0 9.435 0 7.807 0 3.578 2.524 1 6.624 1c2.08 0 4.23 1.562 5.376 3.58C13.145 2.56 15.294 1 17.376 1zM12 21.79l.18-.154c.383-.329.812-.704 1.273-1.12a69.488 69.488 0 0 0 3.865-3.746c1.18-1.244 2.217-2.448 3.068-3.587 1.593-2.132 2.462-3.943 2.462-5.286 0-3.64-2.063-5.747-5.565-5.747-1.927 0-4.049 1.768-4.842 3.843L12 7.145l-.44-1.152C10.765 3.919 8.642 2.15 6.716 2.15c-3.502 0-5.565 2.107-5.565 5.747 0 1.343.87 3.154 2.462 5.286.85 1.14 1.887 2.343 3.068 3.587a69.488 69.488 0 0 0 3.865 3.747A69.313 69.313 0 0 0 12 21.789z" id="outside"/></defs><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path className="inside" d="M17.376 1C21.476 1 24 3.556 24 7.748c0 1.614-.961 3.598-2.696 5.9-.89 1.183-1.97 2.425-3.196 3.705a71.38 71.38 0 0 1-3.987 3.832 71.307 71.307 0 0 1-1.816 1.566L12 23l-.305-.25a71.307 71.307 0 0 1-1.816-1.565 71.38 71.38 0 0 1-3.987-3.832c-1.227-1.28-2.305-2.522-3.196-3.704C.961 11.346 0 9.362 0 7.748 0 3.556 2.524 1 6.624 1c2.08 0 4.23 1.548 5.376 3.548C13.145 2.548 15.294 1 17.376 1z" fill="none" fillRule="nonzero"/><use fill="#222" xlinkHref="#outside" /></g></svg>
                   </div>
                </div>
               </div>
            ))}
        </div>
    )
}