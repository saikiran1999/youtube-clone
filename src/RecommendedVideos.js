import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard 
                  title = "Become a Developer in 10 minutes | 2019/2020"
                  views = "2.3M Views"
                  timestamp = "3 days ago"
                  channelImage = "https://marvel.fandom.com/wiki/Anthony_Stark_(Earth-616)?file=Iron_Man_Vol_6_1_Brooks_Variant_Textless.jpg"
                  channel = "sony sangha"
                  image = "https://www.dreamstime.com/stock-images-iron-man-image17900674"
                />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    )
}

export default RecommendedVideos
