import React, { useState, useEffect } from "react";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
  BsCalendarDateFill,
} from "react-icons/bs";

import Style from "./Collection.module.css";
import DaysComponents from "./DaysComponents/DaysComponents";
import images from "../../img"

const Collection = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

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

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false)
      setNews(false)
    }
  };
  const openFollower = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true)
      setNews(false)
    }
  };
  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false)
      setNews(true)
    }
  };

  return (
    <div className={Style.collection}>
      <div className={Style.collection_title}>
        <h2>Top List Creators</h2>
        <div className={Style.collection_collections}>
          <div className={Style.collection_collections_btn}>
            <button onClick={() => openPopular()}>
              <BsFillAlarmFill /> 24 hours
            </button>
            <button onClick={() => openFollower()}>
              <BsCalendar3 /> Last 7 hours
            </button>
            <button onClick={() => openNews()}>
              <BsFillCalendarDateFill /> Last 30 days
            </button>
          </div>
        </div>
      </div>
      {popular && (
        <div className={Style.collection_box}>
          {CardArr.map((el, i) => (
            <DaysComponents key={i + 1} i={i} el={el}/>
          ))}
        </div>
      )}
      {following && (
        <div className={Style.collection_box}>
          {FollowingArr.map((el, i) => (
            <DaysComponents key={i + 1} i={i} el={el}/>
          ))}
        </div>
      )}
      {news && (
        <div className={Style.collection_box}>
          {NewsArr.map((el, i) => (
            <DaysComponents key={i + 1} i={i} el={el}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
