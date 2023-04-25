import brandsData from "./constants";
import SingleBrand from "./SingleBrand";
import SectionTitle from "../Common/SectionTitle";




const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
          <SectionTitle
            title="Trust By"
            paragraph=""
            center
            mb="80px"
          />
            
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center rounded-md bg-dark py-8 px-8 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:py-[60px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s
              "
            >

            
              {brandsData.map((brand) => (
                
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

