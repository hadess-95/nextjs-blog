import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import PostDate from '../../components/date';

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

export default function Post({ postData }) {
  return (
    <Layout>
      <article>
        <h1>{postData.title}</h1>
        <p>
            Ngày đăng: <PostDate dateString={postData.date} />
            </p>

        <div
          dangerouslySetInnerHTML={{
            __html: postData.contentHtml,
          }}
        />
      </article>
    </Layout>
  );
}