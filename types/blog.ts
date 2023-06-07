type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  asset: string;
  code: string;
  highlights: string;
  richtext: string;
  author: string;
  tags: string[];
  publishDate: string;
  url: string;
  onClick: (event: MouseEvent) => Promise<void>;
};
