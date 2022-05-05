import { PortableText } from '@portabletext/react';
import dayjs from 'dayjs';
import { GetStaticPropsContext } from 'next';
import Layout from '../../components/Layout';
import { POST_ROUTES, SINGLE_POST } from '../../lib/queries';
import client from '../../lib/sanity';
import { PostProps, StaticPath } from '../../lib/types';

interface BlogPageProps {
  post: PostProps;
}

export default function BlogPostPage({ post }: BlogPageProps) {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='mb-0'>{post.title}</h1>
        <span className='mb-0 font-vcr text-blue-light'>
          {dayjs(post._createdAt).format('MM/DD/YY')}
        </span>
      </div>
      <div className='prose text-white prose-h2:text-yellow prose-h2:font-vcr'>
        <PortableText value={post.body} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const routes: StaticPath[] = await client().fetch(POST_ROUTES);
  const paths = routes.map((route) => ({
    params: { slug: route.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params?.slug;
  const post: PostProps[] = await client().fetch(SINGLE_POST, { slug });
  return { props: { post: post[0] } };
}

BlogPostPage.Layout = Layout;
