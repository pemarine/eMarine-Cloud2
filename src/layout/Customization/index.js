import PropTypes from 'prop-types';

// material-ui
import { Box, Typography } from '@mui/material';

// third-party


// ==============================|| LIVE CUSTOMIZATION ||============================== //

function CustomTabPanel({ children, value, index, ...other }) {
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    value: PropTypes.number,
    index: PropTypes.number
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

a11yProps.propTypes = {
    index: PropTypes.number
};

const Customization = () => {


    return (
        <>
            {/* toggle button */}
            

           
        </>
    );
};

export default Customization;
