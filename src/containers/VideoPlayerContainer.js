import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var mapStatetoProps = (state) => {
  return {
    video: state.currentVideo
  }
}

var VideoPlayerContainer = connect(
  mapStatetoProps,
  null
)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
