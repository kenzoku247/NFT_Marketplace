import React, { useState } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import { TiSocialFacebook, TiSocialYoutube } from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";

import Style from "./AuthorProfileCard.module.css";
import images from "../../img";
import { Button } from "../../components/components_index";

const AuthorProfileCard = ({currentAccount}) => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  const copyAddress = () => {
    const copyText = document.getElementById("myInput");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

  const openShare = () => {
    if (!share) {
      setShare(true);
      setReport(false);
    } else {
      setShare(false);
    }
  };

  const openReport = () => {
    if (!report) {
      setReport(true);
      setShare(false);
    } else {
      setReport(false);
    }
  };

  const listId = ["openShare", "openReport"];
  const listSet = ["setShare", "setReport"];

  if (typeof window !== "undefined") {
    window.addEventListener("click", function (e) {
      listId.map((f) => {
      if (document.getElementById(f) && !document.getElementById(f).contains(e.target)) {
        eval(listSet[listId.indexOf(f)] + "(false)");
      } 
      });
    });
  }

  return (
    <div className={Style.authorProfileCard}>
      <div className={Style.authorProfileCard_box}>
        <div className={Style.authorProfileCard_box_img}>
          <Image
            src={images.nft_image_1}
            className={Style.authorProfileCard_box_img_img}
            alt="NFT Images"
          />
        </div>

        <div className={Style.authorProfileCard_box_info}>
          <h2>
            Hoai An{""}{" "}
            <span>
              <MdVerified />
            </span>{" "}
          </h2>

          <div className={Style.authorProfileCard_box_info_address}>
            <input type="text" value={currentAccount} id="myInput" />
            <FiCopy
              onClick={() => copyAddress()}
              className={Style.authorProfileCard_box_info_address_icon}
            />
          </div>

          <p>
            Punk #3627 / An OG Cryptopunk Collector, hoarder of NFTs.
            Contributing to @other_cards, an NFT Monetization Platform.
          </p>

          <div className={Style.authorProfileCard_box_info_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
          </div>
        </div>

        <div className={Style.authorProfileCard_box_share}>
          <Button btnName="Follow" handleClick={() => {}} />
          <MdCloudUpload
            onClick={() => openShare()}
            className={Style.authorProfileCard_box_share_icon}
            id="openShare"
          />

          {share && (
            <div className={Style.authorProfileCard_box_share_upload}>
              <p>
                <span>
                  <TiSocialFacebook />
                </span>{" "}
                {""}
                Facebook
              </p>
              <p>
                <span>
                  <TiSocialYoutube />
                </span>{" "}
                {""}
                Youtube
              </p>
            </div>
          )}

          <BsThreeDots
            onClick={() => openReport()}
            className={Style.authorProfileCard_box_share_icon}
            id="openReport"
          />
          {report && (
            <p className={Style.authorProfileCard_box_share_report}>
              <span>
                <MdOutlineReportProblem />
              </span>{" "}
              {""}
              Report abuse
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;
