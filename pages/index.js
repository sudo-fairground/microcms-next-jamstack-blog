import Link from "next/link";
import { client } from "../libs/client";
import CommonMeta from '../components/CommonMeta.js'
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const Home = ({ blog }) => (
  <div className="wrapper">
    <CommonMeta />
    <Header />
    <main className="main">
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
    <Footer />
  </div>
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