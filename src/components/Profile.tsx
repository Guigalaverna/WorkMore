import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

import { User } from 'next-auth';

interface IUser extends User {
  id: number;
  totalExperience: number;
  currentExperience: number;
  level: number;
  challengesCompleted: number;
}

interface ProfileProps {
  user: IUser;
}

export default function Profile({ user }: ProfileProps) {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src={user.image} alt={user.name} />
      <div>
        <strong>{user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
