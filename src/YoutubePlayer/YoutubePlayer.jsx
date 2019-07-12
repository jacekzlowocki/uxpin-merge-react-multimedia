import React from 'react';
import propTypes from 'proptypes';
import YouTube from 'react-youtube';

const parseBoolToInt = (bool) => bool ? 1 : 0;

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
      videoId,
      width,
    } = this.props;

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
  videoId: propTypes.string.isRequired,
  width: propTypes.number,
  height: propTypes.number,
  autoplay: propTypes.bool,
  controls: propTypes.bool,
  loop: propTypes.bool,
  onEnd: propTypes.func,
  onPause: propTypes.func,
  onPlay: propTypes.func,
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
