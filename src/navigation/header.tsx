import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoChatbubbleOutline, IoNotificationsOutline, IoSearchOutline } from 'react-icons/io5';
import starLogo from '../images/logoStar.png';
import profilePic from '../images/me.jpg';
import theme from '../theme';
import userPic from '../images/user.jpg';
//aun falta componer header spaces
//add scren de comments?
//add info en el user del post
const Header: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [showMessages, setShowMessages] = React.useState(false);

    const handleMessagesClick = () => {
        setShowMessages(!showMessages);
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

                <div style={theme.searchContainer}>
                    <IoSearchOutline style={theme.searchIcon} />
                    <input type="search" style={theme.searchInput} /> 
                </div>
            </div>
            <nav style={theme.nav}>
                <Link to="/" style={{ ...theme.link, ...(location.pathname === "/" && theme.activeLink) }}>Inicio</Link>
                <Link to="/discover" style={{ ...theme.link, ...theme.linkWithMargin, ...(location.pathname === "/discover" && theme.activeLink) }}>Descubre</Link>
                <Link to="/reserve" style={{ ...theme.link, ...theme.linkWithMargin, ...(location.pathname === "/reserve" && theme.activeLink) }}>Acerca de</Link>
            </nav>
            <div style={theme.rightIcons}>
                <IoNotificationsOutline style={theme.icon} onClick={handleNotificationsClick} />
                <IoChatbubbleOutline style={{ ...theme.icon, marginLeft: '10px' }} onClick={handleMessagesClick} />
                <img src={profilePic} alt="Profile" style={theme.profilePic} />
            </div>

            {showMessages && (
                <div style={theme.messageList}>
                    <div style={theme.messageTitle}>Mensajería</div>
                    <div style={theme.messageSearchContainer}>
                        <IoSearchOutline style={theme.searchIcon} />
                        <input type="search" style={theme.messageSearchInput} />
                    </div>
                    {Array(3).fill(null).map((_, index) => (
                        <div key={index} style={theme.messageItem}>
                            <div style={theme.messageHeader}>
                                <img src={userPic} alt="Profile" style={theme.profileCircle} /> 
                                <div style={theme.messageUser}>Montelimar</div>
                            </div>
                            <p style={theme.messageText}>El precio de la habitación hoy es...</p>
                            <span style={theme.messageDate}>3 días</span>
                        </div>
                    ))}
                </div>
            )}


        </header>
    );
};

export default Header;
