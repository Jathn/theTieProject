import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <h1>The Tie Project</h1>
      <Link to="/monitor">Go to Monitor</Link>
      <br />
      <Link to="/reporting">Go to Reporting</Link>
    </div>
  );
}

export default Home;