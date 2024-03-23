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

    const dark_style = [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }]
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }]
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }]
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }]
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }]
        }
    ]; 
    return (
        <div>
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={center}
            options={{
                styles: dark_style,
            }}
        >
        {circles}
        </GoogleMap>
        </div>
    );
};

export default Map;