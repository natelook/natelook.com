import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
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
          <h1>Nate Look</h1>
          <h2>Web Developer</h2>
          <p className='text-gray-light leading-7'>{config.heroText}</p>
        </div>
        <div>
          <h3 className='font-vcr text-blue-light text-lg mb-1.5'>
            Latest Projects
          </h3>
          <ProjectsGrid projects={projects} />
          <div className='flex justify-center mt-20 mb-24'>
            <Link href='/projects'>
              <a className='bg-blue-dark px-5 py-2 rounded font-bold text-lg'>
                View All Projects
              </a>
            </Link>
          </div>
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
