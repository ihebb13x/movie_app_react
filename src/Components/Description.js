import React from "react";
import { Link } from "react-router-dom";

const Description = ({ movie }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{movie.title}</h2>
      <p style={styles.description}>{movie.description}</p>
      <div style={styles.videoContainer}>
        <iframe
          src={movie.trailerLink}
          style={styles.video}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Movie Trailer"
        ></iframe>
      </div>
      <Link to="/" style={styles.link}>Back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.5',
    marginBottom: '20px',
    color: '#666',
  },
  videoContainer: {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '56.25%', // 16:9 aspect ratio
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
  },
  video: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    borderRadius: '10px',
  },
  link: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
};

export default Description;
