import React from "react";
import Image from "next/image";

import Style from "./Video.module.css";
import images from "../../img";

const Video = () => {
  return (
    <div className={Style.video}>
      <div className={Style.video_box}>
        <h1>
          <span>🎬</span> The Videos
        </h1>
        <p>
          Check out our hottest videos. View more and share more new perspective
          on just about any topic. Everyone&apos;s welcome.
        </p>

        <div className={Style.video_box_frame}>
            <div className={Style.video_box_frame_right}>Hey</div>
            <div className={Style.video_box_frame_left}>
                <Image src={images.NFTVideo} alt="NFT Video" className={Style.video_box_frame_left_img}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
