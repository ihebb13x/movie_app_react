import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const MovieCard = ({ movie: { title, rating, description, posterURL } }) => {
  return (
    <div className="movie-card">
      <Card style={{ width: '18rem', borderRadius: '10px', border: 'none', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }}>
        <Link to={`/movies/${title}`}>
          <Card.Img variant="top" src={posterURL} style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
        </Link>
        <Card.Body>
          <Card.Title style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#333', minHeight: '60px' }}>
            <Link to={`/movies/${title}`} style={{ textDecoration: 'none', color: '#333' }}>{title}</Link>
          </Card.Title>
          <Card.Text style={{ fontSize: '14px', lineHeight: '1.4', color: '#666', minHeight: '100px' }}>
            {description.slice(0, 100)}{description.length > 100 ? "..." : ""}
          </Card.Text>
          <Link to={`/movies/${title}`} className="btn btn-primary" style={{ textDecoration: 'none', display: 'block', width: '100%', textAlign: 'center' }}>Details</Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
