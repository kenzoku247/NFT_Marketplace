import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

import Style from "./DaysComponents.module.css";

const DaysComponents = ({el, i}) => {
  return (
    <div className={Style.daysComponent}>
      <div className={Style.daysComponent_box}>
        <div className={Style.daysComponent_box_img}>
          <Image
            src={el.background}
            className={Style.daysComponent_box_img_img}
            alt="profile background"
            
          />
        </div>

        <div className={Style.daysComponent_box_profile}>
          <Image
            src={el.background}
            alt="profile"
            className={Style.daysComponent_box_img_1}
            
          />
          <Image
            src={el.background}
            alt="profile"
            className={Style.daysComponent_box_img_2}
            
          />
          <Image
            src={el.background}
            alt="profile"
            className={Style.daysComponent_box_img_3}
            
          />
        </div>

        <div className={Style.daysComponent_box_title}>
          <h2>Amazing Collections</h2>
          <div className={Style.daysComponent_box_title_info}>
            <div className={Style.daysComponent_box_title_info_profile}>
              <Image
                src={el.user}
                alt="avatar"
                width={30}
                height={30}
                
                className={Style.daysComponent_box_title_info_profile_img}
              />

              <p>Creator
                <span>Hong Phuc {""}
                    <small><MdVerified /></small>
                </span>
              </p>
            </div>

            <div className={Style.daysComponent_box_title_info_price}>
                <small>1.234 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents;
