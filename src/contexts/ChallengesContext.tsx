import { createContext, useState, ReactNode } from "react"
import challenges from "../../challenges.json"

interface challengeProps {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
interface ChallengesContextData {
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;
    challengesCompleted: number;
    activeChallenges: challengeProps;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export const ChallengesProvider: React.FC = ({children}: ChallengesProviderProps) => {

    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)

    const [activeChallenges, setActiveChallenges] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    const levelUp = () => setLevel(level +1)

    const startNewChallenge = () => {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenges(challenge)
    }

    const resetChallenge = () => {
        setActiveChallenges(null)
    }
    
    return(
        <ChallengesContext.Provider 
        value={{
            level, 
            currentExperience, 
            experienceToNextLevel,
            challengesCompleted, 
            activeChallenges,
            levelUp,
            startNewChallenge,
            resetChallenge
        }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}