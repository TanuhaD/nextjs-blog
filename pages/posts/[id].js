import { useRouter } from "next/router";
import FormattedDate from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
export default function Post({ postData }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Hernja kakaya-to...</div>;
  }
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="headingXl">{postData.title}</h1>
        <div className="lightText">
          <FormattedDate dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
