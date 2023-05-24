import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";

import Style from "./NFTCard.module.css";
import images from "../../img";
import Link from "next/link";

const NFTCard = ({ nfts }) => {
  const [like, setLike] = useState(true);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div className={Style.NFTCard}>
      {nfts.map((el, i) => (
        <Link href={{ pathname: "/nftDetails", query: el }}>
          <div className={Style.NFTCard_box} key={i + 1}>
            <div className={Style.NFTCard_box_img}>
              <Image
                src={el.image}
                alt="NFT image"
                width={1000}
                height={1000}
                className={Style.NFTCard_box_img_img}
              />
            </div>

            <div className={Style.NFTCard_box_update}>
              <div className={Style.NFTCard_box_update_left}>
                <div
                  className={Style.NFTCard_box_update_left_like}
                  onClick={() => likeNFT()}
                >
                  {like ? (
                    <AiOutlineHeart />
                  ) : (
                    <AiFillHeart
                      className={Style.NFTCard_box_update_left_like_icon}
                    />
                  )}
                  {""} 22
                </div>
              </div>
              <div className={Style.NFTCard_box_update_right}>
                <div className={Style.NFTCard_box_update_right_info}>
                  <small>Remaining time</small>
                  <p>3h : 15 : 20s</p>
                </div>
              </div>
            </div>

            <div className={Style.NFTCard_box_update_details}>
              <div className={Style.NFTCard_box_update_details_price}>
                <div className={Style.NFTCard_box_update_details_price_box}>
                  <h4>
                    {el.name} #{el.tokenId}
                  </h4>

                  <div
                    className={Style.NFTCard_box_update_details_price_box_box}
                  >
                    <div
                      className={Style.NFTCard_box_update_details_price_box_bid}
                    >
                      <small>Current Bid</small>
                      <p>{el.price} ETH</p>
                    </div>
                    <div
                      className={
                        Style.NFTCard_box_update_details_price_box_stock
                      }
                    >
                      <small>61 in stock</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.NFTCard_box_update_details_category}>
                <BsImages />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTCard;
