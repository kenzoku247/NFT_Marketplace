import React from "react";
import Image from "next/image";

import Style from "./LikeProfile.module.css";
import images from "../../img";

const LikeProfile = () => {
  const imageArr = [images.user1];
  return (
    <div className={Style.like}>
      {imageArr.map((el, i) => (
        <div className={Style.like_box} key={i + 1}>
          <Image
            src={images.user1}
            key={i + 1}
            className={Style.like_box_img}
          />
        </div>
      ))}
    </div>
  );
};

export default LikeProfile;
