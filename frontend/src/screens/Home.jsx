import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="root">
      <div className="content">
        <h1>Plow Patrol</h1>
        <nav>
          <Link className="link" to="/monitor">Go to Monitor</Link>
          <Link className="link" to="/reporting">Go to Reporting</Link>
        </nav>
        <br/>
        <div className="pictureframe">
          <img src={"https://i.ibb.co/qj6Gc0C/monitor-data.png"}/>
          <img src={"https://i.ibb.co/4TKfpxc/monitor.png"}/>
        </div>
      </div>
    </div>
  );
}

export default Home;