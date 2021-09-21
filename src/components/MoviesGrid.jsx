import { MovieCard } from './MovieCard';
import { useEffect, useState } from 'react';
import styles from './MoviesGrid.module.css'
import { get } from '../utils/httpClient';


export function MoviesGrid() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        get("/discover/movie").then(data => {
            setMovies(data.results);
        });
    }, []);
    return (
        <ul className={styles.moviesGrid}>       
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}    
        </ul>
    );
}