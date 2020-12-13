import './App.css';
import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetails';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { videos:[], selectedVideo: null};
  }

  componentDidMount() {
    this.onFormSubmit('buildings');
  }

  onFormSubmit = (term) => {
    youtube.get('/search', {
      params: {
        q: term
      }
    }).then(data => {
      this.setState({ videos:data.data.items, selectedVideo: data.data.items[0] })
    }).catch(error => {
      console.log('error', error);
    })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>

    );
  }

}

export default App;
