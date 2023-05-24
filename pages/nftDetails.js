/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import Style from "../styles/nftDetails.module.css";
import { Button, Category, Brand } from "../components/components_index";
import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage";

import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const nftDetails = () => {
  const {currentAccount} = useContext(NFTMarketplaceContext);

  const [nft, setNft] = useState({
    image: "",
    tokenId: "",
    name: "",
    owner: "",
    price: "",
    seller: "",
  });
  const router = useRouter()
  useEffect(()=>{
    if(!router.isReady) return;
    setNft(router.query)
  },[router.isReady, router.query])
  return (
    <div>
      <NFTDetailsPage nft={nft}/>
      <Category />
      <Brand />
    </div>
  );
};

export default nftDetails;
