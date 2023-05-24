import React, { useState } from "react";
import Image from "next/image";
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiTick,
  Titick,
} from "react-icons/ti";

import Style from "./AuthorTaps.module.css";

const AuthorTaps = ({
  setListedNFTs,
  setOwnNFTs,
  setLike,
  setFollower,
  setFollowing,
}) => {
  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  const listArr = [
    "Created By Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed",
  ];

  const openDropDownList = () => {
    if (!openList) {
      setOpenList(true);
    } else {
      setOpenList(false);
    }
  };

  const activeList = [
    "Listed NFTs",
    "Own NFTs",
    "Liked",
    "Following",
    "Follower",
  ];

  const setActiveList = [
    "setListedNFTs",
    "setOwnNFTs",
    "setLike",
    "setFollowing",
    "setFollower",
  ];

  const openTab = (e) => {
    const btnText = e.target.innerText;
    activeList.map((k) => {
      if (btnText == k) {
        eval(setActiveList[activeList.indexOf(k)] + "(true)");
        activeList.map((l) => {
          if (l !== k) {
            eval(setActiveList[activeList.indexOf(l)] + "(false)");
          }
        });
        setActiveBtn(activeList.indexOf(k) + 1);
      }
    });
  };


  if (typeof window !== "undefined") {
    window.addEventListener("click", function (e) {
      if (document.getElementById("listAuthorTaps") && !document.getElementById("listAuthorTaps").contains(e.target)) {
        setOpenList(false);
      }
    });
  }

  return (
    <div className={Style.authorTaps}>
      <div className={Style.authorTaps_box}>
        <div className={Style.authorTaps_box_left}>
          <div className={Style.authorTaps_box_left_btn}>
            <button
              onClick={(e) => openTab(e)}
              className={`${activeBtn == 1 ? Style.active : ""}`}
            >
              Listed NFTs{""}
            </button>
            <button
              onClick={(e) => openTab(e)}
              className={`${activeBtn == 2 ? Style.active : ""}`}
            >
              Own NFTs{""}
            </button>
            <button
              onClick={(e) => openTab(e)}
              className={`${activeBtn == 3 ? Style.active : ""}`}
            >
              Liked{""}
            </button>
            <button
              onClick={(e) => openTab(e)}
              className={`${activeBtn == 4 ? Style.active : ""}`}
            >
              Following{""}
            </button>
            <button
              onClick={(e) => openTab(e)}
              className={`${activeBtn == 5 ? Style.active : ""}`}
            >
              Follower{""}
            </button>
          </div>
        </div>
        <div className={Style.authorTaps_box_right}>
          <div
            className={Style.authorTaps_box_right_para}
            onClick={() => openDropDownList()}
            id="listAuthorTaps"
          >
            <p>{selectedMenu}</p>
            {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>

          {openList && (
            <div className={Style.authorTaps_box_right_list}>
              {listArr.map((el, i) => (
                <div
                  key={i + 1}
                  onClick={() => setSelectedMenu(el)}
                  className={Style.authorTaps_box_right_list_item}
                >
                  <p>{el}</p>
                  <span>{selectedMenu == el && <TiTick />}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorTaps;
