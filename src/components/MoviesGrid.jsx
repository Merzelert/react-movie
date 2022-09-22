import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css"

export function MoviesGrid() { //Con el metodo .map que nos regresa un array extraemos de movies.json el titulo y lo regresamos en una lista para un mejor performace agragar un key en forma de {} con el id para que sea dinamico
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        get("/discover/movie").then((data) => {
                setMovies(data.results);
            });
    }, []);

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </ul>
    );
}