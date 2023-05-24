import React from "react";
import Image from "next/image";

import Style from "./NFTTabs.module.css";
// import

const NFTTabs = ({ dataTab, icon }) => {
  return (
    <div className={Style.NFTTabs}>
      {dataTab.map((el, i) => (
        <div className={Style.NFTTabs_box} key={i + 1}>
          <Image
            src={el}
            alt="profile image"
            className={Style.NFTTabs_box_img}
          />
          <div className={Style.NFTTabs_box_info}>
            <span>
              Offer by $123 by <span>Hong Phuc</span>
            {icon}
            </span>
            <small>May 19 - 11:11 PM</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTTabs;
