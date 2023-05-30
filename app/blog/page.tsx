'use client'

import { useState, useEffect, Suspense } from 'react';
import Breadcrumb from '@/components/Common/Breadcrumb';
import { useRouter } from 'next/navigation';
import RepoPost from './[slug]/page';
import { showToast } from '@/utils/toast';

const Blog = () => {
  const limit = 6; // Cantidad de blogs por página
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const router = useRouter();

  const fetchBlogData = async (page) => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=imagen&pagination[start]=${(page - 1) * limit}&pagination[limit]=${limit}&_sort=publishDate:DESC`
      );

      if (res.ok) {
        const response = await res.json();
        const { data, meta } = response;

        const blogs = data.map((blog) => {
          const { imagen, url: urlViewBlog } = blog.attributes;

          return {
            id: blog.id,
            title: blog.attributes.title ?? '',
            imagen: imagen?.data?.attributes?.formats?.medium?.url || '',
            paragraph: blog.attributes.paragraph ?? '',
            author: blog.attributes.author ?? '',
            tags: blog.attributes.tags ?? [],
            publishDate: blog.attributes.publishDate ?? '',
            url: urlViewBlog || 'no-url',
          };
        });

        setBlogData(blogs);
        setTotalPages(Math.ceil(meta.pagination.total / limit));
      } else {
        console.error('Invalid data format');
        showToast({
          type: 'error',
          message: 'Invalid data format',
        });
      }
    } catch (error) {
      showToast({
        type: 'error',
        message: 'An error occurred while fetching data...',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData(currentPage);
  }, [currentPage]);

  const handleBlogClick = async (url) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blogs?url=${url}&populate=imagen`
      );

      if (res.ok) {
        const data = await res.json();

        if (data && data.length > 0) {
          const blog = data[0];
          const { imagen } = blog.attributes;

          const newBlogData = {
            id: blog.id,
            title: blog.attributes.title ?? '',
            imagen: imagen?.data?.attributes?.formats?.medium?.url || '',
            paragraph: blog.attributes.paragraph ?? '',
            author: blog.attributes.author ?? '',
            tags: blog.attributes.tags ?? [],
            publishDate: blog.attributes.publishDate ?? '',
            url: blog.attributes.url ?? 'no-url',
          };

          setBlogData([newBlogData]);
        }
      } else {
        showToast({
          type: 'error',
          message: `HTTP error ${res.status}`,
        });
      }
    } catch (error) {
      console.error('An error occurred while fetching data');
      showToast({
        type: 'error',
        message: 'An error occurred while fetching data...',
      });
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    router.push(`/blog?page=${pageNumber}`);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <Suspense fallback={<Loading />}>
              {blogData.map((blog) => (
                <div key={blog.id} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 my-2">
                  <RepoPost blog={blog} onClick={() => handleBlogClick(blog.url)} />
                </div>
              ))}
            </Suspense>
          </div>
          <div className="wow fadeInUp -mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                {currentPage > 1 && (
                  <li className="mx-1">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                      Prev
                    </button>
                  </li>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                  <li className="mx-1" key={pageNumber}>
                    <button
                      onClick={() => handlePageChange(pageNumber)}
                      className={`flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white ${
                        currentPage === pageNumber ? 'bg-primary text-white' : ''
                      }`}
                    >
                      {pageNumber}
                    </button>
                  </li>
                ))}
                {currentPage < totalPages && (
                  <li className="mx-1">
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                      Next
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}

export default Blog;
