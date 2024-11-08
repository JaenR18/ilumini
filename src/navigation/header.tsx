// src/components/Header.tsx
import React from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { IoChatbubbleOutline } from 'react-icons/io5'; 
import starLogo from '../logoStar.png';
import profilePic from '../lanita.png'; 

const Header: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleMessagesClick = () => {
    navigate('/messages');
    };

    return (
        <header style={styles.header}>
            <div style={styles.logoContainer}>
                <div style={styles.logoBackground}></div>
                <img src={starLogo} alt="Ilumini Logo" style={styles.logo} />
                <span style={styles.logoText}>ilumini</span>
            </div>
            <nav style={styles.nav}>
                <Link to="/" style={{ ...styles.link, ...(location.pathname === "/" && styles.activeLink) }}>Inicio</Link>
                <Link to="/discover" style={{ ...styles.link, ...(location.pathname === "/discover" && styles.activeLink) }}>Descubre</Link>
                <Link to="/reserve" style={{ ...styles.link, ...(location.pathname === "/reserve" && styles.activeLink) }}>Reserva</Link>
            </nav>
            <div style={styles.rightIcons}>
                <IoChatbubbleOutline style={styles.icon} onClick={handleMessagesClick} /> 
                <img src={profilePic} alt="Profile" style={styles.profilePic} />
            </div>
        </header>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', 
        padding: '0 20px',
        backgroundColor: '#000',
        color: '#fff',
        height: '60px',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        marginRight: '-1150px',
    },
    logoBackground: {
        position: 'absolute',
        width: '260px',
        height: '260px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5), transparent 70%)',
        top: '-100px',
        left: '-110px',
        zIndex: 0,
    },
    logo: {
        width: 65,
        height: 60,
        zIndex: 1,
    },
    logoText: {
        fontSize: 30,
        fontWeight:'bolder',
        marginLeft: 10,
        zIndex: 1,
        fontStyle: 'Krona One'
    },
    nav: {
        display: 'flex',
        gap: '20px',
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        fontSize: 16,
        paddingBottom: 0,
    },
    activeLink: {
        borderBottom: '2px solid #fff',
    },
    rightIcons: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px', 
    },
    icon: {
        fontSize: '20px',
        color: '#fff', 
    },
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: '50%', 
        objectFit: 'cover', //que se vea siempre super bien
         
    },
};

export default Header;
