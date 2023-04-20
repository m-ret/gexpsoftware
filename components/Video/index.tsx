"use client";
import { Code } from "@/types/code";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

{/*import ModalVideo from "react-modal-video";*/}

const codesData: Code[] = [
  {
    id: 1,
    name: "css",
    image: "/images/video/css-3.svg",
  },
  {
    id: 2,
    name: "dart",
    image: "/images/video/dart.svg",
  },
  {
    id: 3,
    name: "gopher",

    image: "/images/video/go-8.svg",
  },
  {
    id: 4,
    name: "html",
    
    image: "/images/video/html-1.svg",
  },
  {
    id: 5,
    name: "Java",
    
    image: "/images/video/java-14.svg",
  },
  {
    id: 6,
    name: "javascript", 
    image: "/images/video/logo-javascript.svg",
  },
  {
    id: 7,
    name: "cmas",
    
    image: "/images/video/cmas.svg",
  },
  {
    id: 8,
    name: "csharp",
    
    image: "/images/video/csharp.svg",
  },
  {
    id: 9,
    name: "php",
    
    image: "/images/video/icons8-logo-php.svg",
  },
  {
    id: 10,
    name: "php",
    
    image: "/images/video/python-5.svg",
  },
  {
    id: 11,
    name: "react",
    
    image: "/images/video/react-2.svg",
  },
  {
    id: 12,
    name: "ruby",
    
    image: "/images/video/ruby.svg",
  },
  {
    id: 13,
    name: "rust",
    
    image: "/images/video/rust.svg",
  },

  {
    id: 14,
    name: "typescript",
    
    image: "/images/video/typescript-2.svg",
  },
  {
    id: 15,
    name: "swift",
    
    image: "/images/video/swift-15.svg",
  }
];

const Video = () => {
  const [isOpen, setOpen] = useState(false);

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

            
              {codesData.map((code) => (
                
                <SingleCode key={code.id} code={code} />
              ))}
            </div>
            
            
          </div>
        </div>
      </div>

    {/*  <ModalVideo
        channel="youtube"
        autoplay={false}
        start={false}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
        
  /> */}

     {/* <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src="/images/video/shape.svg" alt="shape" className="w-full" />
</div>*/}
    </section>
  );
};

export default Video;

const SingleCode = ({ code }: { code: Code }) => {
  const { image, name } = code;

  return (

    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href="/"
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill />
      </a>


    </div>
  
  );
};
