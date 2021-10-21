import Layout from '../components/Layout.js'

const Custom404 = () => (
  <Layout>
    <article className="article">
      <div className="container">
        <p>ページがありません。</p>
      </div>
    </article>
  </Layout>
);

export const getStaticProps = async () => {
  return {
    props: {
      pageClass: '404',
    },
  };
};

export default Custom404