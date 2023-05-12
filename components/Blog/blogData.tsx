import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { Blog } from '@/types/blog';

type Props = {
  blogs: Blog[];
};

const BlogPage = ({ blogs }: Props) => {
  const [blogData, setBlogData] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:1337/api/blogs?populate=imagen`
        );
        const data = await res.json();
        if (data?.data) {
          const blogDataArray = data.data.map((blog: any) => {
            const imagen =
              blog.attributes?.imagen?.data?.attributes?.formats?.medium?.url;
            return {
              id: blog.id,
              title: blog.attributes?.title ?? '',
              imagen,
              paragraph: blog.attributes?.paragraph ?? '',
              author: blog.attributes?.author ?? '',
              tags: blog.attributes?.tags ?? [],
              publishDate: blog.attributes?.publishDate ?? '',
              url: blog.attributes?.url ?? ''
            };
          });
          setBlogData(blogDataArray);
          
        } else {
          console.error('Data from API is not in expected format:', data);
        }
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {blogData.map((blog: Blog) => (
        <div key={blog.id}>
          <h1>{blog.title}</h1>
          <img src={blog.imagen} alt="blog image" />
          <p>{blog.paragraph}</p>
          <p>{blog.author}</p>
          <p>{blog.publishDate}</p>
          <p>{blog.url}</p>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch(`http://localhost:1337/api/blogs?populate=imagen`);
  const postList = await res.json();

  return {
    props: {
      blogs: postList
    },
  };
};

export default BlogPage;
