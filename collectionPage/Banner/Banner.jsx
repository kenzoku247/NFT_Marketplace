import React, { useState } from "react";
import Image from "next/image";
import QRCode from "qrcode";
import { FaEyeSlash, FaEye } from "react-icons/fa";

import Style from "./Banner.module.css";

const Banner = ({ bannerImage }) => {
  const [src, setSrc] = useState("");
  const [eye, setEye] = useState(false);

  const generate = () => {
    QRCode.toDataURL("https://github.com/").then(setSrc);
  };

  const showQR = () => {
    if (!eye) {
      setEye(true);
      generate();
    } else {
      setEye(false);
    }
  };

  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}>
        <Image
          src={bannerImage}
          alt="background"
          className={Style.banner_img_img}
        />
      </div>

      <div className={Style.banner_img_mobile}>
        <Image
          src={bannerImage}
          alt="background"
          className={Style.banner_img_mobile_img}
        />
      </div>

      <div className={Style.banner_eye}>
        {!eye ? (
          <FaEyeSlash onClick={() => showQR()} className={Style.banner_eye_icon}/>
        ) : (
          <FaEye onClick={() => showQR()} className={Style.banner_eye_icon}/>
        )}
      </div>
      <div className={Style.banner_qrCode}>
        {eye && (
          <Image
            src={src}
            className={Style.banner_qrCode_img}
            width={100}
            height={100}
            alt="qrCode"
          />
        )}
      </div>
    </div>
  );
};

export default Banner;
