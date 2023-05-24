import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Style from "./Loader.module.css";
import images from "../../img";

const Loader = () => {
  return (
    <div className={Style.loader}>
      <div className={Style.loader_box}>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
