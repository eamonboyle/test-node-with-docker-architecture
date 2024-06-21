import { Link } from 'react-router-dom';
import { jwtDecode, JwtPayload } from 'jwt-decode'; // Import JwtPayload type
import { useAuth } from '../contexts/AuthContext';

import { User } from './User';

export const Header = () => {
    const [token, setToken] = useAuth();

    if (token) {
        const { sub } = jwtDecode<JwtPayload>(token.toString()); // Provide JwtPayload type to jwtDecode
        return (
            <div>
                Logged in as <User id={sub} />
                <br />
                <button onClick={() => setToken('')}>Logout</button>
            </div>
        );
    }

    return (
        <div>
            <Link to='/login'>Login</Link> | <Link to='/signup'>Sign Up</Link>
        </div>
    );
};
