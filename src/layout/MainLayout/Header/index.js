// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, useMediaQuery } from '@mui/material';

// project imports
import LAYOUT_CONST from 'constant';
import useConfig from 'hooks/useConfig';
// import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
import MobileSection from './MobileSection';
import ProfileSection from './ProfileSection';
import FullScreenSection from './FullScreenSection';
import NotificationSection from './NotificationSection';

import ThemeCustomization from './Customization'; // adjust the path as needed


import { useDispatch, useSelector } from 'store';
import { openDrawer } from 'store/slices/menu';

// assets
//import { IconMenu2 } from '@tabler/icons-react';

import eMarine_icon_coral from '../../../assets/images/logos/CoralBlue_icon.png';


// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = () => {
    const theme = useTheme();

    const dispatch = useDispatch();
    const { drawerOpen } = useSelector((state) => state.menu);

    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    const { layout } = useConfig();

    return (
        <>
            {/* logo & toggler button */}
            <Box
                
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                   
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
               
                {layout === LAYOUT_CONST.VERTICAL_LAYOUT || (layout === LAYOUT_CONST.HORIZONTAL_LAYOUT && matchDownMd) ? (
                    <Avatar
                        variant="rounded"
                        size="100px"
                        sx={{
                          background: 'transparent',
                       //     ...theme.typography.commonAvatar,
                         //   ...theme.typography.mediumAvatar,
                            overflow: 'hidden',
                            transition: 'all .2s ease-in-out',
                        /* } background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary.light, {*/
                          //  color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
                            '&:hover': {
                             //   background: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
                               // color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.light

                            },
                        }}
                        style={{
                            transform: 'translateX(-10px)',
                        }}
                        onClick={() => dispatch(openDrawer(!drawerOpen))}
                        color="inherit"
                    >
{ /*                    <IconMenu2 stroke={1.5} size="25px"/> */ }
                        <img 
                            src={eMarine_icon_coral} 
                            alt="eMarine_icon_coral" 
                            width="29px" 
                            height="26px"
                            style={{ 
                                transform: 'translateX(-2px)',
                                transition: 'filter 0.3s ease', // Smooth transition
                            }}
                            onMouseOver={(e) => e.currentTarget.style.filter = 'brightness(115%)'} // Brighten on hover
                            onFocus={(e) => e.currentTarget.style.filter = 'brightness(115%)'} // Brighten on focus
                            onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(100%)'} // Reset on mouse out
                            onBlur={(e) => e.currentTarget.style.filter = 'brightness(100%)'} // Reset on blur
/>
                   </Avatar>
                ) : null}
                            <Box sx={{ flexGrow: 1 }} />
{/*}
<Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                    <LogoSection />
                </Box>
{*/}
            </Box>
        

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: 'flex' }}>
                {/* header search */}
                <Box sx={{ margin: 'auto' }}>
                    <SearchSection />
                </Box>
            </Box>
            <Box sx={{ flexGrow: 1 }} />


            {/* theme customization */}
            <ThemeCustomization sx={{ bgcolor: 'transparent', background: 'transparent' }} />
            {/* notification */}
            <NotificationSection />

            {/* full sceen toggler */}
            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                <FullScreenSection />
            </Box>

            {/* profile */}
            <ProfileSection />

            {/* mobile header */}
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <MobileSection />
            </Box>
        </>
    );
};

export default Header;
