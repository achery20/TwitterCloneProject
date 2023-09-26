// rfce to create a react file template
import React from 'react'
import { Avatar } from "@material-ui/core"
import { Button } from "@material-ui/core"
import "./TweetBox.css"


function TweetBox() {
    return (
        <div className = "tweetBox">
            <form> 
                <div className = "tweetBox__input">
                    <Avatar
                        src = "https://media.licdn.com/dms/image/D4E03AQFaSAAHiRewkQ/profile-displayphoto-shrink_100_100/0/1669405526808?e=1693440000&v=beta&t=rsEYWsKfU6QftYMjUPAFNFK_dYuXQX_2Zzrhh6P-uCM"
                    />
                    <input
                        type = "text" 
                        placeholder = "What's happening?"
                    />
                </div>
                <input
                    className = "tweetBox__imageInput"
                    placeholder = "Optional: Enter Image URL"
                />
                <Button className = "tweetBox__tweetButton">
                Tweet </Button> 
            </form>
        </div>
    )
}

export default TweetBox
