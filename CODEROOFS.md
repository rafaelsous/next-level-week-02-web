## Landing Page
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import logoutIcon from '../../assets/images/icons/logout.svg'

import './styles.css';

const Landing = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    async function loadTotalConnections() {
      await api.get('connections').then(response => {
        const { total } = response.data;

        setTotalConnections(total);
      })
    }

    loadTotalConnections();
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="header-container">
          <div className="profile-info">
            <img src="https://avatars2.githubusercontent.com/u/7409003?s=460&u=7a9f1444e153f4ed076c57ad6b2e83d0cdda14f3&v=4" alt="Avatar" />
            <span>Rafael Sousa</span>
          </div>

          <button type="button">
            <img src={logoutIcon} alt="Sair" />
          </button>
        </div>

        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de estudos" className="hero-image"
        />

        <footer id="footer">
          <div className="footer-content">
            <div className="buttons-container">
              <Link to="/study" className="study">
                <img src={studyIcon} alt="Estudar" />
                Estudar
              </Link>

              <Link to="/give-classes" className="give-classes">
                <img src={giveClassesIcon} alt="Dar aulas" />
                Dar Aulas
              </Link>
            </div>

            <div>
              <span>
                Seja bem-vindo! <br />
                <strong>O que deseja fazer?</strong>
              </span>

              <span className="total-connections">
                Total de {/* {totalConnections} */} 285 conexões já realizadas <img src={purpleHeartIcon} alt="coração roxo" />
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Landing;