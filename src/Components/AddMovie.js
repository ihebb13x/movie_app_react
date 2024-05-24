import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

const AddMovie = ({ onAdd }) => {
  const [showForm, setShowForm] = useState(false); // État pour contrôler la visibilité du formulaire
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [trailerLink, setTrailerLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(title, description, rating, posterURL, trailerLink);
  };

  return (
    <div className="add-movie-container" style={styles.container}>
      <Button onClick={() => setShowForm(!showForm)} className="btn btn-primary mb-3">
        {showForm ? "Hide Form" : "Add New Movie"}
      </Button>
      {showForm &&
        <Form onSubmit={handleSubmit} style={styles.form}>
          <FormGroup>
            <Label for="title" style={styles.label}>Title:</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              style={styles.input}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description" style={styles.label}>Description:</Label>
            <Input
              type="textarea"
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              style={{ ...styles.input, height: '120px' }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="rating" style={styles.label}>Rating:</Label>
            <Input
              type="select"
              id="rating"
              value={rating}
              onChange={e => setRating(e.target.value)}
              style={styles.input}
            >
              <option value="">Select Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="posterURL" style={styles.label}>Poster URL:</Label>
            <Input
              type="url"
              id="posterURL"
              value={posterURL}
              onChange={e => setPosterURL(e.target.value)}
              style={styles.input}
            />
          </FormGroup>
          <FormGroup>
            <Label for="trailerLink" style={styles.label}>Trailer Link:</Label>
            <Input
              type="url"
              id="trailerLink"
              value={trailerLink}
              onChange={e => setTrailerLink(e.target.value)}
              style={styles.input}
            />
          </FormGroup>
          <Button type="submit" className="btn btn-primary">
            Add
          </Button>
        </Form>
      }
    </div>
  );
}

AddMovie.propTypes = {
  onAdd: PropTypes.func,
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    textAlign: 'center',
  },
  form: {
    padding: '30px',
    backgroundColor: '#f8f8f8',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
  },
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  input: {
    fontSize: '16px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '20px',
    width: '100%',
  },
};

export default AddMovie;
