import React from 'react';
import ElementTache from '../ElementTache/ElementTache';
import styles from './ListeTaches.module.css';

function ListeTaches({ taches, onBasculerTache, onSupprimerTache, onArchiverTache }) {
    if (taches.length === 0) {
        return (
            <div className={styles.conteneurVide}>
                <p className={styles.messageVide}>Ta liste de tâche est vite</p>
            </div>
        );
    }

    return (
        <div className={styles.conteneur}>
            <ul className={styles.liste}>
                {taches.map(tache => (
                    <li key={tache.id}>
                        <ElementTache
                            tache={tache}
                            onBasculer={onBasculerTache}
                            onSupprimer={onSupprimerTache}
                            onArchiver={onArchiverTache}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListeTaches;