import PointForm from "../components/PointForm";
import './Reporting.css';

const Reporting = () => {
   
    return (
      <div>
        <h1>Reporting Screen</h1>
        <p>Select your location. After that, choose one of the classified pictures.</p>
        <PointForm className="monitorApp"/>
      </div>
    );
  }
  
  export default Reporting;