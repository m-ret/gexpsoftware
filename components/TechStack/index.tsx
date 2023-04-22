"use client";

import TechStackData from "./constants";
import SingleTechStack from "./SingleTechStack";
import SectionTitle from "../Common/SectionTitle";

const TechStacks = () => {
  
  return (
    <section className="pt-16">
      <div className="container">
        

        <div className="-mx-4 flex flex-wrap items-center">

          <div className="w-full px-4">
            <SectionTitle
            title="Techs We Handle"
            paragraph="Discover the cutting-edge technologies we handle to bring your business to the forefront of your industry."
            center
            mb="80px"
          />
                     
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center rounded-md bg-dark py-8 px-8 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:py-[60px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s
              "
              >

            
              {TechStackData.map((techstack) => (
                
                <SingleTechStack key={techstack.id} techstack={techstack} />
              ))}
            </div>
            
            
          </div>
        </div>
      </div>

    </section>
  );
};

export default TechStacks;

