import { useEffect } from 'react';
import Map from '../components/Map';
import { useSelector } from 'react-redux';
import './Monitor.css';

const Monitor = () => {
    const reported_points = useSelector(state => state.points.reportedPoints);

    return (
      <div>
        <h1>Monitor Screen</h1>
        <div className='monitor-container'>
          <div className="monitor-content">
            <Map classname="monitorApp" width={50} height={65} reported_points={reported_points} />
          </div>
        </div>
      </div>
    );
  }
  
  export default Monitor;