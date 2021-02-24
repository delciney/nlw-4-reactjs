import styles from "../styles/components/CompletedChallenges.module.css"

const CompletedChallenges: React.FC = () => {
  return (
      <div className={styles.CompletedChallengesContainer}>
          <span>Desafios completos</span>
          <span>7</span>
      </div>
  )
}

export default CompletedChallenges;