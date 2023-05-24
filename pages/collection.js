import React from 'react'

import Style from "../styles/collection.module.css"
import images from "../img"
import { Banner, Profile, NFTCard2 } from '../collectionPage/collection_index'
import { Slider, Brand, NFTCard } from '../components/components_index'
import Filter from '../components/Filter/Filter'


const collection = () => {
  const collectionArr = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
  ]

  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.categoryBackground3} />
      <Profile />
      <Filter />
      <NFTCard2 NFTData={collectionArr}/>
      <Slider />
      <Brand />
    </div>
  )
}

export default collection