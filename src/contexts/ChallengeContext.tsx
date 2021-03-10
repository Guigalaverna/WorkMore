import React, { createContext, useEffect, useState } from 'react';

import Cookies from 'js-cookie';

import challenges from '../../challenges.json';
import LevelUpModal from '../components/LevelUpModal';

interface ChallengesProviderData {
  children: React.ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  awards?: Array<AwardsProps>;
}

interface ChallengesContext {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: null | {
    type: 'body' | 'eye';
    description: String;
    amount: Number;
  };
  experienceToNextLevel: number;

  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeModal: () => void;
}

interface AwardsProps {
  id: number;
  type: 'body' | 'eye';
  amount: number;
}

export const ChallengesContext = createContext({} as ChallengesContext);

export default function ChallengesProvider({
  children,
  ...rest
}: ChallengesProviderData) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  );

  const [awards, setAwards] = useState<Array<AwardsProps>>(rest.awards ?? []);

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function startNewChallenge() {
    const randomNewChallengeIndex = Math.floor(
      Math.random() * challenges.length
    );
    const challenge = challenges[randomNewChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo Desafio 🎉', {
        body: `Valendo ${challenge.amount} xp`,
        icon: 'favicon.png',
        silent: true,
        requireInteraction: false,
      });
    }
  }

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeModal() {
    setIsLevelUpModalOpen(false);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) return;

    const { amount, type } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
    setAwards([
      ...awards,
      {
        amount,
        id: 1,
        type,
      },
    ]);

    console.log(awards);
  }

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
    Cookies.set('awards', JSON.stringify(awards));
  }, [level, currentExperience, challengesCompleted, awards]);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        closeModal,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}
