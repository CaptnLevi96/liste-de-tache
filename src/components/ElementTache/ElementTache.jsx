import React from 'react';
import styles from './ElementTache.module.css';

function ElementTache({ tache, onBasculer, onArchiver, onSupprimer, estArchive = false }) {
    return (
        <div className={`${styles.tache} ${tache.estComplete ? styles.terminee : ''} ${estArchive ? styles.archive : ''}`}>
            <div className={styles.contenuTache}>
                <input
                    type="checkbox"
                    checked={tache.estComplete}
                    onChange={() => onBasculer(tache.id)}
                    className={styles.checkbox}
                />
                <span className={styles.texte}>{tache.texte}</span>
            </div>

            <div className={styles.boutons}>
                {!estArchive && (
                    <button
                        onClick={() => onArchiver(tache.id)}
                        className={styles.boutonArchiver}
                    >
                        Archiver
                    </button>
                )}
                <button
                    onClick={() => onSupprimer(tache.id)}
                    className={styles.boutonSupprimer}
                >
                    Supprimer
                </button>
            </div>
        </div>
    );
}

export default ElementTache;