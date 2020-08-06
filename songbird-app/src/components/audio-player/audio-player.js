import React, { Component } from 'react';
import './audio-player.css';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default class Player extends Component {

  render() {
    const { src } = this.props;
    return (
      <div className="player">
        <AudioPlayer
              className="player"
              // autoPlay
              src={ src }
              layout="horizontal-reverse"
              showJumpControls={false}
              customControlsSection={
                [RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME_CONTROLS]
              }
              autoPlayAfterSrcChange={false}
              />
      </div>
    )
  }
}