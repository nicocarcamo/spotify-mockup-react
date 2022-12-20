import { useState, useEffect } from 'react';

function SongList() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('https://assets.breatheco.de/apis/sound/songs')
      .then(response => response.json())
      .then(data => setSongs(data));
  }, []);

  return (
    <div>
      {songs.map((song) => (
        <div>
          <h3 key={song.id}>{song.name}</h3>
        </div>
      ))}
    </div>
  );
}
export default SongList;