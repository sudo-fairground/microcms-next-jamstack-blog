import Link from "next/link";
import { client } from "../libs/client";
import CommonMeta from '../components/CommonMeta.js'
import Layout from '../components/Layout.js';
import styles from '../styles/pages/Home.module.scss';

const Home = ({ blog }) => (
  <>
    <CommonMeta />
    <Layout>
      <ul className={styles.blogList}>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  </>
);

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default Home