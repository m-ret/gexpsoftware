import { Blog } from '@/types/blog';
import { useState, useEffect } from 'react';
import { GetServerSideProps  } from 'next'

type Props = {
  blogs: Blog[];
};

const blogData= () => {
  const [postList, setPostList] = useState<Blog[]>([]);
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
      
      setPostList(blogPublic.data);
      setBlogData(blogDataArray);
    };
  
    fetchData();
  }, []);

  console.log(blogData);
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
export default blogData;
