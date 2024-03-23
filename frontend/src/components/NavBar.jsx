import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <table>
            <tbody>
                <tr>
                    <th><Link to="/">Home</Link></th>
                    <th><Link to="/monitor">Monitor</Link></th>
                    <th><Link to="/reporting">Reporting</Link></th>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default NavBar;