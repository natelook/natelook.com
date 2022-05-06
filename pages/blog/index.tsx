import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { POSTS_QUERY } from '../../lib/queries';
import client from '../../lib/sanity';
import dayjs from 'dayjs';
import Link from 'next/link';
import { PostProps } from '../../lib/types';

const staggerAnimationContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.3, delay: 0.7 },
  },
};

const animationItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function BlogPage({ posts }: { posts: PostProps[] }) {
  return (
    <div className=''>
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Blog
      </motion.h1>
      <motion.div
        variants={staggerAnimationContainer}
        initial='hidden'
        animate='show'
        className='mt-10 mb-24'
      >
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
      </motion.div>
    </div>
  );
}

BlogPage.Layout = Layout;

export async function getStaticProps() {
  const posts = await client().fetch(POSTS_QUERY);
  return { props: { posts } };
}
