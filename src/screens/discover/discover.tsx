import React from 'react';
import { IoHeartOutline, IoChatbubbleOutline, IoPaperPlaneOutline } from 'react-icons/io5';
import userImage from '../../images/user.jpg';
import postImage from '../../images/post2.jpg';

const Discover: React.FC = () => {
    const posts = [
        {
            id: 1,
            imageUrl: postImage,
            username: 'Memories',
            userImage: userImage,
            likes: 1200,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt erat elementum egestas facilisi.',
        },
    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Publicaciones sugeridas</h1>
            {posts.map((post) => (
                <div key={post.id} style={styles.postCard}>
                    <div style={styles.userInfo}>
                        <img src={post.userImage} alt="User" style={styles.userImage} />
                        <span style={styles.username}>{post.username}</span>
                    </div>
                    <img src={post.imageUrl} alt="Post" style={styles.postImage} />
                    <div style={styles.postContent}>
                        <div style={styles.postFooter}>
                            <IoHeartOutline style={styles.icon} />
                            <IoChatbubbleOutline style={styles.icon} />
                            <IoPaperPlaneOutline style={styles.icon} />
                        </div>
                        <span style={styles.likeText}>{post.likes} Me gusta</span>
                        <p style={styles.postDescription}>{post.description}</p>
                        <span style={styles.commentsText}>Ver 30 comentarios</span>
                        <span style={styles.addCommentText}>Añadir comentario</span> 
                    </div>
                </div>
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        color: '#fff',
        backgroundColor: '#000',
        minHeight: '100vh',
    } as React.CSSProperties,
    heading: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#fff',
        width: '37%',
        textAlign: 'left',
    } as React.CSSProperties,
    postCard: {
        backgroundColor: 'black',
        borderRadius: '10px',
        width: '600px',
        padding: '15px',
        marginBottom: '20px',
    } as React.CSSProperties,
    userInfo: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    } as React.CSSProperties,
    userImage: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        marginRight: '10px',
    } as React.CSSProperties,
    username: {
        fontSize: '16px',
        color: '#ccc',
    } as React.CSSProperties,
    postImage: {
        width: '100%',
        borderRadius: '10px',
        marginBottom: '15px',
    } as React.CSSProperties,
    postContent: {
        padding: '10px 0',
    } as React.CSSProperties,
    postFooter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '15px',
        color: '#fff',
        marginBottom: '5px',
    } as React.CSSProperties,
    icon: {
        color: '#fff',
        fontSize: '20px',
        cursor: 'pointer',
    } as React.CSSProperties,
    likeText: {
        fontSize: '12px',
        color: '#ccc',
        marginBottom: '10px',
        display: 'block',
    } as React.CSSProperties,
    postDescription: {
        fontSize: '14px',
        color: '#ccc',
        marginTop: '10px',
    } as React.CSSProperties,
    commentsText: {
        fontSize: '12px',
        color: '#888',
        marginTop: '8px',
        display: 'block', 
    } as React.CSSProperties,
    addCommentText: {
        fontSize: '12px',
        color: '#888',
        marginTop: '4px', 
        display: 'block', 
    } as React.CSSProperties,
};

export default Discover;
