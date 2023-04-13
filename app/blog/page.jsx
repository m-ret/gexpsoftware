import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/mdx";
import SingleBlog from "../../components/Blog/SingleBlog";
import SectionTitle from "../../components/Common/SectionTitle";

const Page = async () => {
  const posts = await getAllPostsMeta();
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
    <div className="container">
    <Breadcrumb
        pageName="Blog Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
      {posts?.map((post) => (
              <Link
                href={`blog/posts/${post.slug}`}
                key={post?.title}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="mt-4 text-sm">{post.author}</p>
                <time className="text-gray-400 text-[12px]">
                  {post.publishDate}
                </time>
              </Link>
            ))}
      </div>
    </div>
  </section>
  );
};

export default Page;
