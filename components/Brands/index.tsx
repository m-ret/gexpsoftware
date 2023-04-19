import { Brand } from "@/types/brand";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "IBM",
    href: "https://www.ibm.com",
    image: "/images/brands/ibm.svg",
  },
  {
    id: 2,
    name: "Televisa",
    href: "https://www.televisa.com",
    image: "/images/brands/Logo_de_Grupo_Televisa.svg",
  },
  {
    id: 3,
    name: "Lineicons",
    href: "https://www.univision.com",
    image: "/images/brands/Univision_logo.svg",
  },
  {
    id: 4,
    name: "Universal",
    href: "https://www.universalmusic.com",
    image: "/images/brands/universal-3.svg",
  },
  {
    id: 5,
    name: "Provectus",
    href: "https://provectus.com",
    image: "/images/brands/provectus.svg",
  },
  {
    id: 6,
    name: "Automation",
    href: "https://www.automationanywhere.com",
    image: "/images/brands/Automation.svg",
  },
  {
    id: 7,
    name: "Prodigious",
    href: "https://www.prodigious.com",
    image: "/images/brands/prodigious-1.svg",
  },
  {
    id: 7,
    name: "MyBasePay",
    href: "https://mybasepay.com",
    image: "/images/brands/MyBasePay.svg",
  },
  {
    id: 8,
    name: "ChenMed",
    href: "https://www.chenmed.com",
    image: "/images/brands/chenMed.webp",
  },
];

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
          <h1 className="mb-5 text-2xl text-center font-bold text-black dark:text-white sm:text-3xl">
                  Our Clients
                </h1>
            
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

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (

    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill />
      </a>


    </div>
  
  );
};
