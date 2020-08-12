import React from 'react';

// import Input from '../../components/Input';

// import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/background.svg';
// import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

const Login: React.FC = () => {
  return (
    <div id="page-login">
      <div id="page-login-content">
        <div className="page-login-header">
          <img src={landingImg} alt="Plataforma de estudos" className="background-image" />
        </div>
        
        <div className="page-login-form"></div>
      </div>
    </div>
  );
}

export default Login;