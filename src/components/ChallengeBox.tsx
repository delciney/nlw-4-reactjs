import styles from "../styles/components/ChallengeBox.module.css"

const ChallengeBox: React.FC = () => {

    const hasActiveChallenge = true

    return (
        <div className={styles.ChallengeBoxContainer}>
            {
                hasActiveChallenge ? (

                    <div className={styles.ChallengeActive}>
                        <header>Ganhe 400 xp</header>
                        
                        <main>
                            <img src="icons/body.svg" />
                            <strong>Novo desafio</strong>
                            <p>Levante e faça uma caminhada de 3 minutos</p>
                        </main>

                        <footer>
                            <button 
                            type="button"
                            className={styles.challengeFailedButton}
                            >Falhei</button>
                            <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                            >Completei</button>
                        </footer>
                    </div>

                ) : (

                    <div className={styles.ChallengeNotActive}>
                        <strong>
                                Finalize um ciclo para receber um desafio
                        </strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up"/>
                            Avance de level completando desafios
                        </p>
                    </div>

                )
            }
        </div>
    )
}

export default ChallengeBox;