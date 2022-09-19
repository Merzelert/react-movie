import { MovieCard } from "./MovieCard";
import movies from "./movies.json";

export function MoviesGrid() { //Con el metodo .map que nos regresa un array extraemos de movies.json el titulo y lo regresamos en una lista para un mejor performace agragar un key en forma de {} con el id para que sea dinamico
    return (
        <ul>
            {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)} 
        </ul>
    );
}