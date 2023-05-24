import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import { TiSocialFacebook, TiSocialYoutube } from "react-icons/ti";

import Style from "./Form.module.css";
import { Button } from "../../components/components_index";

const Form = () => {
  return (
    <div className={Style.form}>
      <div className={Style.form_box}>
        <form>
          <div className={Style.form_box_input}>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="Hong Phuc"
              className={Style.form_box_input_info}
            />
          </div>
          <div className={Style.form_box_input}>
            <label htmlFor="email">Email</label>
            <div className={Style.form_box_input_box}>
              <div className={Style.form_box_input_box_icon}>
                <HiOutlineMail />
              </div>

              <input type="text" placeholder="Email*" className={Style.form_box_input_info}/>
            </div>
          </div>

          <div className={Style.form_box_input}>
            <label htmlFor="description">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Something about yourself in few words"
              className={Style.form_box_input_info}
            ></textarea>
          </div>

          <div className={Style.form_box_input}>
            <label htmlFor="website">Website</label>
            <div className={Style.form_box_input_box}>
              <div className={Style.form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input type="text" placeholder="website" className={Style.form_box_input_info}/>
            </div>
          </div>

          <div className={Style.form_box_input_social}>
            <div className={Style.form_box_input}>
              <label htmlFor="facebook">Facebook</label>
              <div className={Style.form_box_input_box}>
                <div className={Style.form_box_input_box_icon}>
                  <TiSocialFacebook />
                </div>
                <input type="text" placeholder="https://hongphuc" className={Style.form_box_input_info}/>
              </div>
            </div>
            <div className={Style.form_box_input}>
              <label htmlFor="youtube">Youtube</label>
              <div className={Style.form_box_input_box}>
                <div className={Style.form_box_input_box_icon}>
                  <TiSocialYoutube />
                </div>
                <input type="text" placeholder="https://hongphuc" className={Style.form_box_input_info}/>
              </div>
            </div>
          </div>

          <div className={Style.form_box_input}>
            <label htmlFor="wallet">Wallet address</label>
            <div className={Style.form_box_input_box}>
              <div className={Style.form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>

              <input type="text" placeholder="0xEFsd0gadS0DFSDd0sdf0DS" />
              <div className={Style.form_box_input_box_icon}>
                <MdOutlineContentCopy />
              </div>
            </div>
          </div>

          <div className={Style.form_box_btn}>
            <Button
              btnName="Upload profile"
              handleClick={() => {}}
              classStyle={Style.button}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
