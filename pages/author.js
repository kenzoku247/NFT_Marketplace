/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useContext } from "react";

import Style from "../styles/author.module.css";
import { Banner, NFTCard2 } from "../collectionPage/collection_index";
import { Brand, Title } from "../components/components_index";
import images from "../img";
import {
  AuthorProfileCard,
  AuthorTaps,
  AuthorNFTCardBox,
} from "../authorPage/author_index";
import FollowerTabCard from "../components/FollowerTab/FollowerTabCard/FollowerTabCard";

import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const author = () => {
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

  const [listedNFTs, setListedNFTs] = useState(true);
  const [ownNFs, setOwnNFTs] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(
    NFTMarketplaceContext
  );

  const [nfts, setNfts] = useState([]);
  const [myNFTs, setMyNFTs] = useState([]);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchItemListed").then((items) => {
      setNfts(items);
    });
  }, [fetchMyNFTsOrListedNFTs]);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchMyNFTs").then((items) => {
      setMyNFTs(items);
    });
  }, [fetchMyNFTsOrListedNFTs]);

  return (
    <div className={Style.author}>
      <Banner bannerImage={images.categoryBackground1} />
      <AuthorProfileCard currentAccount={currentAccount}/>
      <AuthorTaps
        setListedNFTs={setListedNFTs}
        setOwnNFTs={setOwnNFTs}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />

      <AuthorNFTCardBox
        listedNFTs={listedNFTs}
        ownNFs={ownNFs}
        like={like}
        follower={follower}
        following={following}
        nfts={nfts}
        myNFTs={myNFTs}
      />
      <Title
        heading="Popular Creators"
        paragraph="Click on music icon and enjoy NFT music or audio"
      />
      <div className={Style.author_box}>
        {followerArr.map((el, i) => (
          <FollowerTabCard el={el} i={i} key={i+1}/>
        ))}
      </div>
      <Brand />
    </div>
  );
};

export default author;
