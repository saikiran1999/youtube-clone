import React from 'react'
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import Avatar from "@material-ui/core/Avatar"

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img 
                className="header__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/1/13/YOUTUBE_LOGO.png"
                alt=""/>
            </div>
            <div className="header__input">
                <input placeholder= "Search" type="text"/>
                <SearchIcon className="header__inputButton"/>
            </div>
            
            <div className="header_icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar 
                alt= "Sai Kiran"
                src="https://www.deviantart.com/tehscottman/art/Avengers-Iron-Man-Avatar-832165130"
                />
            </div>
            
        </div>
    )
}

export default Header
