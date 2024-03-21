import React from 'react';
import PopupState, { bindPopover, bindHover } from 'material-ui-popup-state';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../src/index.css';

function HelpDrawer({ children, anchor = 'bottom' }) {
    const items = [
        { body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { body: 'This is the body text for item 2.' },
        { body: 'This is the body text for item 3.' },
        { body: 'This is the body text for item 4.' },
        { body: 'This is the body text for item 5.' },
        { body: 'This is the body text for item 6.' },
        { body: 'This is the body text for item 7.' },
        { body: 'This is the body text for item 8.' },
    ];

    return (
        <PopupState variant="popover" popupId="help-popover">
            {(popupState) => (
                <div style={{ position: 'fixed', bottom: 0, right: 0, margin: '16px' }}>
                    <IconButton
                        {...bindHover(popupState)}
                        className="help-button"
                        sx={{
                            '&:hover': { backgroundColor: '#5F259E' }, // Change hover background color
                            '&:focus': { backgroundColor: '#5F259E' }, // Change focus background color
                            backgroundColor: 'white', // Set background color to white
                            color: '#5F259E', // Set icon color
                        }}
                    >
                        <HelpIcon />
                    </IconButton>
                    <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        sx={{
                            '& .MuiPopover-paper': {
                                backgroundColor: '#5F259E', // Customize the background color
                                borderRadius: '16px', // Rounded corners
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow for depth
                                padding: '16px', // Add padding inside the popover
                            },
                        }}
                        onMouseLeave={popupState.close} // Close the popover when the mouse leaves the popover area
                    >
                        <Box className="drawer-container" sx={{ padding: '16px', backgroundColor: '#5F259E' }}>
                            <Typography variant="h6" className="drawer-title" sx={{ marginBottom: '16px', color: '#FFFFFF' }}>Helps and Tips</Typography>
                            <Box className="flex-container" style={{ flexDirection: 'column' }} sx={{ gap: '16px' }}>
                                {items.map((item, index) => (
                                    <Box key={index} className="flex-item" sx={{ padding: '8px', borderRadius: '4px', backgroundColor: '#7A35B9', color: '#FFFFFF', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', transition: '0.3s' }}>
                                        <Typography variant="body1">
                                            {item.body}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}

export default HelpDrawer;
