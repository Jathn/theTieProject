import { GoogleMap, useLoadScript, useJsApiLoader, HeatmapLayer, Circle } from '@react-google-maps/api';

const Map = (props) => {
    const googleAPIKey = import.meta.env.VITE_GOOGLE_API_KEY

    const libraries = ['places', 'visualization', 'geometry', 'drawing'];

    const reported_points = props.reported_points;

    const mapContainerStyle = {
        width: props.width + 'vw',
        height: props.height + 'vh',
        
    };

    // Otaniemi coordinates
    const center = {
    lat: 60.1845338527817, // default latitude
    lng: 24.830169630685113, // default longitude
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

    const circles = reported_points.map((point) => {
        var color = '#bbdb44';
        var opacity = 0.2
        if (point.severity === 2) {
            color = '#f7e379'
            opacity = 0.4
        }
        if (point.severity === 3) {
            color = '#f2a134'
        }
        if (point.severity === 4) {
            color = '#e51f1f'
        }

        return (
            <Circle
                key={reported_points.indexOf(point)}
                center={point}
                radius={50}
                options={{
                    strokeColor: color,
                    strokeOpacity: opacity,
                    strokeWeight: 2,
                    fillColor: color,
                    fillOpacity: opacity,
                }}
            />
        );
    });

    return (
        <div>
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={center}
        >
        {circles}
        </GoogleMap>
        </div>
    );
};

export default Map;