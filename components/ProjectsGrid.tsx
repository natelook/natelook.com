import { motion } from 'framer-motion';
import { ProjectProps } from '../pages/projects';
import ProjectCard from './ProjectCard';

const animationContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.3, delay: 1 },
  },
};

export default function ProjectsGrid({
  projects,
}: {
  projects: ProjectProps[];
}) {
  return (
    <motion.div
      variants={animationContainer}
      initial='hidden'
      animate='show'
      className='grid md:grid-cols-2 gap-x-5 gap-y-10'
    >
      {projects.map((project) => (
        <ProjectCard {...project} key={project._id} />
      ))}
    </motion.div>
  );
}
