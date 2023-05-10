import { Blog } from '@/types/blog';
import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import SingleBlog from './SingleBlog';

type Props = {
  blogs: Blog[];
};

const BlogList = ({ blogs }: { blogs: Blog[] }) => (
  <div className="-mx-4 flex flex-wrap justify-center">
    {blogs.map((blog) => (
      <div key={blog.id} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <SingleBlog blog={blog} />
      </div>
    ))}
  </div>
);

const BlogData = ({ blogs }: Props) => {
  const [blogData, setBlogData] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:1337/api/blogs?populate=imagen`);
      const blogPublic = await res.json();
      console.log(blogPublic)
      const blogDataArray = blogPublic.data.map((blog: any) => {
        return {
          id: blog.id,
          title: blog.attributes.title,
          image: blog.attributes.image,
          paragraph: blog.attributes.paragraph,
          author: blog.attributes.author,
          tags: blog.attributes.tags,
          publishDate: blog.attributes.publishDate,
          url: blog.attributes.url

        }
      });
      
      setBlogData(blogDataArray);
    };
  
    fetchData();
  }, []);

  return <BlogList blogs={blogData} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch(`http://localhost:1337/api/blogs?populate=imagen`);
  const postList = await res.json();
   
  return {
    props: {
      blogs: postList.data
    },
  };
};

export default BlogData;
