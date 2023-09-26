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
import { Button }  from "@material-ui/core";




function Sidebar() {
    return (
        <div className = "sidebar">
            {/* <TwitterIcon className = "sidebar__twitterIcon"/> */}
            
            {/* <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 512 512" className = "Xlogo"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg> */}
            
            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-gupqjj"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>


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
