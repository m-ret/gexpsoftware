'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Blog } from '@/types/blog';
import { useRouter } from 'next/navigation';

interface SingleBlogProps {
  blog: Blog;
  onClick: () => Promise<void>;
  lastThreeTags: string[]; // Agrega la nueva prop lastThreeTags
}

const RepoPost = ({ blog, onClick, lastThreeTags  }: SingleBlogProps) => {
  const router = useRouter();
  const { title, asset, paragraph, author, tags, publishDate, url } = blog;

  if (!blog) {
    return null; // Otra opción es mostrar un mensaje de error
  }

  const handleClick = async () => {
    await onClick();
    router.push(`/blog-details/${blog.url}`);
  };
  
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link href={`/blog-details/${blog.url}`} passHref className="relative block h-[220px] w-full">
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags}
          </span>
          <Image
            src={asset}
            alt="Image Blog"
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 600px"
            priority={true}
          />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={`/blog-details/${blog.url}`}
              passHref
              className="mb-4 block truncate text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
              onClick={handleClick}
            >
              {title}
            </Link>
          </h3>
          <p className="paragraph mb-6 line-clamp-4 overflow-hidden border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex-1 flex-shrink-0 items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {author}
                </h4>
                <p className="text-xs text-body-color">{author}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RepoPost;
