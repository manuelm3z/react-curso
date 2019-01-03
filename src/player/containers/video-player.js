import React, {
  Component
} from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import VideoPlayerControls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0
  }
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    });
  }
  componentDidMount() {
    this.setState({
      pause: !this.props.autoPlay
    });
  }
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    });
  }
  handleTimeUpdate = event => {
    this.setState({
      currentTime: this.video.currentTime
    });
  }
  handleProgressChange = event => {
    this.video.currentTime = event.target.value;
  }
  render() {
    return (
      <VideoPlayerLayout>
        <Title
          title="Esto es un video chido!"
          />
        <VideoPlayerControls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
            />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
            />
          <ProgressBar
            value={this.state.currentTime}
            duration={this.state.duration}
            handleProgressChange={this.handleProgressChange}
            />
        </VideoPlayerControls>
        <Video
          autoPlay={this.props.autoPlay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;