import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

import Style from "./DropZone.module.css";
import images from "../../img";

const DropZone = ({
  title,
  heading,
  subHeading,
  name,
  website,
  description,
  properties,
  royalties,
  fileSize,
  category,
  uploadToIPFS,
  setImage,
}) => {
  const [fileURL, setFileURL] = useState(null);
  const onDrop = useCallback(
    async (acceptedFile) => {
      const url = await uploadToIPFS(acceptedFile[0]);
      setFileURL(url);
      setImage(url);
      console.log(url);
    },
    [setImage, uploadToIPFS]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
    // width
  });
  return (
    <div className={Style.dropZone}>
      <div className={Style.dropZone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Style.dropZone_box_input}>
          <p>{title}</p>
          <div className={Style.dropZone_box_input_img}>
            <Image
              src={images.upload}
              alt="upload"
              className={Style.dropZone_box_input_img_img}
              // width={100}
            />
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>

      {fileURL && (
        <aside className={Style.dropZone_box_aside}>
          <div className={Style.dropZone_box_aside_box}>
            <Image
              src={fileURL}
              alt="nft image"
              className={Style.dropZone_box_aside_box_img}
              width={100}
              height={100}
              style={{objectFit:"cover"}}
            />

            <div className={Style.dropZone_box_aside_box_preview}>
              <div className={Style.dropZone_box_aside_box_preview_one}>
                <p>
                  <span>NFT Name:</span>
                  {name || ""}
                </p>
                <p>
                  <span>Website:</span>
                  {website || ""}
                </p>
              </div>

              <div className={Style.dropZone_box_aside_box_preview_two}>
                <p>
                  <span>Description:</span>
                  {description || ""}
                </p>
              </div>
              <div className={Style.dropZone_box_aside_box_preview_three}>
                <p>
                  <span>Royalties:</span>
                  {royalties || ""}
                </p>
                <p>
                  <span>FileSize:</span>
                  {fileSize || ""}
                </p>
                <p>
                  <span>Properties:</span>
                  {properties || ""}
                </p>
                <p>
                  <span>Category:</span>
                  {category || ""}
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default DropZone;
