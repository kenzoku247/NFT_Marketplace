import React, { useState, useEffect } from "react";
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardFill,
} from "react-icons/ri";

import Style from "./FollowerTab.module.css";
import FollowerTabCard from "./FollowerTabCard/FollowerTabCard";
import images from "../../img";

const FollowerTab = ({TopCreators}) => {
  const CardArr = [
    {
      background: images.categoryBackground1,
      user: images.user1
    },
    {
      background: images.categoryBackground2,
      user: images.user2
    },
    {
      background: images.categoryBackground3,
      user: images.user3
    },
    {
      background: images.categoryBackground4,
      user: images.user4
    },
    {
      background: images.categoryBackground5,
      user: images.user5
    },
    {
      background: images.categoryBackground6,
      user: images.user6
    },
    {
      background: images.categoryBackground7,
      user: images.user7
    },
    {
      background: images.categoryBackground8,
      user: images.user8
    }
  ];
  const FollowingArr = [
    {
      background: images.categoryBackground5,
      user: images.user1
    },
    {
      background: images.categoryBackground2,
      user: images.user2
    },
    {
      background: images.categoryBackground1,
      user: images.user3
    },
    {
      background: images.categoryBackground4,
      user: images.user4
    },
    {
      background: images.categoryBackground3,
      user: images.user5
    },
    {
      background: images.categoryBackground6,
      user: images.user6
    }
  ];
  const NewsArr = [
    {
      background: images.categoryBackground5,
      user: images.user1
    },
    {
      background: images.categoryBackground7,
      user: images.user2
    },
    {
      background: images.categoryBackground1,
      user: images.user3
    },
    {
      background: images.categoryBackground8,
      user: images.user4
    },
    {
      background: images.categoryBackground6,
      user: images.user5
    }
  ];

  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };

  const openFollower = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };

  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };

  return (
    <div className={Style.followerTab}>
      <div className={Style.followerTab_title}>
        <h2>Top Creators List..</h2>
        <div className={Style.followerTab_tabs}>
          <div className={Style.followerTab_tabs_btn}>
            <button onClick={() => openPopular()}>
              <RiUserFollowFill /> Popular
            </button>
            <button onClick={() => openFollower()}>
              <RiUserFollowFill /> Following
            </button>
            <button onClick={() => openNews()}>
              <RiAwardFill /> NoteWorthy
            </button>
          </div>
        </div>
      </div>
      {popular && (
        <div className={Style.followerTab_box}>
          {TopCreators.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.followerTab_box}>
          {FollowingArr.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
      {news && (
        <div className={Style.followerTab_box}>
          {NewsArr.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      <div className={Style.followerTab_member}>
        <div className={Style.followerTab_member_box}>
          <a href="#">Show me more</a>
          <a href="#">Become author</a>
        </div>
      </div>
    </div>
  );
};

export default FollowerTab;
