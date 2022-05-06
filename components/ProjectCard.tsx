import { motion } from 'framer-motion';
import { ProjectProps } from '../pages/projects';
import { MdLaunch } from 'react-icons/md';

const item = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectCard({
  title,
  description,
  url,
  tags,
  displayUrl,
}: ProjectProps) {
  return (
    <motion.div variants={item}>
      <div className='mb-0.5'>
        <h4 className='text-2xl font-bold m-0 leading-none'>{title}</h4>

        <a
          target='_blank'
          href={url}
          rel='noreferrer'
          className='text-yellow font-vcr flex space-x-1 items-center pr-5'
        >
          <span>{displayUrl ? displayUrl.slice(8) : url.slice(8)}</span>
          <span className='text-gray-medium'>
            <MdLaunch />
          </span>
        </a>
      </div>
      <p className='text-sm text-gray-light'>{description}</p>
      <div className='flex flex-wrap mt-1'>
        {tags.map((tag) => (
          <span key={tag} className='block mr-4 text-blue-light text-sm'>
            #{tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
