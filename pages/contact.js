import React from "react";
import { TiSocialFacebook, TiSocialYoutube } from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";

import Style from "../styles/contact.module.css";
import formStyle from "../accountPage/Form/Form.module.css";
import { Button } from "../components/components_index";

const contact = () => {
  return (
    <div className={Style.contact}>
      <div className={Style.contact_box}>
        <h1>Contact Us</h1>
        <div className={Style.contact_box_box}>
          <div className={Style.contact_box_box_left}>
            <div className={Style.contact_box_box_left_item}>
              <h3>🗺️ ADDRESS</h3>
              <p>
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>

            <div className={Style.contact_box_box_left_item}>
              <h3>📧 EMAIL</h3>
              <p>example@example.com</p>
            </div>
            <div className={Style.contact_box_box_left_item}>
              <h3>☎️ PHONE</h3>
              <p>0123456789</p>
            </div>
            <div className={Style.contact_box_box_left_item}>
              <h3>🌏 SOCIALS</h3>
              <a href="#">
                <TiSocialFacebook />
              </a>
              <a href="#">
                <TiSocialYoutube />
              </a>
            </div>
          </div>
          <div className={Style.contact_box_box_right}>
            <form>
              <div className={formStyle.form_box_input}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  placeholder="Hong Phuc"
                  className={formStyle.form_box_input_info}
                />
              </div>
              <div className={formStyle.form_box_input}>
                <label htmlFor="email">Email</label>
                <div className={formStyle.form_box_input_box}>
                  <div className={formStyle.form_box_input_box_icon}>
                    <HiOutlineMail />
                  </div>

                  <input type="text" placeholder="Email*" />
                </div>
              </div>
              <div className={formStyle.form_box_input}>
                <label htmlFor="description">Message</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Something about yourself in few words"
                ></textarea>
              </div>
              <Button
                btnName="Send Message"
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
