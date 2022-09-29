import Head from "next/head";

const SEO = ({ title }: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default SEO;

interface SEOProps {
  title: string;
}
