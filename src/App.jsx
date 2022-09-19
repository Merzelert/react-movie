import { MoviesGrid } from "./MoviesGrid";
import styles from "./App.module.css";

export function App() { // componete que nos regresa una div con un header y un main 
    return <div>
            <header>
                <h1 className={styles.title}>Movies</h1>
            </header>
            <main>
                <MoviesGrid />
            </main>
        </div>
}