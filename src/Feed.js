import React from 'react'
import "./Feed.css"
import TweetBox from './TweetBox'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            {/* Home component*/}
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            {/* Tweetbox component*/}
            <TweetBox/>
            {/* Post component */}
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/> 
        </div>
    );
}

export default Feed
