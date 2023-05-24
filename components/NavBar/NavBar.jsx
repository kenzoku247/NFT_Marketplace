import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import {DiJqueryLogo} from 'react-icons/di'

import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Profile, Notification, SideBar } from "./index";

import { Button } from "../components_index";
import images from "../../img";

import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setHelp(false);
      setDiscover(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openDiscoverMenu = () => {
    if (!discover) {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
    }
  };

  const openHelpMenu = () => {
    if (!help) {
      setHelp(true);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    } else {
      setHelp(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setHelp(false);
      setDiscover(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  const router = useRouter()

  const listNavId = ["Discover", "HelpCenter", "Profile", "Notification"];
  const listNavSet = [
    "setDiscover",
    "setHelp",
    "setProfile",
    "setNotification",
  ];

  if (typeof window !== "undefined") {
    window.addEventListener("click", function (e) {
      listNavId.map((f) => {
        if (!document.getElementById(f).contains(e.target)) {
          eval(listNavSet[listNavId.indexOf(f)] + "(false)");
        }
      });
    });
  }

  const { currentAccount, connectWallet } = useContext(NFTMarketplaceContext);

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
              <Image
                src={images.logo}
                alt="NFT Marketplace"
                width={images.logo.width * 0.012}
                height={images.logo.height * 0.012}
                priority
                onClick={() =>router.push('/')}
              />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" name="" id="" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover} id="Discover">
            {/* DISCOVER MENU */}
            <p onClick={() => openDiscoverMenu()}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          {/* HELP CENTER MENU */}
          <div className={Style.navbar_container_right_help} id="HelpCenter">
            <p onClick={() => openHelpMenu()}>Help Center</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* NOTIFICATION */}
          <div
            className={Style.navbar_container_right_notify}
            id="Notification"
          >
            <MdNotifications
              className={Style.notify}
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>

          {/* CREATE BUTTON SECTION */}
          <div className={Style.navbar_container_right_button}>
            {currentAccount == "" ? (
              <Button btnName="Connect" handleClick={() => connectWallet()} />
            ) : (
                <Button btnName="Create" handleClick={() => router.push('/uploadNFT')}/>
            )}
          </div>
          {/* USER PROFILE */}
          <div className={Style.navbar_container_right_profile} id="Profile">
            <div className={Style.navbar_container_right_profile_box}>
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                style={{ borderRadius: "50%", userSelect: "none" }}
                onClick={() => openProfile()}
              />
              {profile && <Profile currentAccount={currentAccount}/>}
            </div>
          </div>

          {/* MENU BUTTON */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>

      {/* SIDEBAR COMPONENT */}
      {openSideMenu && (
        <div className={Style.SideBar}>
          <SideBar
            setOpenSideMenu={setOpenSideMenu}
            currentAccount={currentAccount}
            connectWallet={connectWallet}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
