'use client';

import { useState, useEffect } from 'react';
import { Blog } from '@/types/blog';
import Breadcrumb from '@/components/Common/Breadcrumb';
import SingleBlog from '@/components/Blog/SingleBlog';
import { truncateText } from '@/components/Blog/ShortenText';

const Blog = () => {
  const [blogData, setBlogData] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:1337/api/blogs?populate=imagen`
        );
        if (res.ok) {
          const data = await res.json();
          if (data?.data) {
            const blogDataArray = data.data.map((blog: any) => {
              const imagen =
                blog.attributes?.imagen?.data?.attributes?.formats?.medium?.url ||
                '';
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
        } else {
          throw new Error(`HTTP error ${res.status}`);
        }
      } catch (error) {
        console.error('Error fetching data from API:', error);
        // TODO: Mostrar un mensaje de error al usuario
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
        <div className="flex flex-wrap justify-center my-2">
          {blogData.length >= 3 && blogData.slice(-3).map(blog => (
            <div
              key={blog.id}
              className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 my-2"
            >
              <SingleBlog blog={{ ...blog, paragraph: truncateText(blog.paragraph, 150) }} />
            </div>
          ))}
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
