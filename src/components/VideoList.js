import React from 'react'
import VideoItem from './VideoItem'

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video}
            />
        )
    })

    return (
        <ul className='col-lg-4'>
            {videoItems}
        </ul>
    )
}

export default VideoList