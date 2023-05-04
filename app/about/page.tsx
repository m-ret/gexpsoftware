import AboutSectionOne from '@/components/About/AboutSectionOne';
import AboutSectionTwo from '@/components/About/AboutSectionTwo';
import Breadcrumb from '@/components/Common/Breadcrumb';

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="We are Gexp Software"
        description="Welcome to Gexp Software, a Costa Rica-based company. A trusted partner for businesses looking to optimize their operations, achieve sustainable growth, and stay ahead of the competition.

        We are a team of experts with years of experience in providing comprehensive solutions for businesses of all sizes and industries. Our services range from outsourcing and staff augmentation to software development and consulting expertise, ensuring that we have the skills and expertise to meet all your business needs.

        At Gexp, we take a collaborative approach to working with our clients. We listen closely to your unique challenges, goals, and objectives, and work together to develop customized solutions that deliver measurable results.

        We pride ourselves on our commitment to quality, efficiency, and cost-effectiveness. We are dedicated to delivering superior results that help our clients achieve their business objectives and stay ahead of the competition.

        Whether you are looking to optimize your operations, expand your market reach, or transform your business with the latest technologies, we have the expertise and experience to help you succeed. Contact us today to learn more about how we can help your business thrive."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
