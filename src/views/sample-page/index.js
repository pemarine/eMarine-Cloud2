// material-ui
//import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //



// material-ui
import { Grid } from '@mui/material';

// project imports
import MultipleBreakPoints from './MultipleBreakPoints';
import SpacingGrid from './SpacingGrid';
import ComplexGrid from './ComplexGrid';
import AutoGrid from './AutoGrid';
import ColumnsGrid from './ColumnsGrid';
import NestedGrid from './NestedGrid';
import { gridSpacing } from 'store/constant';

import cinderella from '../../assets/images/vessels/viking-line_cinderella.jpg';
import { Box } from '@mui/system';

// ===============================|| GRID SYSTEM||=============================== //
import { styled } from '@mui/system';
import vikingLine from '../../assets/images/logos/viking-line.png'; // replace with the actual path to your logo


const StyledMainCard = styled(MainCard)({
    position: 'relative',
    transition: 'transform 0.5s',

    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'black',
        opacity: 0,
        transition: 'opacity 0.3s',


    },
    '&:hover': {
        transform: 'scale(1.01)',
    },
    '&:hover::before': {
        opacity: 0.15,
    },
});


const SamplePage = () => {

    return (
        <Grid container spacing={gridSpacing}>
         <Grid item xs={12} md={4}>
                <StyledMainCard 
                    title={
                        <Box display="flex" alignItems="center">
                            <img src={vikingLine} alt="logo" width={135} style={{ marginRight: '10px' }} />
                            <span>- M/S CINDERELLA</span>
                        </Box>
                    }
                    style={{ backgroundImage: `url(${cinderella})`, backgroundSize: 'cover' }}
                >
                    <Box height={200}>
                    </Box>
                </StyledMainCard>
            </Grid>
        <Grid item xs={12} md={4}>
            <MainCard title="Basic Grid" style={{ backgroundImage: `url(${cinderella})`, backgroundSize: 'cover' }}>
                <Box height={200}>
                </Box>
            </MainCard>
        </Grid>
        <Grid item xs={12} md={4}>
            <MainCard title="Basic Grid" style={{ backgroundImage: `url(${cinderella})`, backgroundSize: 'cover' }}>
                <Box height={200}>
                </Box>
            </MainCard>
        </Grid>
        <Grid item xs={12} md={4}>
            <MainCard title="Multiple Breakpoints">
                <MultipleBreakPoints />
            </MainCard>
        </Grid>
        <Grid item xs={12} md={4}>
            <MainCard title="Spacing Grid">
                <SpacingGrid />
            </MainCard>
        </Grid>
        <Grid item xs={12} md={4}>
            <MainCard title="Complex Grid">
                <ComplexGrid />
            </MainCard>
        </Grid>
        <Grid item xs={12} md={4}>
            <MainCard title="Auto Grid">
                <AutoGrid />
            </MainCard>
        </Grid>
        <Grid item xs={12} md={4}>
            <MainCard title="Column Grid">
                <ColumnsGrid />
            </MainCard>
        </Grid>
        <Grid item xs={12}>
            <MainCard title="Nested Grid">
                <NestedGrid />
            </MainCard>
        </Grid>
    </Grid>

    );
};

export default SamplePage;
