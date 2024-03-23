import { useEffect } from 'react';
import Map from '../components/Map';
import { useSelector, useDispatch } from 'react-redux';
import { addPoint, removeAll } from '../reducers/pointReducer';
import './Monitor.css';

const Monitor = () => {
    const reported_points = useSelector(state => state.points.reportedPoints);
    const dispatch = useDispatch();
    const simulate = async () => {
      dispatch(removeAll());
      for (let i = 0; i < 20; i++) {
        const lat = 60.17573762223602 + Math.random() * 0.01;
        const lng = 24.80970414859559 - Math.random() * 0.03;
        const sev = Math.floor(Math.random() * 4) + 1;
        await new Promise(resolve => setTimeout(resolve, 100));
        dispatch(addPoint({lat: lat, lng: lng, severity: sev}));
      }
    }

    return (
      <div>
        <h1>Monitor Screen</h1>
        <div className='monitor-container'>
          <div className="monitor-content">
            <Map classname="monitorApp" width={50} height={65} reported_points={reported_points} />
          </div>
        </div>
        <p>Press the button to simulate reports.</p>
        <div className="monitor-container">
          <button onClick={simulate} className='link'>Simulate</button>
        </div>
      </div>
    );
  }
  
  export default Monitor;