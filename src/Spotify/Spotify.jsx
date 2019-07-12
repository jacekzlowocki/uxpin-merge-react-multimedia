import React from 'react';
import SpotifyPlayer from 'react-spotify-player';
import PropTypes from 'proptypes';

class Spotify extends React.Component {
  render() {
    const {
      uri,
      height,
      view,
      theme,
    } = this.props;

    const size = { width: '100%', height };

    if (!uri || !uri.trim().length) {
      return null;
    }

    return (
      <SpotifyPlayer
        uri={uri}
        size={size}
        view={view}
        theme={theme}
      />
    );
  }
}

Spotify.propTypes = {
  uri: PropTypes.string.isRequired,
  height: PropTypes.number,
  theme: PropTypes.oneOf(['black', 'white']),
  view: PropTypes.oneOf(['list', 'coverart']),
};

Spotify.defaultProps = {
  height: 300,
  theme: 'black',
  view: 'list',
};

export default Spotify;
