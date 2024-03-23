import { Link } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
    return (
        <div className='navbar'>
            <table>
            <tbody>
                <tr>
                    <th><Link to="/" className='navlink'>Home</Link></th>
                    <th><Link to="/monitor" className='navlink'>Monitor</Link></th>
                    <th><Link to="/reporting" className='navlink'>Reporting</Link></th>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default NavBar;