import React from 'react';

const SongList = ({ songs, songClick }) => (
    <div>
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
                <tr className="song-row" key={song.url} onClick={() => songClick(song.name, song.url)}>
                    <td>{song.id}</td>
                    <td>{song.name}</td>
                    <td>{song.url}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
);

export default SongList;

