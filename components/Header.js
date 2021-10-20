import Link from "next/link";
import styles from '../styles/components/Header.module.scss';

const Header = () => (
  <header className={styles.header}>
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
  </header>
);

export default Header