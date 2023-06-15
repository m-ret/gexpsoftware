'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import SharePost from '@/components/Blog/SharePost';
import TagButton from '@/components/Blog/TagButton';
import { showToast } from '@/utils/toast';
import SvgBlogDetail from '@/assets/blog-details-svg';
import Link from 'next/link';

function BlogDetail({ params }) {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blogs?filters[url]=${params.url}&populate=asset`
        );

        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }

        const data = await res.json();
        const page = data.data[0]?.attributes?.url;

        if (page && data?.data) {
          const blogDataArray = data.data.map(blog => {
            const { asset, url: urlViewBlog } = blog.attributes;

            return {
              id: blog.id,
              title: blog.attributes?.title ?? '',
              asset: asset?.data?.attributes?.formats?.medium?.url || '',
              paragraph: blog.attributes?.paragraph ?? '',
              richtext: blog.attributes.richtext ?? '',
              code: blog.attributes.code ?? '',
              highlights: blog.attributes.highlights ?? '',
              author: blog.attributes?.author ?? '',
              tags: blog.attributes?.tags ?? [],
              publishDate: blog.attributes?.publishDate ?? '',
              url: urlViewBlog
            };
          });

          setBlogData(blogDataArray);
          setLoading(false);
        } else {
          console.error('Data from API is not in the expected format:', {
            id: 'dataError'
          });
          showToast({
            type: 'error',
            message: 'Data from API is not in the expected format: ${id}'
          });
        }
      } catch (error) {
        console.error('Error fetching blog data. Error:', error);
        showToast({
          type: 'error',
          message: 'Error fetching blog data'
        });
      }
    };

    fetchData();
  }, []);

  const blogItem = blogData[0];

  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              {loading ? (
                <div className="flex h-40 items-center justify-center">
                  <div className="border-purple-500 h-16 w-16 animate-spin rounded-full border-b-2 border-t-2"></div>
                </div>
              ) : (
                <>
                  <div>
                    <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                      {blogItem?.title}
                    </h2>
                    <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                      <div className="flex flex-wrap items-center">
                        <div className="mb-5 mr-10 flex items-center justify-between">
                          <div className="w-full">
                            <h4 className="mb-1 text-base font-medium text-body-color">
                              By
                              <span> {blogItem?.author}</span>
                            </h4>
                          </div>
                        </div>
                        <div className="mb-5 flex items-center">
                          <p className="mr-5 flex items-center text-base font-medium text-body-color">
                            <span className="mr-5">
                              <SvgBlogDetail
                                name="svg1"
                                width="15" 
                                height="15" 
                                viewBox="0 0 15 15" 
                                className="fill-current"
                              />
                            </span>
                            {blogItem?.publishDate}
                          </p>
                        </div>
                      </div>
                      <div className="mb-5">
                        <Link
                          href="#0"
                          className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                        >
                          {blogItem?.tags}
                        </Link>
                      </div>
                    </div>
                    <div>
                      <p className="mb-10 text-center text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        {blogItem?.highlights}
                      </p>
                      <div className="mb-10 w-full overflow-hidden rounded">
                        <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                          {blogItem?.asset && (
                            <Image
                              src={blogItem?.asset}
                              alt="Image Blog"
                              fill
                              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 600px"
                              priority={true}
                            />
                          )}
                        </div>
                      </div>
                      <div className="mb-10">
                        {blogItem?.paragraph
                          .split('\n')
                          .map((paragraph, index) => (
                            <p key={index} className="mb-4">
                              {paragraph}
                            </p>
                          ))}
                      </div>
                      <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        <strong className="text-primary dark:text-white">
                          {blogItem.code}
                        </strong>
                      </p>
                      <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                        <p className="text-center text-base font-medium italic text-body-color"></p>
                        <ReactMarkdown>{blogItem?.richtext}</ReactMarkdown>
                        <span className="absolute left-0 top-0 z-[-1]">
                          <SvgBlogDetail
                            name="svg4"
                            width="132"
                            height="109"
                            viewBox="0 0 132 109"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          />
                        </span>
                        <span className="absolute bottom-0 right-0 z-[-1]">
                          <SvgBlogDetail
                            name="svg3"
                            width="53"
                            height="30"
                            viewBox="0 0 53 30"
                            fill="none"
                          />
                        </span>
                      </div>
                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        {blogItem.highlights}
                      </p>
                      <div className="items-center justify-between sm:flex">
                        <div className="mb-5">
                          <h5 className="mb-3 text-sm font-medium text-body-color">
                            Popular:
                          </h5>
                          <div className="flex items-center">
                            <TagButton text={blogItem?.tags} />
                          </div>
                        </div>
                        <div className="mb-5">
                          <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                            Share this post :
                          </h5>
                          <div className="flex items-center sm:justify-end">
                            <SharePost />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetail;
