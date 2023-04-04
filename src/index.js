import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList'

const API_KEY = 'AIzaSyD_vmn1B7xfBtgpFLGcXPuH5Qvyfi2Sj5s'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('surfboards')
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term}, (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            })
        })
    }

    render() {
        const videoSearch = _.debounce((term ) => { this.videoSearch(term) }, 300)

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))