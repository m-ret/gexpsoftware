import Image from 'next/image';
import { Brand } from '@/types/brand';

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;
  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className=" flex img-ticker -mx-4 relative h-10 w-full opacity-100 transition dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
export default SingleBrand;
