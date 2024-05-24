import './App.css';
import { useState } from 'react';
import m from './assests/m';
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';
import Description from './Components/Description';
import { Route, Routes } from'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movies , setMovies]=useState(m);
  const addMovie=(title ,description , rating, posterURL,trailerLink)=>{
    const newMovie={title ,description , rating, posterURL,trailerLink};
    setMovies(movies =>[...movies,newMovie]);
  };
  return (
    <div className="App">
    <AddMovie onAdd={addMovie}/>
          
     <Routes>
          <Route path="/" element={<MovieList movies={ movies} />} />
          {movies.map((movie) => (
            <Route
             
              path={`/movies/${movie.title}`}
              element={<Description movie={movie} />}
            />
          ))}
         
        </Routes>
    </div>
  );
}

export default App;
