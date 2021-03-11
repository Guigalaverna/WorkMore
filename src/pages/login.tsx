import Head from 'next/head';
import styles from '../styles/Login.module.css';

import { signIn, useSession } from 'next-auth/client';

export default function Login() {
  const [loading, session] = useSession();

  return (
    <>
      <Head>
        <title>Login | Work.More</title>
      </Head>

      <div className={styles.container}>
        <img src="login_background.svg" alt="Work More" />

        <div className={styles.inputGroup}>
          <img src="logo_full.svg" alt="Logo Completa Work More" />
          <div>
            <h1>Bem-vindo</h1>
            <p>Entre com suas redes-sociais</p>
            <div className={styles.buttonsContainer}>
              <button
                className={styles.googleButton}
                onClick={() =>
                  signIn('google', {
                    callbackUrl: '/',
                  })
                }
              >
                <img src="icons/google.png" alt="Entrar com o Google" />
              </button>
              <button
                className={styles.facebookButton}
                onClick={() =>
                  signIn('facebook', {
                    callbackUrl: 'https://workmore.vercel.app/',
                  })
                }
              >
                <img src="icons/facebook.svg" alt="Entrar com o Facebook" />
              </button>
              <button
                className={styles.githubButton}
                onClick={() =>
                  signIn('github', {
                    callbackUrl: 'https://workmore.vercel.app/',
                  })
                }
              >
                <img src="icons/github.svg" alt="Entrar com o Github" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
