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
        fontStyle: 'Krona One'
    } as React.CSSProperties,
    nav: {
        display: 'flex',
        gap: '20px',
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
};

export default theme;
