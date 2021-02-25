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
    challengesCompleted: number;
    activeChallenges: challengeProps;
    levelUp: () => void;
    startNewChallenge: () => void;
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

    const levelUp = () => setLevel(level +1)

    const startNewChallenge = () => {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenges(challenge)
    }
    
    return(
        <ChallengesContext.Provider 
        value={{
            level, 
            currentExperience, 
            challengesCompleted, 
            activeChallenges,
            levelUp,
            startNewChallenge
        }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}