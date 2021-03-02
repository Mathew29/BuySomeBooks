import { StylesProvider } from '@material-ui/core';
import React from 'react';
import styles from './Card.module.css';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';


const Card = (props) => {

    console.log('props ',props)
    return (
        <div className={styles.Container}>
            <div className={styles.Image}>
                image
            </div>
            <div className={styles.Body}>
                <h3 className={styles.Title}>title</h3>
                <p className={styles.Description}>description</p>
            </div>

        </div>
    )
}

export default Card;