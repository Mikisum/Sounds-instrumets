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
              className="player py-0"
              layout="stacked"
              src={ src }
              showJumpControls={false}
              customProgressBarSection={[RHAP_UI.VOLUME_CONTROLS, RHAP_UI.MAIN_CONTROLS, RHAP_UI.PROGRESS_BAR]}
              customControlsSection={[RHAP_UI.CURRENT_TIME,  RHAP_UI.DURATION]}
              autoPlayAfterSrcChange={false}
              />
      </div>
    )
  }
}