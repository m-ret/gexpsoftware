import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          center
          title="Expertise"
          paragraph="
Our expertise includes custom software development, web development, and mobile development using cutting-edge technologies to deliver reliable, scalable, and secure solutions for businesses of all sizes and industries."
        />
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                fill
                src="/images/about/about-image-2.svg"
                alt="about image"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Custom Software Development
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-white sm:text-base sm:leading-relaxed">
                  We specialize in custom software development, providing
                  tailored solutions that meet unique business needs. Our expert
                  team delivers reliable, scalable, and secure solutions using
                  the latest technologies and best practices.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Web Development
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-white sm:text-base sm:leading-relaxed">
                  Our web development services deliver fast, secure, and
                  scalable solutions that help businesses establish a strong
                  online presence. We specialize in front-end and back-end
                  development, e-commerce solutions, and content management
                  systems.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Mobile Development
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-white sm:text-base sm:leading-relaxed">
                  We use the latest mobile development technologies and best
                  practices to ensure that our solutions are fast, secure, and
                  user-friendly. Our mobile applications are designed to provide
                  a seamless user experience and increase customer engagement,
                  loyalty, and retention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
