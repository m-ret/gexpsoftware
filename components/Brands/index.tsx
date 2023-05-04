import brandsData from './constants';
import SingleBrand from './SingleBrand';
import SectionTitle from '../Common/SectionTitle';

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <SectionTitle
              title="Trust By"
              paragraph="Trusted by world-class companies. Excellence and innovation at the core of everything we do."
              center
              mb="80px"
            />
            <div
              data-wow-delay=".1s"
              className="wow fadeInUp -mx-4 flex flex-wrap items-center justify-center overflow-hidden rounded-md bg-dark px-8 py-8 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:px-[50px] md:py-[60px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
            >
              {brandsData.map(brand => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
