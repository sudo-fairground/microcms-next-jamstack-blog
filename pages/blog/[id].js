import { client } from '../../libs/client';
import CommonMeta from '../../components/CommonMeta.js'
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import styles from '../../styles/Home.module.scss';

export default function BlogId({ blog }) {
  return (
    <div className="wrapper">
      <CommonMeta title={blog.title} description={blog.description} uri={`/blog/${blog.id}/`} />
      <Header />
        <main className={`main ${styles.main}`}>
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.publishedAt}>{blog.publishedAt}</p>
          <p className="category">{blog.category && `${blog.category.name}`}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}
            className={styles.post}
          />
        </main>
      <Footer />
    </div>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}/`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};