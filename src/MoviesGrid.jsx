import { MovieCard } from "./MovieCard";
import movies from "./movies.json";
import styles from "./MoviesGrid.module.css"

export function MoviesGrid() { //Con el metodo .map que nos regresa un array extraemos de movies.json el titulo y lo regresamos en una lista para un mejor performace agragar un key en forma de {} con el id para que sea dinamico
    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)} 
        </ul>
    );
}