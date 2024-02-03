import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SliderCustom from "@/components/Slidercustom";
import ZinCard from "@/components/ZinCard";

import React from "react";

const index = () => {
  const carddata = [
    {
      title: "Edit Pdf",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
      img: "/pdfedit.png",
    },
    {
      title: "Crop Pdf",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
      img: "/pdfcrop.png",
    },
    {
      title: "Replace Text",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
      img: "/pdfsearch.png",
    },
    {
      title: "Rotate Pdf",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
      img: "/pdfrotate.png",
    },
  ];

  const carddata2 = [
    {
      title: "PDF to Word",
      description: "Easy convert pdf to word document",
      img: "/world.png",
    },
    {
      title: "PDF to PPT",
      description: "Convert pdf to  powerpiont online",
      img: "/pdf1.png",
    },
    {
      title: "PDF to Excel",
      description: "Convert pdf to xxl for free",
      img: "/xpdf.png",
    },
    {
      title: "PDF to jpeg",
      description: "Convert pdf file to a set of optomized JPG,PNG,BMP,G...",
      img: "/jpeg.png",
    },
    {
      title: "PDF to TXT",
      description: "Convert your pdf TXT and extract text from your pdf",
      img: "/text.png",
    },
  ];
  return (
    <div className=" flex flex-col justify-center items-start w-full">
      <Header />

      <div className="flex flex-col justify-center items-center mt-8">
        <div className="flex justify-center flex-col items-center w-[90%]">
          <p className="text-2xl font-bold w-full flex  justify-start">
            Your Bookmarks
          </p>
          <div className="flex justify-start items-center w-full gap-2 mt-3">
            {carddata.map((item, index) => {
              return (
                <ZinCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  img={item.img}
                  className="w-[265px] h-[202px] hover:shadow-md"
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full mt-8">
        <div className="flex justify-center items-start flex-col w-[90%]">
          <p className="text-2xl font-bold">Convert from pdf</p>
          <div className="flex justify-center items-center w-full flex-col">
            <SliderCustom />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-16 w-full">
        <div className="flex justify-center flex-col items-start w-[90%]">
          <p className="text-2xl font-bold">Convert From PDF</p>
          <div className="flex justify-start flex-wrap items-center w-full gap-2 mt-3">
            {carddata2.map((item, index) => {
              return (
                <ZinCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  img={item.img}
                  className="w-[265px] h-[202px]"
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-16 w-full">
        <div className="flex justify-center  flex-col items-start w-[90%]">
          <p className="text-2xl font-bold">Convert to PDF</p>
          <div className="flex flex-wrap justify-start items-center w-full gap-2 mt-3">
            {carddata2.map((item, index) => {
              return (
                <ZinCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  img={item.img}
                  className="w-[265px] h-[202px]"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#f1f3f4] pb-3 mt-12 w-full">
        <div className="flex justify-start w-[95%]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default index;
