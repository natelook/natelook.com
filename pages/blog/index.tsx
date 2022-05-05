import Layout from '../../components/Layout';
import { POSTS_QUERY } from '../../lib/queries';
import client from '../../lib/sanity';
import dayjs from 'dayjs';
import Link from 'next/link';
import { PostProps } from '../../lib/types';

export default function BlogPage({ posts }: { posts: PostProps[] }) {
  return (
    <div>
      <h1>Blog</h1>
      <div className='mt-10 mb-24'>
        {posts.map((post) => (
          <Link href={`/blog/${post.slug.current}`} key={post._id}>
            <a>
              <div className='py-5'>
                <div className='flex justify-between items-center'>
                  <h2 className='m-0'>{post.title}</h2>
                  <span className='text-sm font-vcr text-gray-light block'>
                    {dayjs(post._createdAt).format('MM/DD/YY')}
                  </span>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

BlogPage.Layout = Layout;

export async function getStaticProps() {
  const posts = await client().fetch(POSTS_QUERY);
  return { props: { posts } };
}
