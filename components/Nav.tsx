import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';

const navigationLinks = [
  { name: 'Home', slug: '/' },
  { name: 'Blog', slug: '/blog' },
  { name: 'Projects', slug: '/projects' },
  { name: 'Contact', slug: '/contact' },
];

const Nav = () => {
  const router = useRouter();
  return (
    <div className='absolute top-0 w-full wrapper'>
      <div className='max-w-xl mx-auto flex justify-end py-8'>
        <ul className='flex space-x-4'>
          {navigationLinks.map((link) => (
            <li
              key={link.slug}
              className={classnames('font-vcr text-lg', {
                'text-white': router.pathname == link.slug,
                'text-gray-medium': router.pathname != link.slug,
              })}
            >
              <Link href={link.slug}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
