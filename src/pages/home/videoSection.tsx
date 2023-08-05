import React from "react";
import ForwardIcon from "../../assets/icons/forwardIcon";

type VideoSectionTypes = {
  title: JSX.Element;
  subtitle: string;
  buttonText: string;
  titleList: {src: string, title: string}[];
}



const VideoSection = ({videoSectionData}: {videoSectionData: VideoSectionTypes}) => {
  return (
    <section className="bg-[url('https://ychef.files.bbci.co.uk/1200x675/p08h02kk.jpg')] bg-cover mt-4 ">
      <div className="bg-videoSBg flex justify-center">
        <div className="p-4 max-w-[1280px] cs5:py-8">
          <div className="mt-2 text-white flex items-center justify-between">
            {videoSectionData.title}
            <button className="border-[1.5px] border-white  px-2 py-[6px] rounded-full flex items-center gap-1">
              {videoSectionData.buttonText}
              <ForwardIcon />
            </button>
          </div>
          <p className="mt-[6px] mb-4 text-[15px] leading-[15px] text-white">
            {videoSectionData.subtitle}
          </p>
          <ul className="flex flex-col gap-3 sm:flex-row">
            {videoSectionData.titleList.map(item => (
               <li>
               <img
                 src={item.src}
                 alt="siberian image"
               />
               <div className="pt-2 pb-4 bg-white">
                 <h3 className="text-[17px] leading-5 font-bold px-2">
                   {item.title}
                 </h3>
               </div>
             </li>
            ))}
            
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
