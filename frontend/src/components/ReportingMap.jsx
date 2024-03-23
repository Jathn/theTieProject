import { GoogleMap, useLoadScript, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

const ReportingMap = (props) => {
    const googleAPIKey = import.meta.env.VITE_GOOGLE_API_KEY

    const libraries = ['places', 'visualization', 'geometry', 'drawing'];
    const center = props.center;
    const [marker_pos, setMarkerPos] = useState(center)

    useEffect(() => {
        props.setPointPos(marker_pos)
    }, [marker_pos]);

    const mapContainerStyle = {
        width: props.width + 'vw',
        height: props.height + 'vh',
        
    };

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: googleAPIKey,
        libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (
        <div>
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={center}
            onClick={(e) => setMarkerPos({lat: e.latLng.lat(), lng: e.latLng.lng()})}
        >
        <Marker
            position={marker_pos}
        />
        </GoogleMap>

        </div>
    );
};

export default ReportingMap;