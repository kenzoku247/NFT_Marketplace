import React, { useState } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import Link from "next/link";

import Style from "./NFTCard2.module.css";
import { LikeProfile } from "../../components/components_index";
import { images } from "../../next.config";

const NFTCard2 = ({ NFTData }) => {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(100);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeInc(likeInc + 1);
    } else {
      setLike(false);
      setLikeInc(likeInc - 1);
    }
  };
  return (
    <div className={Style.NFTCard2}>
      {NFTData.map((el, i) => (
        <Link href={{ pathname: "/nftDetails", query: el }} key={i + 1}>
          <div className={Style.NFTCard2_box} key={i + 1}>
            <div className={Style.NFTCard2_box_like}>
              <div className={Style.NFTCard2_box_like_box}>
                <div className={Style.NFTCard2_box_like_box_box}>
                  <BsImage className={Style.NFTCard2_box_like_box_box_icon} />
                  <p onClick={() => likeNFT()}>
                    {!like ? <AiOutlineHeart /> : <AiFillHeart />}
                    {""}
                    <span>{likeInc}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={Style.NFTCard2_box_img}>
              <Image
                priority
                src={el.image}
                alt="NFT"
                className={Style.NFTCard2_box_img_img}
                width={1000}
                height={200}
              />
            </div>

            <div className={Style.NFTCard2_box_info}>
              <div className={Style.NFTCard2_box_info_left}>
                <LikeProfile />
                <p>{el.name}</p>
              </div>
              <small>4{i + 2}</small>
            </div>
            <div className={Style.NFTCard2_box_price}>
              <div className={Style.NFTCard2_box_price_box}>
                <small>Current Bid</small>
                <p>{el.price} ETH</p>
              </div>
              <p className={Style.NFTCard2_box_price_stock}>
                <MdTimer /> <span>{i + 1} hours left</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTCard2;
