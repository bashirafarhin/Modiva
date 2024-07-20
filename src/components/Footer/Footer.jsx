import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from "react";

export default function Footer() {
    const [ openRow1, setOpenRow1 ] = useState(false);
    const [ openRow2, setOpenRow2 ] = useState(false);
    const [ openRow3, setOpenRow3 ] = useState(false);
    const [ openRow4, setOpenRow4 ] = useState(false);

    return (
        <footer className="footer">
            <div className="footer-links">
                <div className="footer-column">
                    <p className="footer-column-heading">Contact Hub</p>
                    <p>Store locator</p>
                    <p>Contact Us</p>
                    <p>Book an Appointment</p>
                </div>
                <div className="footer-column">
                    <p className="footer-column-heading">Customer Care</p>
                    <p>Services</p>
                    <p>FAQ</p>
                </div>
                <div className="footer-column">
                    <p className="footer-column-heading">About Company</p>
                    <p>Brand Protection</p>
                    <p>Ethics & Compliance</p>
                    <p>People & Careers</p>
                    <p>Accessibility</p>
                    <p>Fondazione Company</p>
                </div>
                <div className="footer-column">
                    <p className="footer-column-heading">Privacy & Legal</p>
                    <p>Cookies Settings</p>
                    <p>Privacy center</p>
                    <p>Terms of use</p>
                </div>
            </div>

            {/* when screen size is less the footer links will be shown in this way */}
            <div className="small-footer">
                <div className="small-footer-row-container" onClick={() => setOpenRow1(!openRow1)}>
                    <div className={`small-footer-row ${openRow1 ? 'color-footer-red' : ''}`}>
                        <div className="footer-column-heading">Contact Hub</div>
                        <div className="small-footer-button-icon">{ openRow1? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon className="footer-down-icon"/>}</div>
                    </div>
                    { openRow1 &&
                        <div className="small-footer-column">
                        <p>Store locator</p>
                        <p>Contact Us</p>
                        <p>Book an Appointment</p>
                        </div>
                    }
                </div>

                <div className="small-footer-row-container" onClick={() => setOpenRow2(!openRow2)}>
                    <div className={`small-footer-row ${openRow2 ? 'color-footer-red' : ''}`}>
                        <div className="footer-column-heading">Customer Care</div>
                        <div className="small-footer-button-icon">{ openRow2? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon className="footer-down-icon"/>}</div>
                    </div>
                    { openRow2 &&
                        <div className="small-footer-column">
                        <p>Services</p>
                        <p>FAQ</p>
                        </div>
                    }
                </div>

                <div className="small-footer-row-container" onClick={() => setOpenRow3(!openRow3)}>
                    <div className={`small-footer-row ${openRow3 ? 'color-footer-red' : ''}`}>
                        <div className="footer-column-heading">About Company</div>
                        <div className="small-footer-button-icon">{ openRow3? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon className="footer-down-icon"/>}</div>
                    </div>
                    { openRow3 &&
                        <div className="small-footer-column">
                        <p>Brand Protection</p>
                        <p>Ethics & Compliance</p>
                        <p>People & Careers</p>
                        <p>Accessibility</p>
                        <p>Fondazione Company</p>
                        </div>
                    }
                </div>

                <div className="small-footer-row-container" onClick={() => setOpenRow4(!openRow4)}>
                    <div className={`small-footer-row ${openRow4 ? 'color-footer-red' : ''}`}>
                        <div className="footer-column-heading">Privacy & Legal</div>
                        <div className="small-footer-button-icon">{ openRow4? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon className="footer-down-icon"/>}</div>
                    </div>
                    { openRow4 &&
                        <div className="small-footer-column">
                        <p>Cookies Settings</p>
                        <p>Privacy center</p>
                        <p>Terms of use</p>
                        </div>
                    }
                </div>

            </div>

            <div className="brand-social-media-container">
                <div className="brand-social-media-icons">
                      <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer" className="icon-link">
                <InstagramIcon />
            </a>
            <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer" className="icon-link">
                <XIcon />
            </a>
            <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FacebookIcon />
            </a>
            <a href="https://www.youtube.com/login" target="_blank" rel="noopener noreferrer" className="icon-link">
                <YouTubeIcon />
            </a>
            <a href="https://telegram.org/login" target="_blank" rel="noopener noreferrer" className="icon-link">
                <TelegramIcon />
            </a>
                </div>
            </div>
            <div className="brand-copyright">
            <p>©</p>
            <p>{new Date().getFullYear()}</p>
            <p>copyright</p>
            </div>
        </footer>
    );
}