import { useEffect } from 'react';
import Map from '../components/Map';
import { useSelector } from 'react-redux';

const Monitor = () => {
    const reported_points = useSelector(state => state.points.reportedPoints);

    return (
      <div>
        <h1>Monitor Screen</h1>
        <Map width={30} height={50} reported_points={reported_points} />
      </div>
    );
  }
  
  export default Monitor;