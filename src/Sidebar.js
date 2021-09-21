import React from 'react'
import './Sidebar.css'
import SideBarRow from './SideBarRow'
import HomeIcon from '@material-ui/icons/Home'
import WhatShotIcon from '@material-ui/icons/Whatshot'
import SubscriptionIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import OnDemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'

function Sidebar() {
    return (
        <div className="sidebar">
            <SideBarRow selected Icon={HomeIcon} title= "Home"/>
            <SideBarRow Icon={WhatShotIcon} title= "Trending"/>
            <SideBarRow Icon={SubscriptionIcon} title= "Subscription"/>
            <hr />
            <SideBarRow Icon={VideoLibraryIcon} title= "Library"/>
            <SideBarRow Icon={HistoryIcon} title= "History"/>
            <SideBarRow Icon={OnDemandVideoIcon} title= "Your Videos"/>
            <SideBarRow Icon={WatchLaterIcon} title= "Watch Later"/>
            <SideBarRow Icon={ThumbUpAltOutlinedIcon} title= "Liked Videos"/>
            <SideBarRow Icon={ExpandMoreOutlinedIcon} title= "Show more"/>
            <hr />
        </div>
    )
}

export default Sidebar
