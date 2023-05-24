/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Style from "../styles/reSellToken.module.css";
import formStyle from "../accountPage/Form/Form.module.css";
import { Button } from "../components/components_index";
import Image from "next/image";

import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const reSellToken = () => {
  const { createSale } = useContext(NFTMarketplaceContext);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();
  const { id, tokenURI } = router.query;

  const fetchNFT = async () => {
    if (!tokenURI) {
      return;
    }
    const { data } = await axios.get(tokenURI);
    // setPrice(data.price);
    setImage(data.image);
  };

  useEffect(() => {
    fetchNFT();
  }, [fetchNFT, id]);

  const resell = async () => {
    try {
      await createSale(tokenURI, price, true, id);
      router.push("/author");
    } catch (error) {
      console.log("Error while resell");
      console.log(error);
    }
  };

  return (
    <div className={Style.reSellToken}>
      <div className={Style.reSellToken_box}>
        <h1>ReSell Your Token, Set Price</h1>
        <div className={formStyle.form_box_input}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            min={1}
            placeholder="Resell Price"
            className={formStyle.form_box_input_username}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className={Style.reSellToken_box_img}>
          {image && (
            <Image
              src={image}
              alt="Resell nft"
              width={1000}
              height={1000}
              className={Style.reSellToken_box_img_img}
            />
          )}
        </div>

        <div className={Style.reSellToken_box_btn}>
          <Button btnName="Resell NFT" handleClick={() => resell()} />
        </div>
      </div>
    </div>
  );
};

export default reSellToken;
