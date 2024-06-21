import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../api/users';

export const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const signupMutation = useMutation({
        mutationFn: () => signup({ username, password }),
        onSuccess: () => navigate('/login'),
        onError: () => alert('failed to signup'),
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        signupMutation.mutate();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Link to='/'>Back to Main Page</Link>
            <hr />
            <br />
            <div>
                <label htmlFor='create-username'>Username: </label>
                <input
                    type='text'
                    name='create-username'
                    id='create-username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <br />
            <div>
                <label htmlFor='create-password'>Password: </label>
                <input
                    type='password'
                    name='create-password'
                    id='create-password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <br />
            <input
                type='submit'
                value={signupMutation.isPending ? 'Signing up...' : 'Sign Up'}
                disabled={!username || !password || signupMutation.isPending}
            />
        </form>
    );
};
