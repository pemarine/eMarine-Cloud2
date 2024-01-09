import PropTypes from 'prop-types';

// material-ui
import { Button, CardActions, CardMedia, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// assets
import FlagNorway from 'assets/images/widget/norway.png';
import FlagSweden from 'assets/images/widget/sweden.png';
import FlagMarshall from 'assets/images/widget/marshall.png';
import FlagPortugal from 'assets/images/widget/portugal.png';
import FlagFinland from 'assets/images/widget/finland.png';
import FlagMalta from 'assets/images/widget/malta.png';


// table data
function createData(image, subject, dept, date) {
    return { image, subject, dept, date };
}
const rows = [
    createData(FlagNorway, 'VIKING OCEAN CRUISES', 'M/S VIKING SKY', '56.23%'),
    createData(FlagSweden, 'VIKING LINE', 'M/S GARIELLA', '25.23%'),
    createData(FlagMarshall, 'ARDMORE', 'M/S SEAFOX', '12.45%'),
    createData(FlagPortugal, 'TRANSFENICA', 'M/S CORONA SEA', '8.65%'),
    createData(FlagSweden, 'ECKERÖ-LINE', 'M/S ECKERÖ', '3.56%'),
    createData(FlagFinland, 'GODBY SHIPPING', 'M/S MISIDA', '12.45%'),
    createData(FlagMalta, 'WALLENIUS WILHELMSEN', 'M/S TUGELA', '25.23%'),
    createData(FlagSweden, 'DESTINATION GOTLAND', 'M/S DROTTEN', '12.45%'),
    createData(FlagSweden, 'SILJA LINE', 'M/S SYMPHONY', '8.65%'),
];

// =========================|| DASHBOARD ANALYTICS - LATEST CUSTOMERS TABLE CARD ||========================= //

const LatestCustomerTableCard = ({ title }) => (
    <MainCard title={title} content={false}>
        <PerfectScrollbar style={{ height: 600, padding: 0 }}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>FLAG</TableCell>
                            <TableCell>SHIPOWNERS</TableCell>
                            <TableCell>VESSEL</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow hover key={index}>
                                <TableCell>
                                    <CardMedia component="img" image={row.image} title="image" sx={{ width: 30, height: 'auto' }} />
                                </TableCell>
                                <TableCell>{row.subject}</TableCell>
                                <TableCell>{row.dept}</TableCell>
                               
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </PerfectScrollbar>

        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button variant="text" size="small">
                View all Latest Customers
            </Button>
        </CardActions>
    </MainCard>
);

LatestCustomerTableCard.propTypes = {
    title: PropTypes.string
};

export default LatestCustomerTableCard;
