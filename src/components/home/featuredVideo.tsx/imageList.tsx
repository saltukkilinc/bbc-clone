import React from "react";
import ImageListItem from "./imageListItem";
import { FEATURED_VIDEO_DUMMY } from "../../../data";

const ImageList = () => {
  return (
    <ul className="flex flex-col gap-2">
      {FEATURED_VIDEO_DUMMY.map((item) => (
        <ImageListItem
          title={item.title}
          topic={item.topic}
          bLColor="border-l-bbcBlue"
          src={item.src}
        />
      ))}
    </ul>
  );
};

export default ImageList;
