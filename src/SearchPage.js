import React from 'react'
import './SearchPage.css'
import TuneOutLinedIcon from "@material-ui/icons/TuneOutlined"
import ChannelRow from "./ChannelRow"
import VideoRow from './VideoRow'

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
            <p className="videoCard__top">Latest from Clever Programmer</p>
            <VideoRow 
              views = "1.4M"
               subs = "659k"
               description= "Do You want free one hour Training on react.check this out...."
               timeStamp="59 seconds ago"
               channel="Clever Programmer"
               title="Let Build a Youtube clone with React Js For Beginners"
               image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
            />
            <VideoRow 
              views = "1.4M"
               subs = "659k"
               description= "Do You want free one hour Training on react.check this out...."
               timeStamp="59 seconds ago"
               channel="Clever Programmer"
               title="Let Build a Youtube clone with React Js For Beginners"
               image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
            />
            <VideoRow 
              views = "1.4M"
               subs = "659k"
               description= "Do You want free one hour Training on react.check this out...."
               timeStamp="59 seconds ago"
               channel="Clever Programmer"
               title="Let Build a Youtube clone with React Js For Beginners"
               image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
            />
            <VideoRow 
              views = "1.4M"
               subs = "659k"
               description= "Do You want free one hour Training on react.check this out...."
               timeStamp="59 seconds ago"
               channel="Clever Programmer"
               title="Let Build a Youtube clone with React Js For Beginners"
               image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
            />
        </div>
    )
}

export default SearchPage
