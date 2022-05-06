import Image from 'next/image';
import Link from 'next/link';

const Footer = () => (
  <footer className='max-w-xl flex justify-between items-center mx-auto py-10 wrapper'>
    <p className='text-gray-medium text-sm md:text-base'>
      &copy; 2022 Nate Look - All Rights Reserved
    </p>
    <ul className='flex space-x-4'>
      {/* <li>
        <a
          href='https://linkedin.com/natelook'
          rel='noreferrer'
          target='_blank'
          className='block h-5 w-5'
        >
          <Image
            alt='Linkedin Logo'
            src='/linkedin.svg'
            height='17px'
            width='17px'
            layout='responsive'
          />
        </a>
      </li> */}
      <li>
        <a
          href='https://github.com/natelook'
          rel='noreferrer'
          target='_blank'
          className='block h-5 w-5'
        >
          <Image
            alt='Github Logo'
            src='/github.svg'
            height='17px'
            width='17px'
            layout='responsive'
          />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
