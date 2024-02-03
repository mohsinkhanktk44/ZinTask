import React from "react";
import ZinCard from "./ZinCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//@ts-nocheck
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";

const Slidercustom = () => {
  const carddata2 = [
    {
      title: "PDF to Word",
      description: "Easy convert pdf to word document",
      img: "/world.png",
    },
    {
      title: "PDF to PPT",
      description: "Convert pdf to powerpoint online",
      img: "/pdf1.png",
    },
    {
      title: "PDF to Excel",
      description: "Convert pdf to xl for free",
      img: "/xpdf.png",
    },
    {
      title: "PDF to jpeg",
      description: "Convert pdf file to a set of optimized JPG, PNG, BMP, G...",
      img: "/jpeg.png",
    },
    {
      title: "PDF to TXT",
      description: "Convert your pdf to TXT and extract text from your pdf",
      img: "/text.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const slider = React.useRef(null);

  return (
    <div className="relative w-full">
      <div className="absolute -left-1 z-10 top-1/2 transform -translate-y-1/2">
        <button onClick={() => slider?.current?.slickPrev()}>
          <BsArrowLeftCircle className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      <div className="absolute -right-1 z-10 top-1/2 transform -translate-y-1/2">
        <button onClick={() => slider?.current?.slickNext()}>
          <BsArrowRightCircle className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      <div className="w-full">
        <Slider ref={slider} {...settings}>
          {carddata2.map((item, index) => (
            <div key={index} className="flex py-3">
              <ZinCard
                title={item.title}
                description={item.description}
                img={item.img}
                className="w-[265px] h-[202px] hover:scale-105"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slidercustom;
