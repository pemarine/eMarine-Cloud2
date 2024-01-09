// material-ui
import { Grid, Box } from '@mui/material';



// project-import
import MapContainerStyled from 'ui-component/third-party/map/MapContainerStyled';

import { GoogleMap, LoadScript } from '@react-google-maps/api';





const mapConfiguration = {
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    center: { lat: 50, lng:10},
    zoom: 4
}

// ==============================|| MAP ||============================== //
const Map = () => {
    const mapStyles = [
        {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [
                { color: "#f7f7f7" } // white land
            ]
        },
        {
            featureType: "water",
            stylers: [
                { color: "#80e4ff" }, // bright blue water
            ]
        },
        {
            featureType: "administrative.locality",
            elementType: "labels",
            stylers: [
                { visibility: "off" } // hide city labels
            ]
        },
        {
            featureType: "road",
            stylers: [
                { visibility: "off" } // hide roads
            ]
        }
    ];

    return (
        <Grid container spacing={0}>
            <Box width="100vw">
                <Grid item xs={12} md={12}>
                    <MapContainerStyled style={{ height: '75vh' }}>
                        <LoadScript googleMapsApiKey={mapConfiguration.googleMapsApiKey}>
                            <GoogleMap
                                mapContainerStyle={{ width: '100%', height: '100%' }}
                                center={mapConfiguration.center}
                                zoom={mapConfiguration.zoom}
                                options={{// set the custom {map styleoptions={{ 
                                    styles: mapStyles,
                                    streetViewControl: false // This line disables the Street View control
                                }}
                            />
                        </LoadScript>
                    </MapContainerStyled>
                </Grid>
                {/* ... other grid items */}
            </Box>
        </Grid>
    );
};

export default Map;
