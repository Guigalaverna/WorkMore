import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ChallengesProvider from '../contexts/ChallengeContext';
import { GetServerSideProps } from 'next';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  awards: Array<AwardsProps>;
}

interface AwardsProps {
  id: number;
  type: 'body' | 'eye';
  amount: number;
}

function ListAwards(awards?: Array<AwardsProps>) {
  if (!awards) return;

  console.log(awards);

  awards.map(award => {
    return (
      <div key={award.id}>
        <img src={`icons/${award.type}.svg`} alt={award.type} />
        <span style={{ color: 'green' }}>+ {award.amount} xp</span>
      </div>
    );
  });
}

export default function Home({
  level,
  challengesCompleted,
  currentExperience,
  awards,
}: HomeProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
      awards={awards}
    >
      <Sidebar pageActive="awards" />
      <div className={styles.container}>
        <Head>
          <title>Conquistas | Work.More</title>
        </Head>

        {awards ? (
          <>
            <ListAwards awards={awards} />
            <Link href="/">Voltar para a Home</Link>
          </>
        ) : (
          <>
            <h1>Noooo!!</h1>
            <strong>
              Você não possui desafios completados, complete ciclos para ter
              desafios
            </strong>
            <Link href="/">Voltar para a Home</Link>
          </>
        )}
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const {
    level,
    currentExperience,
    challengesCompleted,
    awards,
  } = ctx.req.cookies;

  if (!awards) {
    return {
      props: {
        level: Number(level),
        currentExperience: Number(currentExperience),
        challengesCompleted: Number(challengesCompleted),
      },
    };
  }

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      awards: Array.prototype.splice.call(JSON.parse(awards)),
    },
  };
};
