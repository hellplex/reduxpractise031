import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCkKNo_4GxB5jcyd1feUz8RzTI-OTJwF5A';

class App extends Component {
	
	constructor(props){
		super(props); 

		this.state = { 
			videos: [],
			selectedVideo: null
		 };

		YTSearch({key: API_KEY, term: 'greyhound puppies' }, videos => {
			this.setState({ 
				videos,
				selectedVideo: videos[0] 
			});
		});
	}

	render () {
		console.log('videos........', this.state.videos);
		console.log('first video........', this.state.videos[1]);
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} 
				/>
			</div> 
		);
	}
}

 

// Take this component and put it on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));