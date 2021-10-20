import Link from "next/link";
import styles from '../styles/components/Layout.module.scss';

const Layout = ({ children, home }) => (
  <>
    <header className={styles.header}>
      <div className={styles.container}>
        {home ? (
          <h1 className={styles.headerLogoH1}>home</h1>
        ) : (
          <div className={styles.headerLogo}>not home</div>
        )}
        <nav className={styles.headerNav}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main className={styles.main}>
      {children}
    </main>
    <footer className={styles.footer}>
      <div className="container">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  </>
);

export default Layout