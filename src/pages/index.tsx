import Head from 'next/head';
import Profile from '../components/Profile';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Work.More</title>
      </Head>
      <div className={styles.homeContainer}>
        <aside>
          <img src="./logo.svg" alt="Logo Work More" />
          <div>
            <img src="icons/watch.svg" alt="Cronômetro" />
            <img src="icons/award.svg" alt="Conquistas" />
          </div>
          <button>
            <img src="icons/close.svg" alt="Sair" />
          </button>
        </aside>
        <section>
          <div>
            <Profile />
          </div>
          <div></div>
        </section>
      </div>
    </>
  );
}
