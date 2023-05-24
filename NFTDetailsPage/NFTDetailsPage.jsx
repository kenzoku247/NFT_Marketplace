import React from 'react'

import Style from "./NFTDetailsPage.module.css"
import { NFTDescription, NFTDetailsImage, NFTTabs } from './nftDetails_index'

const NFTDetailsPage = ({nft}) => {
  return (
    <div className={Style.NFTDetailsPage}>
        <div className={Style.NFTDetailsPage_box}>
            <NFTDetailsImage nft={nft}/>
            <NFTDescription nft={nft}/>
        </div>

    </div>
  )
}

export default NFTDetailsPage