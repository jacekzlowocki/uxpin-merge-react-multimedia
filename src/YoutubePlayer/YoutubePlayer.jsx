import * as Ract from 'react';
import propTypes from 'proptypes';
import YouTube from 'react-youtube';

class YouTubePlayer extends React.Component {
  render() {
    const { videoId } = this.props;

    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube videoId={videoId} opts={opts} />
    );
  }
}

YouTubePlayer.propTypes = {
  videoId: propTypes.string.isRequired,
};

export default YouTubePlayer;
