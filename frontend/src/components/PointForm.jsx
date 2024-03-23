import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addPoint } from '../reducers/pointReducer';
import ReportingMap from './ReportingMap';

const PointForm = () => {
    const dispatch = useDispatch();
    const [point, setPoint] = useState({lat: 0, lng: 0, severity: 1});
    const pics = [
        {severity: 1, url: 'https://i.ibb.co/qCSZsnk/snowy1.png'},
        {severity: 2, url: 'https://i.ibb.co/3pCwV8C/snowy2.jpg'},
        {severity: 3, url: 'https://i.ibb.co/58Jk4RP/snowy3.jpg'},
        {severity: 4, url: 'https://i.ibb.co/Pt8cgjL/snowy4.webp'},
    ]
    const pic_elems = pics.map((p) => {
        return (
            <img key={pics.indexOf(p)} src={p.url} alt={p
            .severity} onClick={() => setPic(p)} />
        );
    });
    const [pic, setPic] = useState(pics[0]);
    const center = {lat: 60.18396231386347, lng: 24.828070085671612};

    const setPointToPosition = (position) => {
        setPoint({lat: position.lat, lng: position.lng});
    }

    const handleSubmit = e => {
        e.preventDefault();

        const latitute = parseFloat(point.lat);
        const longitude = parseFloat(point.lng);
        const sev = parseInt(pic.severity);

        dispatch(addPoint({lat: latitute, lng: longitude, severity: sev}));
        setPoint({lat: 0, lng: 0, severity: 1});
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="reporting-container">
                <div className="monitor-content">
                    <div style={{ display: 'flex' }}>
                        <div >
                            <ReportingMap center={center} setPointPos={setPointToPosition} width={20} height={30} />
                        </div>
                        <img className='chosenpic' src={pic.url} />
                    </div>
                </div>
                    
                </div>
                <div className="submit">
                    <p>Press the button to submit your report.</p>
                    <button type="submit" className='navlink'>Add Report</button>
                </div>
                <div className='pictureselect'>
                    {pic_elems}
                </div>
    
        </form>
    );
}

export default PointForm;