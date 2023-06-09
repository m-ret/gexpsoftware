import Image from 'next/image';
import { TechStackType } from '@/types/techstack';

const SingleTechStack = ({ techstack }: { techstack: TechStackType }) => {
  const { image, name } = techstack;

  return (
    <div className="mx-3 flex w-full max-w-[120px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-100 transition dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};

export default SingleTechStack;
