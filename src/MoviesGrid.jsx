import movies from "./movies.json";

export function MoviesGrid() {
    return (
        <ul>
            {movies.map()}
        </ul>
    );
}