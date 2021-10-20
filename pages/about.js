import Link from "next/link";
import CommonMeta from '../components/CommonMeta.js'
import Layout from '../components/Layout.js';

const About = () => (
  <>
    <CommonMeta title="会社概要 | 株式会社フェアグラウンド" description="株式会社フェアグラウンドの会社概要です。" uri="/about/" />
    <Layout>
      <h1>会社概要</h1>
    </Layout>
  </>
);

export default About