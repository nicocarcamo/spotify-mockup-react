import { useState, useEffect } from 'react';
import './index.css';

const MusicPlayer = () => {

  const [play, setPlay] = useState(false);
  const [songs, setSongs] = useState([
    // { "id": 1, "category": "game", "name": "Mario Castle", "url": "files/mario/songs/castle.mp3" },
    // { "id": 2, "category": "game", "name": "Mario Star", "url": "files/mario/songs/hurry-starman.mp3" },
    // { "id": 3, "category": "game", "name": "Mario Overworld", "url": "files/mario/songs/overworld.mp3" }
  ]);

  useEffect(() => {
    fetch('https://assets.breatheco.de/apis/sound/songs')
      .then(response => response.json())
      .then(data => setSongs(data));
  }, []);

  const handlePlayButtonClick = () => {
    setPlay(!play);
  };

  return (
    <div className="music-player">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song.id}>
              <td>{song.id}</td>
              <td>{song.name}</td>
              <td>{song.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="audio-controls">
        <button className="btn btn-secondary ms-2"><i class="fa-solid fa-backward"></i></button>
        <button className="btn btn-secondary ms-2" onClick={handlePlayButtonClick}>
          {play ? <i class="fa-solid fa-pause"></i> : <i class="fa-solid fa-play"></i>}
        </button>
        <button className="btn btn-secondary ms-2"><i class="fa-solid fa-forward"></i></button>
      </div>
    </div>
  );
}

export default MusicPlayer;
