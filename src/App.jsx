import { MoviesGrid } from "./MoviesGrid";

export function App() { // componete que nos regresa una div con un header y un main 
    return <div>
            <header>
                <h1>Movies</h1>
            </header>
            <main>
                <MoviesGrid />
            </main>
        </div>
}