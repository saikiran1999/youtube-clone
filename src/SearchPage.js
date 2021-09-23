import React from 'react'
import './SearchPage.css'
import TuneOutLinedIcon from "@material-ui/icons/TuneOutlined"
import ChannelRow from "./ChannelRow"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutLinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow 
              image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj"
              channel = "Clever Programmer"
              verified
              subs="659k"
              noOfVideos={382}
              description="You can Find awesome programming here! Also, expect programming tips and tricks that will take your coding skills..."
             />
            <hr />
        </div>
    )
}

export default SearchPage
