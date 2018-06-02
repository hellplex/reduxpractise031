import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCkKNo_4GxB5jcyd1feUz8RzTI-OTJwF5A';
// https://console.developers.google.com/apis/credentials?project=reactdemos-205707&folder=&organizationId=

// Create component that produce some HTML
class App extends Component {
	
	constructor(props){
		super(props); 

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards' }, videos => {
			this.setState({ videos });
		});
	}

	render () {
		console.log('videos........', this.state.videos);
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />

			</div> 
		);
	}
}

 

// Take this component and put it on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));