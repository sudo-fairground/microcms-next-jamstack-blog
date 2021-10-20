import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import styles from '../styles/components/Layout.module.scss';

const Layout = ({ children }) => (
  <div className="wrapper">
    <Header />
    <main className={styles.main}>
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout