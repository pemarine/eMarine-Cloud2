import { useEffect, useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    Box,
   
    Typography,
} from '@mui/material';

// project imports

// assets
import TranslateTwoToneIcon from '@mui/icons-material/TranslateTwoTone';
import useConfig from 'hooks/useConfig';

// ==============================|| LOCALIZATION ||============================== //

const LocalizationSection = () => {
    const { locale } = useConfig();

    const theme = useTheme();

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [language, setLanguage] = useState(locale);


    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

 

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    useEffect(() => {
        setLanguage(locale);
    }, [locale]);

    return (
        <>
            <Box
                sx={{
                    ml: 2,
                    [theme.breakpoints.down('md')]: {
                        ml: 1
                    }
                }}
            >
                <Avatar
                    variant="rounded"
                    md={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.mediumAvatar,
                        border: '1px solid',
                        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light,
                        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light,
                        color: theme.palette.primary.dark,
                        transition: 'all .2s ease-in-out',
                        '&[aria-controls="menu-list-grow"],&:hover': {
                            borderColor: theme.palette.primary.main,
                            background: theme.palette.primary.main,
                            color: theme.palette.primary.light
                        }
                    }}
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    color="inherit"
                >
                    {language !== 'en' && (
                        <Typography variant="h5" sx={{ textTransform: 'uppercase' }} color="inherit">
                            {language}
                        </Typography>
                    )}
                    {language === 'en' && <TranslateTwoToneIcon sx={{ fontSize: '1.3rem' }} />}
                </Avatar>
            </Box>

           
        </>
    );
};

export default LocalizationSection;
