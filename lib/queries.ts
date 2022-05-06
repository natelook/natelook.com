import groq from 'groq';

export const PROJECTS_QUERY = groq`
*[_type == "project"] {
  _id,
  title,
  description,
  url,
  displayUrl,
  tags
}
`;

export const PROJECT_ROUTES = groq`
  *[_type == "post"] {
    "slug": slug.current,
  }
`;

export const POSTS_QUERY = groq`
  *[_type == "post"] {
    _id,
    title,
    slug,
    publishedAt,
    _createdAt,
    body
  }
`;

export const SINGLE_POST = groq`
  *[_type == "post" && slug.current == $slug] {
    _id,
    title,
    slug,
    publishedAt,
    _createdAt,
    body
  }
`;

export const POST_ROUTES = groq`
  *[_type == "post"] {
    "slug": slug.current,
  }
`;

export const SITE_CONFIG = groq`
  *[_type == "config"][0]
`;
