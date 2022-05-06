import Layout from '../../components/Layout';
import ProjectsGrid from '../../components/ProjectsGrid';
import { PROJECTS_QUERY } from '../../lib/queries';
import client from '../../lib/sanity';

export interface ProjectProps {
  _id: string;
  title: string;
  description: string;
  name: string;
  url: string;
  displayUrl?: string;
  tags: string[];
}

export default function ProjectPage({
  projects,
}: {
  projects: ProjectProps[];
}) {
  return (
    <div>
      <h1 className='mb-10'>Projects</h1>
      <div className='pb-20'>
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
}

ProjectPage.Layout = Layout;

export async function getStaticProps() {
  const projects = await client().fetch(PROJECTS_QUERY);
  return { props: { projects } };
}
