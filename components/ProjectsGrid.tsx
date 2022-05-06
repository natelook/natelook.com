import { ProjectProps } from '../pages/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid({
  projects,
}: {
  projects: ProjectProps[];
}) {
  return (
    <div className='grid md:grid-cols-2 gap-x-5 gap-y-10'>
      {projects.map((project) => (
        <ProjectCard {...project} key={project._id} />
      ))}
    </div>
  );
}
