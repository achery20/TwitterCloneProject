import React from 'react'
import './Post.css'
import { Avatar } from "@material-ui/core"
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import feedpost2 from './feedpost2.jpeg'
//icons
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post() {
    return (
        <div className = "post"> 
            <div className = "post__avatar">
                <Avatar/>
            </div>
            <div className = "post__body">
                <div className = "post__header">
                    <div className = "post__headerText">
                        <h3>DisplayName
                        <span className = "post__headerSpecial">
                            <VerifiedUserIcon className = "post__badge" />
                            @username
                        </span>
                        </h3>
                    </div>
                    <div className = "post__headerDescription">
                        <p>
                            This is a message
                        </p>
                    </div>
                </div>
                <img src={feedpost2} //use {} when important a local file
                    alt = "Aleika Chery"
                />
                <div className = "post__footer"> 
                    <ChatBubbleOutlineIcon/>
                    <RepeatIcon/>
                    <FavoriteBorderIcon/>
                    <PublishIcon/>
                </div>
            </div>           
        </div>
    )
}

export default Post
