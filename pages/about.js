import Link from "next/link";
import CommonMeta from '../components/CommonMeta.js'
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function About() {
  return (
    <div className="wrapper">
      <CommonMeta title="会社概要 | 株式会社フェアグラウンド" description="株式会社フェアグラウンドの会社概要です。" uri="/about/" />
      <Header />
      <main className="main">
        <h1>会社概要</h1>
      </main>
      <Footer />
    </div>
  );
}
