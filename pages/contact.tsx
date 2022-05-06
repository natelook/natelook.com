import Layout from '../components/Layout';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTwitter, BsDiscord } from 'react-icons/bs';

export default function ContactPage() {
  return (
    <div>
      <h1 className='text-center text-yellow'>Let&apos;s get to work</h1>
      <div className='mt-16 space-y-5'>
        {/* <form>
          <input type='text' placeholder='Placeholder...' />
        </form> */}
        <div className='contact-button'>
          <AiOutlineMail />
          <a href='mailto:nate@natelook.com'>nate@natelook.com</a>
        </div>
        <div className='contact-button'>
          <BsTwitter />
          <a
            href='https://twitter.com/natelook'
            rel='noreferrer'
            target='_blank'
          >
            @natelook
          </a>
        </div>
        <div className='contact-button'>
          <BsDiscord />
          <a>nate#2162</a>
        </div>
      </div>
    </div>
  );
}

ContactPage.Layout = Layout;
