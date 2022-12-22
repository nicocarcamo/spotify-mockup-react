import { useState, useEffect, useRef } from 'react';
import SongList from './SongList';
import AudioControls from './AudioControls';
import '../index.css';

const MusicPlayer = () => {
  const [play, setPlay] = useState(false);
  const [currentSong, setCurrentSong] = useState('');
  const [songs, setSongs] = useState([]);
  const audioRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const fetchSongList = async () => {
      try {
        const response = await fetch('https://assets.breatheco.de/apis/sound/songs');
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSongList();
  }, []);

  const handlePlayButton = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
    setPlay(!play);
  };

  const handleSongClick = (name, url) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    const fullUrl = 'https://assets.breatheco.de/apis/sound/' + url;
    const newAudio = new Audio(fullUrl);
    newAudio.play();
    audioRef.current = newAudio;
    setCurrentSong(name);
    setPlay(true);
    indexRef.current = songs.findIndex((song) => song.url === url);
  };

  const handleSkipButton = (direction) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    if (direction === 'backward') {
      if (indexRef.current > 0) {
        indexRef.current--;
      } else {
        indexRef.current = songs.length - 1;
      }
    } else if (direction === 'forward') {
      if (indexRef.current < songs.length - 1) {
        indexRef.current++;
      } else {
        indexRef.current = 0;
      }
    }

    const currentSong = songs[indexRef.current];
    const fullUrl = 'https://assets.breatheco.de/apis/sound/' + currentSong.url;
    const newAudio = new Audio(fullUrl);
    newAudio.play();
    audioRef.current = newAudio;
    setCurrentSong(currentSong.name);
    setPlay(true);
  };

  return (
    <div className="music-player">
      <SongList songs={songs} songClick={handleSongClick} />
      <AudioControls
        play={play}
        currentSong={currentSong}
        playButton={handlePlayButton}
        skipButton={handleSkipButton}
      />
    </div>
  );

};

export default MusicPlayer;
