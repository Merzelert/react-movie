import React from 'react'
import movie from './movie.json'
import styles from './MovieDetails.module.css'


export const MovieDetails = () => {
    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`}src={imageUrl} alt={movie.title} />
            <div className={styles.col}>
                <p><strong>Title:</strong>{movie.title}</p>
                <p>
                    <strong>{movie.genres.map(genre => genre.name).join(", ")}</strong>
                </p>
                <p><strong>Description:</strong>{movie.overview}</p>
            </div>
        </div>
    )
}