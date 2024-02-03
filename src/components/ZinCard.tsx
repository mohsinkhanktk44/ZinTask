import React from "react";
//These Are the types for this components.
type props = {
  title: string;
  description: string;
  img: string;
  className?: string;
};

const ZinCard = (props: props) => {
  const { title, description, img, className } = props;
  return (
    <div className={`flex justify-center items-center `}>
      <div
        className={`${className} flex justify-between items-start flex-col py-6 px-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
      >
        <img src={img} alt="" className="w-10 h-10" />
        <div className="flex flex-col mt-3 ">
          <h5 className="mb-2 text-[20px] font-bold  tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>

          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZinCard;
