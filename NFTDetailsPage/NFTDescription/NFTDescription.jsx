import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import {
  MdVerified,
  MdCloudUpload,
  MdTimer,
  MdOutlineDeleteSweep,
  MdReportProblem,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import { TiSocialFacebook, TiSocialYoutube } from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";

import Style from "./NFTDescription.module.css";
import images from "../../img";
import { Button } from "../../components/components_index";
import { NFTTabs } from "../nftDetails_index";

import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const NFTDescription = ({ nft }) => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provenance, setProvenance] = useState(false);
  const [owner, setOwner] = useState(false);

  const router = useRouter();

  const historyArr = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ];
  const provenanceArr = [
    images.user4,
    images.user5,
    images.user6,
    images.user7,
    images.user8,
  ];
  const ownerArr = [
    images.user2,
    images.user3,
    images.user4,
    images.user5,
    images.user6,
  ];

  const openSocial = () => {
    !social ? setSocial(true) : setSocial(false);
    !social && setNFTMenu(false);
  };

  const openNFTMenu = () => {
    !NFTMenu ? setNFTMenu(true) : setNFTMenu(false);
    !NFTMenu && setHistory(false);
  };

  const openTabs = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Bid History") {
      setHistory(true);
      setProvenance(false);
      setOwner(false);
    } else if (btnText == "Provenance") {
      setHistory(false);
      setProvenance(true);
      setOwner(false);
    }
  };

  const openOwner = () => {
    if (!owner) {
      setOwner(true);
      setHistory(false);
      setProvenance(false);
    } else {
      setOwner(false);
      setHistory(true);
    }
  };

  const { buyNFT, currentAccount } = useContext(NFTMarketplaceContext);

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        <div className={Style.NFTDescription_box_share}>
          <p>Virtual Worlds</p>
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openSocial()}
            />

            {social && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook /> Facebook
                </a>
                <a href="#">
                  <TiSocialYoutube /> Youtube
                </a>
              </div>
            )}

            <BsThreeDots
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openNFTMenu()}
            />

            {NFTMenu && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <BiDollar /> Change price
                </a>
                <a href="#">
                  <BiTransferAlt /> Transfer
                </a>
                <a href="#">
                  <MdReportProblem /> Report abuse
                </a>
                <a href="#">
                  <MdOutlineDeleteSweep /> Delete item
                </a>
              </div>
            )}
          </div>
        </div>

        <div className={Style.NFTDescription_box_profile}>
          <h1>
            {nft.name} #{nft.tokenId}
          </h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <Image
                src={images.user1}
                alt="profile"
                className={Style.NFTDescription_box_profile_box_left_img}
              />
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <small>Creator</small>
                <br />
                <Link href={{ pathname: "/author", query: `${nft.seller}` }}>
                  <span>
                    Hoai An <MdVerified />
                  </span>
                </Link>
              </div>
            </div>
            <div className={Style.NFTDescription_box_profile_box_right}>
              <Image
                src={images.categoryBackground1}
                alt="profile"
                className={Style.NFTDescription_box_profile_box_left_img}
              />

              <div className={Style.NFTDescription_box_profile_box_right_info}>
                <small>Collection</small>{" "}
                <span>
                  Colorful <MdVerified />
                </span>
              </div>
            </div>
          </div>

          <div className={Style.NFTDescription_box_profile_bidding}>
            <p>
              <MdTimer /> <span>Auction ending in:</span>
            </p>

            <div className={Style.NFTDescription_box_profile_bidding_box_timer}>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_timer_item
                }
              >
                <p>2</p>
                <span>Days</span>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_timer_item
                }
              >
                <p>22</p>
                <span>hours</span>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_timer_item
                }
              >
                <p>45</p>
                <span>mins</span>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_timer_item
                }
              >
                <p>22</p>
                <span>secs</span>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_bidding_box_price}>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_price_bid
                }
              >
                <small>Current Bid</small>
                <p>
                  {nft.price} ETH <span>( ≈ $3,221.22 )</span>
                </p>
              </div>

              <span>[96 in stock]</span>
            </div>

            <div
              className={Style.NFTDescription_box_profile_bidding_box_button}
            >
              {currentAccount === nft.seller.toLowerCase() ? (
                <p>You cannot buy your own NFT.</p>
              ) : currentAccount === nft.owner.toLowerCase() ? (
                <Button
                  icon={<FaWallet />}
                  btnName="List on Marketplace"
                  handleClick={() =>
                    router.push(
                      `/reSellToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`
                    )
                  }
                  classStyle={Style.button}
                />
              ) : (
                <Button
                  icon={<FaWallet />}
                  btnName="Buy NFT"
                  handleClick={() => buyNFT(nft)}
                  classStyle={Style.button}
                />
              )}

              <Button
                icon={<FaPercentage />}
                btnName="Make offer"
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </div>

            <div className={Style.NFTDescription_box_profile_bidding_box_tabs}>
              <button onClick={(e) => openTabs(e)}>Bid History</button>
              <button onClick={(e) => openTabs(e)}>Provenance</button>
              <button onClick={() => openOwner()}>Owner</button>
            </div>

            {history && (
              <div
                className={Style.NFTDescription_box_profile_bidding_box_card}
              >
                <NFTTabs dataTab={historyArr} />
              </div>
            )}
            {provenance && (
              <div
                className={Style.NFTDescription_box_profile_bidding_box_card}
              >
                <NFTTabs dataTab={provenanceArr} />
              </div>
            )}
            {owner && (
              <div
                className={Style.NFTDescription_box_profile_bidding_box_card}
              >
                <NFTTabs dataTab={ownerArr} icon={<MdVerified />} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;
