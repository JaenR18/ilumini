// src/components/Header.tsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoChatbubbleOutline } from 'react-icons/io5';
import starLogo from '../images/logoStar.png';
import profilePic from '../images/lanita.png';
import theme from '../theme'; //de la pantalla de temas 

const Header: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleMessagesClick = () => {
        navigate('/messages');
    };

    return (
        <header style={theme.header}>
            <div style={theme.logoContainer}>
                <div style={theme.logoBackground}></div>
                <img src={starLogo} alt="Ilumini Logo" style={theme.logo} />
                <span style={theme.logoText}>ilumini</span>
            </div>
            <nav style={theme.nav}>
                <Link to="/" style={{ ...theme.link, ...(location.pathname === "/" && theme.activeLink) }}>Inicio</Link>
                <Link to="/discover" style={{ ...theme.link, ...(location.pathname === "/discover" && theme.activeLink) }}>Descubre</Link>
                <Link to="/reserve" style={{ ...theme.link, ...(location.pathname === "/reserve" && theme.activeLink) }}>Reserva</Link>
            </nav>
            <div style={theme.rightIcons}>
                <IoChatbubbleOutline style={theme.icon} onClick={handleMessagesClick} />
                <img src={profilePic} alt="Profile" style={theme.profilePic} />
            </div>
        </header>
    );
};

export default Header;
