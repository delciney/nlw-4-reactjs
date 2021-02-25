import { useState, useEffect } from "react";
import styles from "../styles/components/Countdown.module.css"

let countdownTimeout: NodeJS.Timeout

const Countdown: React.FC = () => {

    const [time, setTime] = useState(0.1 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    const startCountdown = () => {
        setIsActive(true)
    }

    const resetCountdown = () => {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(0.1 * 60)
    }

    useEffect(()=>{
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }else if (isActive && time == 0){
            setIsActive(false)
            setHasFinished(true)
        }
    },[isActive, time])

    return (
      <div>
          
      <div 
      className={styles.CountdownContainer}
      >
          <div>
              <span>{minuteLeft}</span>
              <span>{minuteRight}</span>
          </div>
          <span>:</span>
          <div>
              <span>{secondLeft}</span>
              <span>{secondRight}</span>
          </div>
      </div>
        {
            hasFinished ? (
                <button 
                    disabled
                    className={ styles.CountdownButton }
                    >
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    {

                        isActive ? (
                            <button type="button"
                            className={ `${styles.CountdownButton} ${styles.CountdownButtonActive}` }
                            onClick={resetCountdown}
                            >
                            Abandonar ciclo
                            </button>
                        ) : (
                            <button type="button"
                            className={styles.CountdownButton}
                            onClick={startCountdown}
                            >
                            Iniciar um ciclo
                            </button>
                        )
                    }
                </>
            )
        }

        
      
      </div>
    )
}

export default Countdown;