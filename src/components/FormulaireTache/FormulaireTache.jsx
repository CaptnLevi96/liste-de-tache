import { useState } from 'react';
import styles from './FormulaireTache.module.css';

function FormulaireTache({ onAjouterTache }) {
    const [valeurSaisie, setValeurSaisie] = useState('');
    const [erreur, setErreur] = useState('');

    const gererSoumission = (e) => {
        e.preventDefault();

        if (!valeurSaisie.trim()) {
            setErreur('Tu dois entrer une tâche!');
            return;
        }

        setErreur('');
        onAjouterTache(valeurSaisie.trim());
        setValeurSaisie('');
    };

    return (
        <form className={styles.formulaire} onSubmit={gererSoumission}>
            <div className={styles.conteneurSaisie}>
                <input
                    type="text"
                    value={valeurSaisie}
                    onChange={(e) => {
                        setValeurSaisie(e.target.value);
                        if (erreur) setErreur('');
                    }}
                    placeholder="Ajouter une nouvelle tâche..."
                    className={`${styles.saisie} ${erreur ? styles.erreur : ''}`}
                />
                {erreur && <span className={styles.messageErreur}>{erreur}</span>}
            </div>
            <button type="submit" className={styles.boutonAjouter}>
                Ajouter
            </button>
        </form>
    );
}

export default FormulaireTache;