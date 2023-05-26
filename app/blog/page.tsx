'use client'

import { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Breadcrumb from '@/components/Common/Breadcrumb';
import RepoPost from './[slug]/page';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=imagen`
      );

      if (res.ok) {
        const data = await res.json();
        const blogs = data.data.map((blog) => {
          const imagen =
            blog.attributes?.imagen?.data?.attributes?.formats?.medium?.url || '';
          const urlViewBlog = blog.attributes?.url;

          return {
            id: blog.id,
            title: blog.attributes?.title ?? '',
            imagen,
            paragraph: blog.attributes?.paragraph ?? '',
            author: blog.attributes?.author ?? '',
            tags: blog.attributes?.tags ?? [],
            publishDate: blog.attributes?.publishDate ?? '',
            url: urlViewBlog || 'no-url',
          };
        });

        setBlogData(blogs);
        setLoading(false);
      } else {
        toast.error(`HTTP error ${res.status}`);
      }
    };

    fetchData();
  }, []);

  const handleBlogClick = async (url) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs?&populate=imagen`);

    if (res.ok) {
      const data = await res.json();

      if (data.data && data.data.length > 0) {
        const blog = data.data[0];
        const imagen = blog.attributes?.imagen?.data?.attributes?.formats?.medium?.url || '';

        const newBlogData = {
          id: blog.id,
          title: blog.attributes?.title ?? '',
          imagen,
          paragraph: blog.attributes?.paragraph ?? '',
          author: blog.attributes?.author ?? '',
          tags: blog.attributes?.tags ?? [],
          publishDate: blog.attributes?.publishDate ?? '',
          url: blog.attributes?.url ?? 'no-url',
        };

        setBlogData([newBlogData]);
      } else {
        toast.error(`Blog with URL "${url}" not found.`);
      }
    } else {
      toast.error(`HTTP error ${res.status}`);
    }
  };

  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
          {loading ? (
                  <div className="flex justify-center items-center h-screen">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            ) : (
              // Mostrar los datos una vez que se hayan cargado
              blogData.map((blog) => (
                <div key={blog.id} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 my-2">
                  <RepoPost blog={blog} onClick={() => handleBlogClick(blog.url)} />
                </div>
              ))
            )}
        </div>
          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <a className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    ...
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
