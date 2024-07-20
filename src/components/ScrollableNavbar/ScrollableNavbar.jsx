import React, { useState } from 'react';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from 'react-router-dom';
import "./ScrollableNavbar.css";

export default function ScrollableNavbar() {
    const [visibleStart, setVisibleStart] = useState(0);
    const navigate = useNavigate();
    const visibleCount = 7;

    //call backend for items
    const items = ["Sale","Ladies","Men","Baby","Kids","Sport","Jewellery","MakeUp","Games","SkinCare","Sustanability",];

    const visibleItems = items.slice(visibleStart, visibleStart + visibleCount);

    const handlePrevClick = () => {
     if (visibleStart > 0) {
      setVisibleStart(visibleStart - 1);
     }
    };
    
    const handleNextClick = () => {
     if (visibleStart < items.length - visibleCount) {
      setVisibleStart(visibleStart + 1);
     }
    };

    const handleItemClick = (item) => {
        item=="Sustanability" ? navigate('/Sustanability') : navigate(`/?type=${item}`)
    };

    return (
        <div className="scrollable-navbar">
              <WestIcon onClick={handlePrevClick} style={{ color: visibleStart === 0 ? 'grey' : 'black' }}/>
                {visibleItems.map((item, index) => (
                    <div key={index} onClick={() => handleItemClick(item)} style={{ cursor: 'pointer' }}>
                        {item}
                        </div>
                    ))}
             <EastIcon onClick={handleNextClick} style={{ color: visibleStart >= items.length - visibleCount ? 'grey' : 'black' }}/>
        </div>
    );
}
