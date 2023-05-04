import Breadcrumb from '@/components/Common/Breadcrumb';
import Contact from '@/components/Contact';

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Talk To Us"
        description="Please don’t hesitate to reach out to us if you have any questions or concerns. We are here to assist and help find solutions."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
