// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://emarine.se" target="_blank" underline="hover">
            emarine.se
        </Typography>
        <Typography variant="subtitle2" target="_blank" underline="hover">
            &copy; eMarine Engineering Nordic AB
        </Typography>
    </Stack>
);

export default AuthFooter;
