import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialYoutube,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

import Style from "./Footer.module.css";
import images from "../../img";
import { Discover, HelpCenter } from "../NavBar/index";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image src={images.logo} alt="Footer Logo" height={100} width={100} />
          <p>Something...</p>

          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>

        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>

        <div className={Style.subscribe}>
          <h3>Subscribe</h3>
          <div className={Style.subscribe_box}>
            <input type="email" name="" id="" placeholder="Enter your email"/>
            <RiSendPlaneFill className={Style.subscribe_box_send}/>
          </div>

          <div className={Style.subscribe_box_info}>
            <p>Discover, collect, and sell</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
