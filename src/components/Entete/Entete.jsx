import React from 'react';
import styles from './Entete.module.css';

function Entete() {
    return (
        <header className={styles.entete}>
            <h1>Liste de tâches</h1>
        </header>
    );
}

export default Entete;