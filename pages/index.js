import Link from "next/link"
import Image from "next/image"
import { client } from "../libs/client"
import CommonMeta from '../components/CommonMeta.js'
import Layout from '../components/Layout.js'

const Home = ({ blog }) => (
  <>
    <CommonMeta />
    <Layout home>
      <section className="section section-blog">
        <div className="container">
          <div className="blog-head-image">
            <Image
              src="/images/home/blogHead.png"
              alt="サイトイメージ"
              width={444}
              height={326}
            />
          </div>
          <ul className="blog-list">
            {blog.map((blog) => (
              <li key={blog.id}>
                <Link href={`/blog/${blog.id}`}>
                  <a>{blog.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  </>
);

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
      pageClass: 'home',
    },
  };
};

export default Home