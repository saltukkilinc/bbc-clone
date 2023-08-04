import React from "react";
import ForwardIcon from "../../assets/icons/forwardIcon";

const VideoSection = () => {
  return (
    <section className="bg-[url('https://ychef.files.bbci.co.uk/1200x675/p08h02kk.jpg')] bg-cover mt-4 ">
      <div className="bg-videoSBg flex justify-center">
        <div className="p-4 max-w-[1280px] cs5:py-8">
          <div className="mt-2 text-white flex items-center justify-between">
            <h2 className="font-black text-[44px]">REEL</h2>
            <button className="border-[1.5px] border-white  px-2 py-[6px] rounded-full flex items-center gap-1">
              Visit Reel
              <ForwardIcon />
            </button>
          </div>
          <p className="mt-[6px] mb-4 text-[15px] leading-[15px] text-white">
            The most amazing videos from the BBC
          </p>
          <ul className="flex flex-col gap-3 sm:flex-row">
            <li>
              <img
                src="https://ychef.files.bbci.co.uk/656x369/p0g4l2hy.jpg"
                alt="siberian image"
              />
              <div className="pt-2 pb-4 bg-white">
                <h3 className="text-[17px] leading-5 font-bold px-2">
                  46,000-year-old worms from Siberian permafrost come back to
                  life
                </h3>
              </div>
            </li>
            <li>
              <img
                src="https://ychef.files.bbci.co.uk/656x369/p0g4l2hy.jpg"
                alt="siberian image"
              />
              <div className="pt-2 pb-4 bg-white">
                <h3 className="text-[17px] leading-5 font-bold px-2">
                  46,000-year-old worms from Siberian permafrost come back to
                  life
                </h3>
              </div>
            </li>
            <li>
              <img
                src="https://ychef.files.bbci.co.uk/656x369/p0g4l2hy.jpg"
                alt="siberian image"
              />
              <div className="pt-2 pb-4 bg-white">
                <h3 className="text-[17px] leading-5 font-bold px-2">
                  46,000-year-old worms from Siberian permafrost come back to
                  life
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
