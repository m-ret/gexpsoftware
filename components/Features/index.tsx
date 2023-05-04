'use client';

import SectionTitle from '../Common/SectionTitle';
import SingleFeature from './SingleFeature';
import featuresData from './featuresData';

const Features = () => {
  return (
    <section id="features" className="bg-primary/[.03] py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          center
          title="Services"
          paragraph="As a solution-oriented company we offer a diverse range of expert solutions to help drive your business forward. Our experienced team is dedicated to understanding your unique needs and providing tailored services to help you achieve your goals. Explore our services and let's work together to unlock your full potential."
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
          {featuresData.map(feature => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
