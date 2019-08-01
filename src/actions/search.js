import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  var url = '';
  // var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${5}&q=${q}&key=${YOUTUBE_API_KEY}`;
  //TODO:  Write an asynchronous action to handle a video search!

  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((videos) => {
        console.log(`FETCH SUCCESSFUL ${response}`);
        return dispatch(changeVideoList(videos))
      });
  };
};

export default handleVideoSearch;
