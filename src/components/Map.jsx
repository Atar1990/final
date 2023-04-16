import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, MarkerClusterer } from '@react-google-maps/api';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import CountrySelect from './SelectComp';


const containerStyle = {
    width: '380px',
    height: '450px',
    borderRadius: '10px'

};

const center = { lat: -37.765015, lng: 145.133858 }

const locations = [
    { lat: -31.56391, lng: 147.154312 },
    { lat: -33.718234, lng: 150.363181 },
    { lat: -33.727111, lng: 150.371124 },
    { lat: -33.848588, lng: 151.209834 },
    { lat: -33.851702, lng: 151.216968 },
    { lat: -34.671264, lng: 150.863657 },
    { lat: -35.304724, lng: 148.662905 },
    { lat: -36.817685, lng: 175.699196 },
    { lat: -36.828611, lng: 175.790222 },
    { lat: -37.75, lng: 145.116667 },
    { lat: -37.759859, lng: 145.128708 },
    { lat: -37.765015, lng: 145.133858 },
    { lat: -37.770104, lng: 145.143299 },
    { lat: -37.7737, lng: 145.145187 },
    { lat: -37.774785, lng: 145.137978 },
    { lat: -37.819616, lng: 144.968119 },
    { lat: -38.330766, lng: 144.695692 },
    { lat: -39.927193, lng: 175.053218 },
    { lat: -41.330162, lng: 174.865694 },
    { lat: -42.734358, lng: 147.439506 },
    { lat: -42.734358, lng: 147.501315 },
    { lat: -42.735258, lng: 147.438 },
    { lat: -43.999792, lng: 170.463352 },
]

const options = {
    imagePath: 'https://placehold.co/600x40'
}

function createKey(location) {
    return location.lat + location.lng;
}

function Map(props) {
    const [map, setMap] = React.useState(null);
    const [mapFields, setMapFields] = useState({
        countryName: '',
        countryMainLand: '',
    });

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBilylcKkzkj1q9WF1klt1564bXNR2NIQE"
    })

    const onLoad = React.useCallback(function callback(map_) {
        setMap(map_)
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, []);

    const countryChanged = (countryName) => {
        console.log(countryName);
        setMapFields({
            countryName
        })
    }

    return isLoaded ? (
        <>
            <Grid container spacing={10}>
                <Grid item xs={6} md={6}>
                    <img className="App-logo" src="logo.png" alt="sad"
                        style={{
                            width: 100,
                            height: 100,
                            marginTop: -108,
                            marginBottom: 100
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <Avatar className='User-Photo'
                        alt="Remy Sharp"
                        src="userPhoto.jpeg"
                        sx={{ width: 80, height: 80 }}
                    />
                </Grid>
            </Grid>

            <CountrySelect onChange={countryChanged} />

            <br />

            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={6}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <MarkerClusterer options={options}>
                    {(clusterer) =>
                        locations.map((location) => (
                            <Marker key={createKey(location)} position={location} clusterer={clusterer} />
                        ))
                    }
                </MarkerClusterer>
            </GoogleMap>

        </>
    ) : <></>
}

export default React.memo(Map)