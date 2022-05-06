import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTwitter, BsDiscord } from 'react-icons/bs';

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

export default function ContactPage() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className='text-center text-yellow'
      >
        Let&apos;s get to work
      </motion.h1>
      <motion.ul
        variants={staggerAnimationContainer}
        initial='hidden'
        animate='show'
        className='mt-16 space-y-5'
      >
        {/* <form>
          <input type='text' placeholder='Placeholder...' />
        </form> */}
        <motion.li variants={animationItem} className='contact-button'>
          <AiOutlineMail />
          <a href='mailto:nate@natelook.com'>nate@natelook.com</a>
        </motion.li>
        <motion.li variants={animationItem} className='contact-button'>
          <BsTwitter />
          <a
            href='https://twitter.com/natelook'
            rel='noreferrer'
            target='_blank'
          >
            @natelook
          </a>
        </motion.li>
        <motion.li variants={animationItem} className='contact-button'>
          <BsDiscord />
          <a>nate#2162</a>
        </motion.li>
      </motion.ul>
    </div>
  );
}

ContactPage.Layout = Layout;
