import React from 'react';
import styles from './BarreRecherche.module.css';

function BarreRecherche({ recherche, setRecherche, montrerArchives, setMontrerArchives }) {
    return (
        <div className={styles.conteneur}>
            <div className={styles.barreRecherche}>
                <input
                    type="text"
                    placeholder="Rechercher une tâche..."
                    value={recherche}
                    onChange={(e) => setRecherche(e.target.value)}
                    className={styles.input}
                />
            </div>

            <div className={styles.options}>
                <label className={styles.checkboxLabel}>
                    <input
                        type="checkbox"
                        checked={montrerArchives}
                        onChange={(e) => setMontrerArchives(e.target.checked)}
                        className={styles.checkbox}
                    />
                    Afficher les tâches archivées
                </label>
            </div>
        </div>
    );
}

export default BarreRecherche;