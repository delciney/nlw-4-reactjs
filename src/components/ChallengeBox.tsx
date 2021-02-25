import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"

import styles from "../styles/components/ChallengeBox.module.css"

const ChallengeBox: React.FC = () => {
    
    const { activeChallenges } = useContext(ChallengesContext)
    
    return (
        <div className={styles.ChallengeBoxContainer}>
            {
                activeChallenges ? (

                    <div className={styles.ChallengeActive}>
                        <header>Ganhe {activeChallenges.amount} xp</header>
                        
                        <main>
                            <img src={`icons/${activeChallenges.type}.svg`} />
                            <strong>Novo desafio</strong>
                            <p>{activeChallenges.description}</p>
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