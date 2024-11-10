// src/theme.tsx
import React from 'react';

const theme = {
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        backgroundColor: '#000',
        color: '#fff',
        height: '60px',
    } as React.CSSProperties,
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        marginRight: '-1150px',
    } as React.CSSProperties,
    logoBackground: {
        position: 'absolute',
        width: '260px',
        height: '260px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5), transparent 70%)',
        top: '-100px',
        left: '-110px',
        zIndex: 0,
    } as React.CSSProperties,
    logo: {
        width: 65,
        height: 60,
        zIndex: 1,
    } as React.CSSProperties,
    logoText: {
        fontSize: 30,
        fontWeight: 'bolder',
        marginLeft: 10,
        zIndex: 1,
        fontStyle: 'Krona One',
    } as React.CSSProperties,
    nav: {
        display: 'flex',
        marginLeft:'600px'//para que este al otro lado de la screen
    } as React.CSSProperties,
    link: {
        textDecoration: 'none',
        color: '#fff',
        fontSize: 16,
        paddingBottom: 0,
    } as React.CSSProperties,
    activeLink: {
        borderBottom: '2px solid #fff',
    } as React.CSSProperties,
    linkWithMargin: {
        marginRight: '10px', 
    } as React.CSSProperties,
    rightIcons: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
    } as React.CSSProperties,
    icon: {
        fontSize: '20px',
        color: '#fff',
    } as React.CSSProperties,
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        objectFit: 'cover',
    } as React.CSSProperties,
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        marginLeft: '20px',
        width: '300px',
    } as React.CSSProperties,

    searchIcon: { //icono search 
        position: 'absolute',
        left: '10px',
        color: 'gray',
        fontSize: '18px',
    } as React.CSSProperties,

    searchInput: {
        padding: '5px 10px 5px 30px', // spacio del icono y el texto
        fontSize: '14px',
        borderRadius: '4px',
        border: '1px solid gray',
        backgroundColor: '#333',
        color: '#fff',
        width: '100%',
    } as React.CSSProperties,
};

export default theme;
