import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

import Style from "./Category.module.css";
import images from "../../img";

const Category = () => {
  const CategoryArr = [
    images.categoryBackground1,
    images.categoryBackground2,
    images.categoryBackground3,
    images.categoryBackground4,
    images.categoryBackground5,
  ];
  return (
    <div className={Style.category}>
      {CategoryArr.map((el, i) => (
        <div className={Style.category_box} key={i + 1}>
          <Image
            src={el}
            className={Style.category_box_img}
            alt="Background image"
            // width={350}
            height={150}
            style={{objectFit:"cover"}}
          />
          <div className={Style.category_box_title}>
            <span>
                <BsCircleFill />
            </span>
            <div className={Style.category_box_title_info}>
                <h4>Entertainment</h4>
                <small>2001 NFTs</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
