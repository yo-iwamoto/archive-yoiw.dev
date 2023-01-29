type Model<T> = T & {
  _id: string;
  _sys: {
    raw: {
      createdAt: string;
      updatedAt: string;
      firstPublishedAt: string;
      publishedAt: string;
    };
    customOrder: number;
    createdAt: string;
    updatedAt: string;
  };
};

export type BlogPost = Model<{
  slug: string;
  title: string;
  content: string;
  created_at: string;
}>;
