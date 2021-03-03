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
                <h3 className={styles.Title}>title {props.title}</h3>
                <p className={styles.Price}>price</p>
                {/* <p className={styles.Description}>{props.description}</p> */}
                {/* <p className={styles.Author}>{props.author}</p>
                <p className={styles.Genre}>{props.genre}</p> */}
            </div>

        </Auxiliary>
    )
}

export default Card;