import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel'; // Import CancelIcon
import HelpIcon from '@mui/icons-material/Help';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../src/index.css';

const drawerWidth = 400; // Constant width for the drawer

function HelpDrawer({ children, anchor = 'bottom' }) {
    const [open, setOpen] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);
    const items = [
        { body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { body: 'This is the body text for item 2.' },
        { body: 'This is the body text for item 3.' },
        { body: 'This is the body text for item 4.' },
        { body: 'This is the body text for item 5.' },
    ];

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handlePrev = () => {
        setSlideIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setSlideIndex(prevIndex => Math.min(prevIndex + 1, items.length - 4));
    };

    return (
        <>
            <button className="help-button" onClick={handleOpen}>
                <HelpIcon />
                Help
            </button>
            <Drawer
                anchor={anchor}
                open={open}
                onClose={handleClose}
                width={drawerWidth}
                variant="persistent"
                modal={false}
            >
                <Box className="drawer-container">
                    <Typography variant="h6" className="drawer-title">Helps and Tips</Typography>
                    <IconButton className="minimize-button" onClick={handleClose}>
                        <CancelIcon />
                    </IconButton>
                    <Box className="flex-container" style={{ flexDirection: (anchor === 'right' || anchor === 'left') ? 'column' : 'row' }}>
                        {items.slice(slideIndex, slideIndex + 4).map((item, index) => (
                            <Box key={index} className="flex-item">
                                <Typography variant="body1">
                                    {item.body}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    <Box className="button-container">
                        <Button variant="outlined" onClick={handlePrev} disabled={slideIndex === 0}>Prev</Button>
                        <Button variant="outlined" onClick={handleNext} disabled={slideIndex >= items.length - 4}>Next</Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}

export default HelpDrawer;
