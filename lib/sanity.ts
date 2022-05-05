import { createClient } from 'next-sanity';

const config = {
  dataset: 'production',
  projectId: process.env.PROJECT_ID,
  apiVersion: '2021-10-21',
  useCdn: process.env.NODE_ENV === 'production',
};

const sanityClient = createClient(config);
const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const client = (usePreview?: boolean) =>
  usePreview ? previewClient : sanityClient;
export default client;
