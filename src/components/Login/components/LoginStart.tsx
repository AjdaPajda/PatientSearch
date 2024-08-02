import React from 'react';
import './LoginStart.css';

interface LoginStartProps {
    username: string;
    password: string;
    setUsername: (value: string) => void;
    setPassword: (value: string) => void;
}

const LoginStart: React.FC<LoginStartProps> = ({ username, password, setUsername, setPassword }) => {

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login clicked', { username, password });
    };

    return (
        <form onSubmit={handleLogin}>
            <h1>Willkommen zurück, bitte<br/> unten einloggen</h1>
            <div className="input-group">
                <img src="src/assets/email-icon.svg" height={'24px'} width={'24px'} alt="" />
                <input 
                    type="text" 
                    id="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
            </div>
            <div className="input-group">
            <img src="src/assets/password-icon.svg" height={'24px'} width={'24px'} alt="" />
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginStart;
