import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function Custom404() {
  return (
    <div className="wrapper">
      <Header />
        <main className="main">
          <p>ページがありません。</p>
        </main>
      <Footer />
    </div>
  );
}