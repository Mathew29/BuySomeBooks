import { StylesProvider } from '@material-ui/core';
import React from 'react';
import styles from './Card.module.css';


const Card = (props) => {

    // console.log('props ',props)
    return (
        <div className={styles.Container}>
            <div className={styles.Image}>
                <img src={props.image} />
            </div>
            <div className={styles.Body}>
                <h3 className={styles.Title}>{props.title}</h3>
                <p className={styles.Description}>{props.description}</p>
                <p className={styles.Author}>{props.author}</p>
                <p className={styles.Genre}>{props.genre}</p>
            </div>

        </div>
    )
}

export default Card;