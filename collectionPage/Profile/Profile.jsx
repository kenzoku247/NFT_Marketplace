import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialYoutube
} from "react-icons/ti";

import Style from "./Profile.module.css";
import images from "../../img";

const Profile = () => {
  const cardArr = [1, 2, 3, 4];
  return (
    <div className={Style.profile}>
      <div className={Style.profile_box}>
        <div className={Style.profile_box_left}>
          <Image
            src={images.nft_image_1}
            alt="NFT Image"
            className={Style.profile_box_left_img}
          />

          <div className={Style.profile_box_left_social}>
            <a href="">
              <TiSocialFacebook />
            </a>
            <a href="">
              <TiSocialYoutube />
            </a>
          </div>
        </div>
        <div className={Style.profile_box_middle}>
          <h1>Awesome NFTs Collection</h1>
          <p>
            Karafuru is home 5,555 generate arts where colors reign supreme.
            Leave the drab reality and enter the world of Karafuru ny Museum of
            Toys.
          </p>
          <div className={Style.profile_box_middle_box}>
            {cardArr.map((el, i) => (
              <div className={Style.profile_box_middle_box_item} key={i + 1}>
                <small>Floor price</small>
                <p>${i + 1}95,1234</p>
                <span>+ {i + 2}.11%</span>
              </div>
            ))}
          </div>
        </div>
        <div className={Style.profile_box_right}></div>
      </div>
    </div>
  );
};

export default Profile;
