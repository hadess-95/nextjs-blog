import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import PostDate from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <p>Mình đang học Next.js trong Lab 5.</p>

      <Link href="/about">Giới thiệu về mình</Link>

      <section>
        <h2>Danh sách bài viết</h2>

        <ul>
          {allPostsData.map(({ id, title, date }) => (
            <li key={id}>
              <h3>
                 <Link href={`/posts/${id}`}>{title}</Link>
              </h3>
              <p>
                Ngày đăng: <PostDate dateString={date} />
                </p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}