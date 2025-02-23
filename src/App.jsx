import { useState } from 'react';
import Entete from './components/Entete/Entete';
import BarreRecherche from './components/BarreRecherche/BarreRecherche';
import FormulaireTache from './components/FormulaireTache/FormulaireTache';
import ListeTaches from './components/ListeTaches/ListeTaches';
import styles from './App.module.css';


function App() {
    const [taches, setTaches] = useState([]);
    const [recherche, setRecherche] = useState('');
    const [montrerArchives, setMontrerArchives] = useState(false);

    const ajouterTache = (texte) => {
        const nouvelleTache = {
            id: Date.now(),
            texte,
            estComplete: false,
            estArchive: false
        };
        setTaches([...taches, nouvelleTache]);
    };

    const basculerTache = (id) => {
        setTaches(taches.map(tache =>
            tache.id === id
                ? { ...tache, estComplete: !tache.estComplete }
                : tache
        ));
    };

    const archiverTache = (id) => {
        setTaches(taches.map(tache =>
            tache.id === id
                ? { ...tache, estArchive: true }
                : tache
        ));
    };

    const supprimerTache = (id) => {
        setTaches(taches.filter(tache => tache.id !== id));
    };

    // Filtrer les tâches selon la recherche et l'état d'archivage
    const filtrerTaches = (taches) => {
        return taches.filter(tache => {
            const correspondRecherche = tache.texte
                .toLowerCase()
                .includes(recherche.toLowerCase());
            const correspondArchive = montrerArchives ? true : !tache.estArchive;
            return correspondRecherche && correspondArchive;
        });
    };

    const tachesFiltrees = filtrerTaches(taches);

    return (
        <div className={styles.app}>
            <Entete />
            <main className={styles.contenuPrincipal}>
                <BarreRecherche
                    recherche={recherche}
                    setRecherche={setRecherche}
                    montrerArchives={montrerArchives}
                    setMontrerArchives={setMontrerArchives}
                />

                <FormulaireTache onAjouterTache={ajouterTache} />

                <div className={styles.conteneurListe}>
                    {tachesFiltrees.length > 0 ? (
                        <ListeTaches
                            taches={tachesFiltrees}
                            onBasculerTache={basculerTache}
                            onArchiverTache={archiverTache}
                            onSupprimerTache={supprimerTache}
                        />
                    ) : (
                        <div className={styles.messageVide}>
                            {recherche
                                ? "Aucune tâche ne correspond à votre recherche"
                                : "Aucune tâche disponible"}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;