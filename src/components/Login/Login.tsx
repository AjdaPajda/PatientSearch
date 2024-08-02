import React, { useState } from 'react';
import './Login.css';
import LoginStart from './components/LoginStart';

type LoginState = 'start' | 'form' | 'success' | 'error';

const Login = () => {
  const [loginState, setLoginState] = useState<LoginState>('start');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const renderLoginState = (state: string) => {
    switch (state) {
      case 'start':
        return <LoginStart username={username} password={password} setUsername={setUsername} setPassword={setPassword} />;
      // case 'form':
      //   return <LoginForm />;
      //   case 'resetEmail':
      //     return <LoginResetEmail />;
      // case 'resetPassword':
      //   return <LoginResetPassword />;
      default:
        return <div>Unknown State</div>;
    }
  };

  return (
    <div className='login-wrapper'>
      <div className='logo-wrapper'>
        <div className='hands-wrapper'>
          <img src="src/assets/login-hands-heart.svg" className='hands-heart' alt="" />
          <img src="src/assets/background-letters.svg" className='background-letters' alt="" />
          <div className='info-wrapper'>
            <div className='info-wrapper-header'>
              <img src="src/assets/motus-logo.svg" className='logo-icon' alt="" />
              <div>
                <h1 className='color-white'>Motus Health.</h1>
                <h1 className='color-white'>Advancing Care.</h1>
                <h1 className='color-white'>Transforming Lives.</h1>
              </div>
            </div>
            <div className='info-wrapper-footer'>
              <button>Impressum</button>
              <button>Datenschutz</button>
              <button>Bedingungen</button>
            </div>
          </div>
        </div>
      </div>
      <div className='login-input-wrapper'>
        {/* <nav>
          <button onClick={() => setLoginState('start')}>Start</button>
          <button onClick={() => setLoginState('form')}>Form</button>
          <button onClick={() => setLoginState('success')}>Success</button>
          <button onClick={() => setLoginState('error')}>Error</button>
        </nav> */}
        <div className="login-container">
          <button className='contact'>hamdija</button>
          {renderLoginState(loginState)}
          <div>
              <button>1</button>
              <button>2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
