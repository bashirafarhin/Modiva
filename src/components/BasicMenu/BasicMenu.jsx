import "./BasicMenu.css"
import { useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        className="custom-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Download
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
            backgroundColor: '#FAF9F8',
            fontSize: 'inherit',
            fontFamily: 'inherit',
            borderRadius: '0',
          }
        }}
      >
        <MenuItem onClick={handleClose}>Download Android</MenuItem>
        <MenuItem onClick={handleClose}>Download iOS</MenuItem>
      </Menu>
    </div>
  );
}
