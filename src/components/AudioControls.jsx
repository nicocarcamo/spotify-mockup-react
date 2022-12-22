import React from 'react';

const AudioControls = ({ play, currentSong, playButton, skipButton }) => {
    return (
        <div className="audio-controls">
            <button className="btn btn-secondary ms-2" onClick={() => skipButton('backward')}><i className="fa-solid fa-backward"></i></button>
            <button className="btn btn-secondary ms-2" onClick={playButton}>{play ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}</button>
            <button className="btn btn-secondary ms-2" onClick={() => skipButton('forward')}><i className="fa-solid fa-forward"></i></button>
            <div className="song-name fs-5 ms-4">{currentSong}</div>
        </div>
    );
};

export default AudioControls;
