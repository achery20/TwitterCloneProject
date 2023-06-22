//use rcfe to create an automatic functional component without having to type it all out
import React from 'react'
import "./Sidebar.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SidebarOptions from './SidebarOptions';
import { Button } from "@material-ui/core";



function Sidebar() {
    return (
        <div className = "sidebar">
            <TwitterIcon className = "sidebar__twitterIcon"/>
            <SidebarOptions 
                active
                Icon = {HomeIcon} text = "Home"/>
            <SidebarOptions Icon = {SearchIcon} text = "Search"/>
            <SidebarOptions Icon = {NotificationsNoneIcon} text = "Notifications"/>
            <SidebarOptions Icon = {MailOutlineIcon} text = "Message"/>
            <SidebarOptions Icon = {BookmarkBorderIcon} text = "Bookmarks"/>
            <SidebarOptions Icon = {ListAltIcon} text = "Lists"/>
            <SidebarOptions Icon = {PermIdentityIcon} text = "Profile"/>
            <SidebarOptions Icon = {MoreHorizIcon} text = "More"/>   
            {/* creates a button and gives the button a black border */}
            <Button className = "sidebar__tweet" variant = "outlined">
                Tweet </Button> 
        </div>
    );
}

export default Sidebar;
