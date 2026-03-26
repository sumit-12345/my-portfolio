import Head from "next/head";

type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

const SEO = ({
  title = process.env.NEXT_PUBLIC_SITE_TITLE,
  description = process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  url = process.env.NEXT_PUBLIC_SITE_URL,
  image,
}: SEOProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_TITLE} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    {image && <meta property="og:image" content={image} />}
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content={new URL(url || "https://example.com").hostname} />
    <meta property="twitter:url" content={url} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {image && <meta name="twitter:image" content={image} />}
  </Head>
);

export default SEO;
