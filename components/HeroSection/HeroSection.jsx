import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

import Style from "./HeroSection.module.css";
import { Button } from "../components_index";
import images from "../../img";

import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const HeroSection = () => {
  const { titleData } = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>{titleData} 🖼️</h1>
          <p>
            Discover the most outstanding article on all topics of NFT & your
            own stories and share them
          </p>
          <Button btnName="Start your search" />
        </div>

        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            // width={600}
            // height={600}
            style={{ userSelect: "none" }}
            className={Style.heroSection_box_right_img}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
