import React, { useState } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

import Style from "./NFTDetailsImage.module.css";
import images from "../../img";

const NFTDetailsImage = ({nft}) => {
  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true);
  const [like, setLike] = useState(false);

  const openDescription = ()=>{
    !description ? setDescription(true) : setDescription(false)
  }

  const openDetails = ()=>{
    !details ? setDetails(true) : setDetails(false)
  }

  const likeNFT = ()=>{
    !like ? setLike(true) : setLike(false)
  }
  return (
    <div className={Style.NFTDetailsImage}>
      <div className={Style.NFTDetailsImage_box}>
        <div className={Style.NFTDetailsImage_box_NFT}>
          <div className={Style.NFTDetailsImage_box_NFT_like}>
            <BsImage className={Style.NFTDetailsImage_box_NFT_like_icon} />
            <p onClick={() => likeNFT()}>
              {like ? (
                <AiOutlineHeart
                  className={Style.NFTDetailsImage_box_NFT_like_icon}
                />
              ) : (
                <AiFillHeart
                  className={Style.NFTDetailsImage_box_NFT_like_icon}
                />
              )}
              <span>24</span>
            </p>
          </div>

          <div className={Style.NFTDetailsImage_box_NFT_img}>
            <Image
              src={nft.image}
              className={Style.NFTDetailsImage_box_NFT_img_img}
              alt="NFT image"
              width={1000}
              height={1000}
              style={{objectFit:"cover"}}
            />
          </div>
        </div>

        <div
          className={Style.NFTDetailsImage_box_description}
          onClick={() => openDescription()}
        >
          <p>Description</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {description && (
          <div className={Style.NFTDetailsImage_box_description_box}>
            <p>
              {nft.description}
            </p>
          </div>
        )}

        <div
          className={Style.NFTDetailsImage_box_details}
          onClick={() => openDetails()}
        >
          <p>Details</p>
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
        {details && (
          <div className={Style.NFTDetailsImage_box_details_box}>
            <small>2000 x 2000 px.IMAGE(685KB)</small>
            <p>
              <small>Contract Address:</small>
              <br />
              {nft.seller}
            </p>
            <p><small>Token ID:</small>{" "}
            {nft.tokenId}</p>
          </div>

        )}
      </div>
    </div>
  );
};

export default NFTDetailsImage;
