import React from 'react';
import PopupState, { bindPopover, bindHover } from 'material-ui-popup-state';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../src/index.css';

const HelpDrawer = () => {
    const items = [
        { body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { body: 'This is the body text for item 2.' },
        { body: 'This is the body text for item 3.' },
    ];

    return (
        <PopupState variant="popover" popupId="help-popover">
            {(popupState) => (
                <div style={{ position: 'fixed', bottom: 0, right: 0, margin: '16px' }}>
                    <IconButton
                        {...bindHover(popupState)}
                        className="help-button"
                        sx={{
                            '&:hover': { backgroundColor: '#5F259E' },
                            '&:focus': { backgroundColor: '#5F259E' },
                            backgroundColor: 'white',
                            color: '#5F259E',
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
                        onMouseLeave={popupState.close}
                        disableScrollLock={true}
                        style={{ pointerEvents: 'none' }}
                    >
                        <Box className="drawer-container" style={{ pointerEvents: 'auto' }}>
                            <Typography variant="h6" className="drawer-title">Helps and Tips</Typography>
                            <Box className="flex-container" style={{ flexDirection: 'column' }}>
                                {items.map((item, index) => (
                                    <Box key={index} className="flex-item">
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
