import React from 'react';
import PropTypes from 'proptypes';
import YouTube from 'react-youtube';

const parseBoolToInt = (bool) => bool ? 1 : 0;

const getVideoIdFromUrl = (url) => {
  const urlObject = new URL(url);
  const id = urlObject.searchParams.get('v');

  return id || '';
};

class YouTubePlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player: null,
    };

    this.onReady = this.onReady.bind(this);
  }

  playVideo() {
    this.state.player.playVideo();
  }

  pauseVideo() {
    this.state.player.pauseVideo();
  }

  onReady(event) {
    this.setState({ player: event.target });
  }

  render() {
    const {
      autoplay,
      controls,
      height,
      loop,
      onEnd,
      onPause,
      onPlay,
      videoUrl,
      width,
    } = this.props;

    const videoId = getVideoIdFromUrl(videoUrl);

    const opts = {
      height,
      width,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: parseBoolToInt(autoplay),
        controls: parseBoolToInt(controls),
        loop: parseBoolToInt(loop),
        rel: 0,
      },
    };

    return (
      <YouTube
        onEnd={onEnd}
        onPause={onPause}
        onPlay={onPlay}
        onReady={this.onReady}
        opts={opts}
        videoId={videoId}
      />
    );
  }
}

YouTubePlayer.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  autoplay: PropTypes.bool,
  controls: PropTypes.bool,
  loop: PropTypes.bool,
  onEnd: PropTypes.func,
  onPause: PropTypes.func,
  onPlay: PropTypes.func,
};

YouTubePlayer.defaultProps = {
  autoplay: true,
  controls: true,
  height: 360,
  loop: false,
  onEnd: () => {},
  onPause: () => {},
  onPlay: () => {},
  width: 640,
};

export default YouTubePlayer;
