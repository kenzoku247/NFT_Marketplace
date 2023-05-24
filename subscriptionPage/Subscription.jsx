import React from "react";
import { TiTick } from "react-icons/ti";

import Style from "./Subscription.module.css";
import { Button } from "../components/components_index";

const Subscription = ({ el, i }) => {
  return (
    <div className={Style.Subscription}>
      <div className={Style.Subscription_box}>
        <span className={Style.Subscription_box_span}>{el.plan}</span>
        <small className={Style.Subscription_box_small}>
          {el.popular || ""}
        </small>
        <p className={Style.Subscription_box_para}>{el.price}</p>
        <div className={Style.Subscription_box_info}>
          {el.service.map((el, i) => (
            <p className={Style.Subscription_box_info_para} key={i + 1}>
              <span>
                <TiTick />
              </span>
              {el}
            </p>
          ))}
        </div>

        <Button
          btnName="Submit"
          handleClick={() => {}}
          classStyle={Style.button}
        />
      </div>
    </div>
  );
};

export default Subscription;
