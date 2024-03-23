import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="root">
      <div className="content">
        <h1>The Tie Project</h1>
        <nav>
          <Link className="link" to="/monitor">Go to Monitor</Link>
          <Link className="link" to="/reporting">Go to Reporting</Link>
        </nav>
        <br/>
        <div className="pictureframe">
          <img src={"../../src/assets/monitor_data.png"}/>
          <img src={"../../src/assets/monitor.png"}/>
        </div>
      </div>
    </div>
  );
}

export default Home;