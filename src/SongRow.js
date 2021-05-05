import React from 'react';
import './SongRow.css';

function SongRow({ track, playSong }) {
  console.log(track.artists.map(artist => artist.name));
  console.log(track.artists.map(artist => artist.name).join(', '));
  console.log(playSong);
  console.log(track.id);

  return (
    <div className="songRow" onClick={() => playSong(track.id)}>
      <img
        src={track.album.images[0].url}
        alt="album image"
        className="songRow__album"
      />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map(artist => artist.name).join(', ')} -{' '}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
