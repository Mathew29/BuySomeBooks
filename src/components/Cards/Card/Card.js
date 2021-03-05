import { StylesProvider } from '@material-ui/core';
import React from 'react';
import styles from './Card.module.css';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";


const Card = (props) => {

    // console.log('props ',props)
    return (
        <Auxiliary>
            <div className={styles.Image}>
                <img src={props.image} />
            </div>
            <div className={styles.Body}>
                <h3 className={styles.Title}>{props.title}</h3>
                <p className={styles.Author}>By: {props.author}</p>
                <p className={styles.Price}>$35</p>
                {/* <p className={styles.Genre}>{props.genre}</p> */}
                {/* <p className={styles.Description}>{props.description}</p> */}
            </div>

        </Auxiliary>
    )
}

export default Card;