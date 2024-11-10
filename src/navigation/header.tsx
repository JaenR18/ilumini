// src/components/Header.tsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoChatbubbleOutline, IoNotificationsOutline } from 'react-icons/io5'; // Importamos el icono de notificaciones
import starLogo from '../images/logoStar.png';
import profilePic from '../images/me.jpg';
import theme from '../theme';

const Header: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleMessagesClick = () => {
        navigate('/messages');
    };

    const handleNotificationsClick = () => {
        navigate('/notifications'); 
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
                <Link to="/discover" style={{ ...theme.link, ...theme.linkWithMargin, ...(location.pathname === "/discover" && theme.activeLink) }}>Descubre</Link>
                <Link to="/reserve" style={{ ...theme.link, ...theme.linkWithMargin, ...(location.pathname === "/reserve" && theme.activeLink) }}>Acerca de</Link>
            </nav>
            <div style={theme.rightIcons}>
                <IoNotificationsOutline style={theme.icon} onClick={handleNotificationsClick} /> {/* Icono de notificaciones */}
                <IoChatbubbleOutline style={{ ...theme.icon, marginLeft: '10px' }} onClick={handleMessagesClick} />
                <img src={profilePic} alt="Profile" style={theme.profilePic} />
            </div>
        </header>
    );
};

export default Header;
