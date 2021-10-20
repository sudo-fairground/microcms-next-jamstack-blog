import Head from 'next/head'

const siteinfo = {
  site_name: "株式会社フェアグラウンド",
  url: "https://www.fairground.jp",
  title: "株式会社フェアグラウンド",
  description: "株式会社フェアグラウンドはWEBの制作会社です。"
};

const CommonMeta = ({ title = siteinfo.title, description = siteinfo.description, uri = "/" }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content={siteinfo.site_name} />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={description} />
    <meta property="og:locale" content="ja_JP" />
    <meta property="og:url" content={`${siteinfo.url}${uri}`} />
    <meta property="og:image" content={`${siteinfo.url}/ogp.jpg`} />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
);

export default CommonMeta