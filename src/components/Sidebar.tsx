import styles from '../styles/components/Sidebar.module.css';

import Link from 'next/link';

interface SidebarProps {
  pageActive: 'countdown' | 'awards';
}

export default function Sidebar({ pageActive }: SidebarProps) {
  return (
    <div className={styles.container}>
      <img src="logo.svg" alt="Logo WorkMore" />
      <div>
        {pageActive === 'countdown' ? (
          <div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '5rem',
                }}
              >
                <span className={styles.pageMarkerActive}></span>
                <svg
                  width="16"
                  style={{ margin: '1rem 0' }}
                  height="25"
                  viewBox="0 0 16 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 19.5209C11.866 19.5209 15 16.3869 15 12.5209C15 8.65487 11.866 5.52086 8 5.52086C4.13401 5.52086 1 8.65487 1 12.5209C1 16.3869 4.13401 19.5209 8 19.5209Z"
                    stroke="#5965E0"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 9.52085V12.5209L9.5 14.0209"
                    stroke="#5965E0"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.46997 6.65002L3.81997 2.82002C3.86488 2.32309 4.0939 1.8609 4.46209 1.52417C4.83027 1.18744 5.31102 1.00049 5.80997 1.00002H10.16C10.6606 0.997985 11.1439 1.18381 11.5142 1.52079C11.8845 1.85776 12.1149 2.32137 12.16 2.82002L12.51 6.65002"
                    stroke="#5965E0"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.14 21.5087L12.7895 17.6787C9.26302 20.0969 6.73695 20.0581 3.21051 17.6787L3.80999 21.5087C3.85504 22.0073 4.08549 22.4709 4.45579 22.8079C4.82609 23.1449 5.30932 23.3307 5.80999 23.3287H10.14C10.6407 23.3307 11.1239 23.1449 11.4942 22.8079C11.8645 22.4709 12.0949 22.0073 12.14 21.5087Z"
                    stroke="#5965E0"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <br />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '5rem',
                }}
              >
                <span className={styles.pageMarkerNotActive}></span>
                <Link href="/awards">
                  <svg
                    width="16"
                    height="24"
                    viewBox="0 0 16 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                      stroke="#E5E5E5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.21 13.89L3 23L8 20L13 23L11.79 13.88"
                      stroke="#E5E5E5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
                <br />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '5rem',
                }}
              >
                <span className={styles.pageMarkerNotActive}></span>
                <Link href="/" prefetch={true}>
                  <svg
                    width="16"
                    style={{ margin: '1rem 0' }}
                    height="25"
                    viewBox="0 0 16 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 19.5209C11.866 19.5209 15 16.3869 15 12.5209C15 8.65487 11.866 5.52086 8 5.52086C4.13401 5.52086 1 8.65487 1 12.5209C1 16.3869 4.13401 19.5209 8 19.5209Z"
                      stroke="#E5E5E5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 9.52085V12.5209L9.5 14.0209"
                      stroke="#E5E5E5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.46997 6.65002L3.81997 2.82002C3.86488 2.32309 4.0939 1.8609 4.46209 1.52417C4.83027 1.18744 5.31102 1.00049 5.80997 1.00002H10.16C10.6606 0.997985 11.1439 1.18381 11.5142 1.52079C11.8845 1.85776 12.1149 2.32137 12.16 2.82002L12.51 6.65002"
                      stroke="#E5E5E5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.14 21.5087L12.7895 17.6787C9.26302 20.0969 6.73695 20.0581 3.21051 17.6787L3.80999 21.5087C3.85504 22.0073 4.08549 22.4709 4.45579 22.8079C4.82609 23.1449 5.30932 23.3307 5.80999 23.3287H10.14C10.6407 23.3307 11.1239 23.1449 11.4942 22.8079C11.8645 22.4709 12.0949 22.0073 12.14 21.5087Z"
                      stroke="#E5E5E5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
                <br />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '5rem',
                }}
              >
                <span className={styles.pageMarkerActive}></span>
                <svg
                  width="16"
                  height="24"
                  viewBox="0 0 16 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                    stroke="#5965E0"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.21 13.89L3 23L8 20L13 23L11.79 13.88"
                    stroke="#5965E0"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <br />
              </div>
            </div>
          </div>
        )}
      </div>
      <button>
        <img src="icons/close.svg" alt="Sair" />
      </button>
    </div>
  );
}
