/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, useContext } from "react";

import Style from "../styles/searchPage.module.css";
import { Slider, Brand, Filter, Loader } from "../components/components_index";
import { SearchBar } from "../searchPage/search_index";
import { NFTCard2, Banner } from "../collectionPage/collection_index";
import images from "../img";

import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const searchPage = () => {
  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    fetchNFTs().then((items) => {
      // console.log(items);
      setNfts(items ? items.reverse() : []);
      setNftsCopy(items);
      // console.log(nfts);
    });
  }, [fetchNFTs]);

  useEffect(() => {}, [nfts]);

  const onHandleSearch = (value) => {
    const filteredNFTS = nfts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredNFTS.length === 0) {
      setNfts(nftsCopy);
    } else {
      setNfts(filteredNFTS);
    }
  };

  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
  };

  return (
    <div className={Style.search}>
      <Banner bannerImage={images.categoryBackground2} />
      <SearchBar
        onHandleSearch={onHandleSearch}
        onClearSearch={onClearSearch}
      />
      <Filter />
      {nfts.length == 0 ? <Loader /> : <NFTCard2 NFTData={nfts} />}
      <Slider />
      <Brand />
    </div>
  );
};

export default searchPage;
