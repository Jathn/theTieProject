import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addPoint } from '../reducers/pointReducer';
import ReportingMap from './ReportingMap';

const PointForm = () => {
    const dispatch = useDispatch();
    const [point, setPoint] = useState({lat: 0, lng: 0});
    const center = {lat: 60.18396231386347, lng: 24.828070085671612};

    const setPointToPosition = (position) => {
        setPoint({lat: position.lat, lng: position.lng});
    }

    const handleSubmit = e => {
        e.preventDefault();

        const latitute = parseFloat(point.lat);
        const longitude = parseFloat(point.lng);

        dispatch(addPoint({lat: latitute, lng: longitude}));
        setPoint({lat: 0, lng: 0});
    };

    return (
        <form onSubmit={handleSubmit}>
            <ReportingMap center={center} setPointPos={setPointToPosition} width={50} height={50} />
            <button type="submit">Add Report</button>
        </form>
    );
}

export default PointForm;