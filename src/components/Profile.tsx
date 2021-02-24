import styles from "../styles/components/Profile.module.css"
const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
        <img src="https://github.com/delciney.png" alt="Delciney Lemos Oliveira"/>
        <div>
            <strong>Delciney Lemos Oliveira</strong>
            <p>
                <img src="icons/level.svg" alt="Level"/>
                Level 1
            </p>
        </div>
    </div>
  )
}

export default Profile