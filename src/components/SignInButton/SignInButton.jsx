import "./SignInButton.css"
import { useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PermIdentityIcon from '@mui/icons-material/PermIdentity'

export default function SignInButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMouseEnter = (event) => {
    setAnchorEl(true);
  };

  const headerShopIcon = {
    width: "2rem",
    height: "2rem",
    stroke: "#ffffff",
    border: "none",
    strokeWidth: 1,
}

  return (
    <>
      <div
        className="sign-in-custom-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <div><PermIdentityIcon sx={headerShopIcon}/></div>
        {/* <div className="header-shop-text">Sign In</div> */}
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{ 
          '& .MuiPaper-root': {
            border: 'none',
            boxShadow: 'none',
            fontSize: 'inherit',
            fontFamily: 'inherit',
            borderRadius: '0',
          }
        }}
      >
        <MenuItem className="sign-in-menu-item" onClick={handleClose}><div className="sign-in-div">Sign in</div></MenuItem>
        <MenuItem className="sign-in-menu-item" onClick={handleClose}>My account</MenuItem>
        <MenuItem className="sign-in-menu-item" onClick={handleClose}>Membership?</MenuItem>
        <MenuItem className="sign-in-menu-item" onClick={handleClose}>Not a member yet? Join here!</MenuItem>
      </Menu>
    </>
  );
}
