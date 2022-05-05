import Image from 'next/image';
import Link from 'next/link';

const Footer = () => (
  <footer className='max-w-xl flex justify-between mx-auto py-10'>
    <p className='text-gray-medium'>
      &copy; 2022 Nate Look - All Rights Reserved
    </p>
    <ul className='flex space-x-4'>
      {/* <li>
        <Link href='/'>
          <a>
            <Image
              alt='Linkedin Logo'
              src='/linkedin.svg'
              height='17px'
              width='17px'
            />
          </a>
        </Link>
      </li> */}
      <li>
        <a href='https://github.com/natelook' rel='noreferrer' target='_blank'>
          <Image
            alt='Github Logo'
            src='/github.svg'
            height='17px'
            width='17px'
          />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
