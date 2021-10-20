import { client } from '../../libs/client';
import CommonMeta from '../../components/CommonMeta.js'
import Layout from '../../components/Layout.js';
import styles from '../../styles/pages/BlogId.module.scss';

const BlogId = ({ blog }) => (
  <>
    <CommonMeta title={blog.title} description={blog.description} uri={`/blog/${blog.id}/`} />
    <Layout>
      <article className="article">
        <div className="container">
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.publishedAt}>{blog.publishedAt}</p>
          <p className="category">{blog.category && `${blog.category.name}`}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}
            className={styles.post}
          />
        </div>
      </article>
    </Layout>
  </>
);

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
      pageClass: 'blogDetail',
    },
  };
};

export default BlogId