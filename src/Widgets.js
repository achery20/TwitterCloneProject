import React from 'react'
import './Widgets.css'
// nmp i react-twitter-embed command is runin the terminal. it will get live posts from the twitter website and put it in the widgets section
import{
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed'
import { Search } from '@material-ui/icons'

function Widgets() {
    return (
        <div className = "widgets"> 
            <div className = "widgets__input">
                <Search className = "widgets__SearchIcon"/>
                <input placeholder = "Search Twitter" type = "text" />
            </div>
            <div className = "widgets__widgetContainer">
                <h2>
                    What's happening
                </h2>
                <TwitterTweetEmbed tweetId = {"1703836536582619580"} />

                <TwitterTimelineEmbed 
                    sourceType = "profile"
                    screenName = "AppleSupport"
                    options = {{ height: 400 }}
                />

                <TwitterShareButton 
                    url = {"https://facebook.com/akkyProjects"}
                    options = { { text : "Subscribe my Youtube Channel #CodeWithAkky" , via :  "akkyProjects" }}
               />

            </div>
            
        </div>
    )
}

export default Widgets
