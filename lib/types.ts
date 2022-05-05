export interface PostProps {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  body: { _type: string; key?: string };
  _createdAt: Date;
}

export interface StaticPath {
  slug: string;
}
