import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="We are GEXP Software"
        description="Welcome to GEXP Software, a Costa Rica-based company that specializes in providing staff augmentation services for software projects. We were founded in 2015 by a skilled software engineer who was born and raised in the south of Costa Rica. Our founder's passion for frontend development inspired him to start GEXP Software with the goal of providing clients with the resources they need to achieve their goals.
        We pride ourselves on our reputation for delivering exceptional service and expertise to our clients. Our team of experienced professionals is dedicated to helping clients overcome their staffing challenges and achieve their goals. We are committed to providing the highest level of customer service and support, and we work tirelessly to ensure that our clients' needs are met."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
