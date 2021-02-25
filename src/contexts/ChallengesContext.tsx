import { createContext, useState, ReactNode, useEffect } from "react"
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
    completeChallenge: () => void;
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
    
    useEffect(() => {
        Notification.requestPermission()
    },[])

    const levelUp = () => setLevel(level +1)

    const startNewChallenge = () => {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]
        
        setActiveChallenges(challenge)

        if (Notification.permission === 'granted'){
            new Notification('Novo desafio!',{
                body: `Valendo ${challenge.amount} xp`
            })
        }
          
    }

    const resetChallenge = () => {
        setActiveChallenges(null)
    }

    const completeChallenge = () => {
        if(!activeChallenges)
            return
        
        const { amount } = activeChallenges

        let finalExperience = currentExperience + amount

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel
            levelUp
        }

        setCurrentExperience(finalExperience)
        setActiveChallenges(null)
        setChallengesCompleted(challengesCompleted + 1)
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
            resetChallenge,
            completeChallenge
        }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}