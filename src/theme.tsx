// src/theme.tsx
import React from 'react';

const theme = {    
    text: {
        size: '12px',
    }as React.CSSProperties,
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        /* backgroundColor: '#000', */
        color: '#fff',
        height: '80px', 
        backgroundColor: 'transparent',        
    } as React.CSSProperties,
    logoContainer: {        
        position: 'relative',
        left: '5px', 
        gap: '10px'
    } as React.CSSProperties,
    logoBackground: {        
        /* position: 'absolute', */
        width: '100px',    
        borderRadius: '50%',
        /* backgroundImage: 'radial-gradient(closest-side,rgba(255,255,0,100),#000)', */
        /* background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5), transparent 70%)', */
        /* top: '-100px', */
        /* left: '-110px', */
        /* zIndex: 0,         */
    } as React.CSSProperties,
    logo: {
        width: 60,        
        objectFit: 'contain',
        marginTop: '5px',
        marginLeft: '10px'        
    } as React.CSSProperties,
    logoText: {
        fontSize: 50,
        fontWeight: 'bolder',
        marginLeft: 100,
        zIndex: 1,
        fontStyle: 'Krona One',        
    } as React.CSSProperties,
    nav: {
        display: 'flex',
        gap: '20px',  
        alignItems: 'center',
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
    textContainer: {
        textAlign: 'center',
        color: '#fff',
    } as React.CSSProperties,
    headerTitle: {
        fontSize: '24px',
        fontWeight: 'bold',
    } as React.CSSProperties,
    headerSubtitle: {
        fontSize: '14px',
    } as React.CSSProperties,
    linkWithMargin: {
        marginRight: '0px', 
    } as React.CSSProperties,
    rightIcons: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        /* marginLeft: 'auto',*/   
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
