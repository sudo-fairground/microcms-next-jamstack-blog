import Head from 'next/head'

const siteInfo = {
  site_name: "株式会社フェアグラウンド",
  url: "https://www.fairground.jp",
  title: "株式会社フェアグラウンド",
  description: "株式会社フェアグラウンドはWEBの制作会社です。",
};

const CommonMeta = ({ title = siteInfo.title, description = siteInfo.description, uri = "/" }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content={siteInfo.site_name} />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={description} />
    <meta property="og:locale" content="ja_JP" />
    <meta property="og:url" content={`${siteInfo.url}${uri}`} />
    <meta property="og:image" content={`${siteInfo.url}/ogp.jpg`} />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" href={`${siteInfo.url}${uri}`} />
  </Head>
);

export default CommonMeta