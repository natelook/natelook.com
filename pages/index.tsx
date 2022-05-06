import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ProjectsGrid from '../components/ProjectsGrid';
import { PROJECTS_QUERY, SITE_CONFIG } from '../lib/queries';
import client from '../lib/sanity';
import { ProjectProps } from './projects';

interface HomePageProps {
  projects: ProjectProps[];
  config: {
    heroText: string;
  };
}

export default function Home({ projects, config }: HomePageProps) {
  return (
    <div className=''>
      <div className='max-w-xl mx-auto'>
        <div className='mb-12'>
          <div className='flex justify-between items-center py-10'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <h1>Nate Look</h1>
              <h2>Web Developer</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className='md:mr-5 drop-shadow-lg'
            >
              <Image
                src='/headshot500.jpg'
                height='100'
                width='100'
                alt='Headshot of Nate'
                className='rounded-full'
              />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='text-gray-light leading-7'
          >
            {config.heroText}
          </motion.p>
        </div>
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className='font-vcr text-blue-light text-lg mb-1.5'
          >
            Latest Projects
          </motion.h3>
          <ProjectsGrid projects={projects} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className='flex justify-center mt-20 mb-24'
          >
            <Link href='/projects'>
              <a className='bg-blue-dark px-5 py-2 rounded font-bold text-lg'>
                View All Projects
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

Home.Layout = Layout;

export async function getStaticProps() {
  const projects = await client().fetch(PROJECTS_QUERY);
  const config = await client().fetch(SITE_CONFIG);
  return { props: { projects, config } };
}
