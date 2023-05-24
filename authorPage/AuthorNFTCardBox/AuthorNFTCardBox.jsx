import React, { useState } from "react";

import Style from "./AuthorNFTCardBox.module.css";
import images from "../../img";
import { NFTCard2 } from "../../collectionPage/collection_index";
import FollowerTabCard from "../../components/FollowerTab/FollowerTabCard/FollowerTabCard";

const AuthorNFTCardBox = ({
  listedNFTs,
  ownNFs,
  like,
  follower,
  following,
  nfts,
  myNFTs,
}) => {
  const likeArr = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];

  const followerArr = [
    {
      background: images.categoryBackground5,
      user: images.user8,
      seller : "0xcd3B766CCDd6AE721141F452C550Ca635964ce71"
    },
    {
      background: images.categoryBackground2,
      user: images.user2,
      seller : "0xcd3B766CCDd6AE721141F452C550Ca635964ce71"
    },
    {
      background: images.categoryBackground1,
      user: images.user5,
      seller : "0xcd3B766CCDd6AE721141F452C550Ca635964ce71"
    },
    {
      background: images.categoryBackground4,
      user: images.user4,
      seller : "0xcd3B766CCDd6AE721141F452C550Ca635964ce71"
    },
    {
      background: images.categoryBackground3,
      user: images.user1,
      seller : "0xcd3B766CCDd6AE721141F452C550Ca635964ce71"
    },
    {
      background: images.categoryBackground6,
      user: images.user6,
      seller : "0xcd3B766CCDd6AE721141F452C550Ca635964ce71"
    },
  ];

  const followingArr = [
    {
      background: images.categoryBackground5,
      user: images.user1,
      seller : "0xcd3B766CCDd6AE721141F452C550Ca635964ce71"
    },
    {
      background: images.categoryBackground2,
      user: images.user2,
      seller : "0xcd3B766CCDd6AE721141F452C550Ca635964ce71"
    },
    {
      background: images.categoryBackground1,
      user: images.user3,
      seller : "0xcd3B766CCDd6AE721141F452C550Ca635964ce71"
    },
    {
      background: images.categoryBackground4,
      user: images.user4,
      seller : "0xcd3B766CCDd6AE721141F452C550Ca635964ce71"
    },
    {
      background: images.categoryBackground3,
      user: images.user5,
      seller : "0xcd3B766CCDd6AE721141F452C550Ca635964ce71"
    },
    {
      background: images.categoryBackground6,
      user: images.user6,
      seller : "0xcd3B766CCDd6AE721141F452C550Ca635964ce71"
    },
  ];
  return (
    <div className={Style.authorNFTCardBox}>
      {listedNFTs && <NFTCard2 NFTData={nfts} />}
      {ownNFs && <NFTCard2 NFTData={myNFTs} />}
      {like && <NFTCard2 NFTData={likeArr} />}
      {follower && (
        <div className={Style.authorNFTCardBox_box}>
          {followerArr.map((el, i) => (
            <FollowerTabCard i={i} el={el} key={i+1}/>
          ))}
        </div>
      )}
      {following && (
        <div className={Style.authorNFTCardBox_box}>
          {followingArr.map((el, i) => (
            <FollowerTabCard i={i} el={el} key={i+1}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorNFTCardBox;
