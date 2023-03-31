import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from 'next/link'
import { getAllPostsMeta } from '@/lib/mdx'

const Blog = async () => {
  const posts = await getAllPostsMeta();
  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Blog Grid</h1>
        <div className='flex gap-6 mt-6'>
          {posts?.map(post => (
            <Link
              href={`blog/${post.slug}`}
              key={post?.title}
              className='p-8 rounded-md shadow-md'
            >
              <h3 className='text-xl font-semibold'>{post.title}</h3>
              <p className='mt-4 text-sm'>{post.author}</p>
              <time className='text-[12px] text-gray-400'>
                {post.publishDate}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Blog;
