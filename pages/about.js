import React from "react";
import Image from "next/image";

import Style from "../styles/about.module.css";
import { Brand } from "../components/components_index";
import images from "../img";

const about = () => {
  const founderArr = [
    {
      name: "Hong Phuc",
      position: "Co-founder and Chief Executive",
      image: images.founder1,
    },
    {
      name: "Quang Hoa",
      position: "Co-founder and Chief Executive",
      image: images.founder2,
    },
    {
      name: "Canh Dinh",
      position: "Co-founder, Chairman",
      image: images.founder3,
    },
    {
      name: "Viet Hoang",
      position: "Co-founder, Chief Strategy Officer",
      image: images.founder4,
    },
  ];

  const factsArr = [
    {
      title: "10 million",
      info: "Articles have been public around the world (as at Sept. 30, 2023)",
    },
    {
      title: "100,000",
      info: "Registered users account (as at Sept. 30, 2023)",
    },
    {
      title: "220+",
      info: "Countries and regions have our presence (as at Sept. 30, 2021)",
    },
  ];
  return (
    <div className={Style.about}>
      <div className={Style.about_box}>
        <div className={Style.about_box_hero}>
          <div className={Style.about_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
              We&apos;re impartial and independent, and every day we create
              distinctive, word-class programmes and content which inform,
              educate and entertain millions of people in the around the world.
            </p>
          </div>
          <div className={Style.about_box_hero_right}>
            <Image src={images.hero2} className={Style.about_box_hero_right_img} alt="hero2"/>
          </div>
        </div>

        <div className={Style.about_box_title}>
          <h2>🏢 Founder</h2>
          <p>
            We&apos;re impartial and independent, and every day we create
            distinctive, word-class programmes and content
          </p>
        </div>

        <div className={Style.about_box_founder}>
          <div className={Style.about_box_founder_box}>
            {founderArr.map((el, i) => (
              <div className={Style.about_box_founder_box_img} key={i+1}>
                <Image
                  src={el.image}
                  alt={el.name}
                  className={Style.about_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.about_box_title}>
          <h2>🚀 Fast Facts</h2>
          <p>
            We&apos;re impartial and independent, and every day we create
            distinctive, word-class programmes and content
          </p>
        </div>

        <div className={Style.about_box_founder_box_facts}>
          <div className={Style.about_box_founder_box_facts_box}>
            {factsArr.map((el, i) => (
              <div className={Style.about_box_founder_box_facts_box_info} key={i+1}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default about;
