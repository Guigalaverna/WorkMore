import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ExperienceBar from '../components/ExperienceBar';
import CountdownProvider from '../contexts/CountdownContext';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';
import ChallengesProvider from '../contexts/ChallengeContext';
import { GetServerSideProps } from 'next';
import Sidebar from '../components/Sidebar';
import { User } from 'next-auth';
import { getSession } from 'next-auth/client';

interface IUser extends User {
  id: number;
  totalExperience: number;
  currentExperience: number;
  level: number;
  challengesCompleted: number;
}

interface HomeProps {
  user: IUser;
}

export default function Home({ user }: HomeProps) {
  return (
    <ChallengesProvider
      level={user.level}
      currentExperience={user.currentExperience}
      challengesCompleted={user.challengesCompleted}
    >
      <Sidebar pageActive="countdown" />
      <div className={styles.container}>
        <Head>
          <title>Início | Work.More</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile user={user} />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const response = await getSession({ req: ctx.req });

  if (!response) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: response.user,
    },
  };
};
