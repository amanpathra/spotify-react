import React, { useContext, useEffect, useState } from 'react';
import '../styles/Main.css';
import {Context} from '../context/Store';

const Main = () => {

    const store = useContext(Context);
    const { allSongsInfo, audio, setAudio } = store;

    const handlePlayClick = async (song) => {
        // audio.src = require(`../assets/songs/${song.number}.mp3`);
        let source = require(`../assets/songs/${song.number}.mp3`);
        // setAudio(new Audio(source));
        const newAudio = new Audio(source);
        newAudio.addEventListener('canplaythrough', ()=>{
            setAudio(newAudio);
            console.dir(audio.src)
            audio.play();
        })
        // audio.currentTime = 0;
    }

    const SongComp = ({ song }) => {
        return (
            <div className="main_songItem">
                <img src={require(`../assets/covers/${song.number}.jpg`)} alt="" />
                <div className="main_nameAndArtist">
                    <span
                        className={audio.src.match(/media\/\d{1,2}/)[0].substring(6) === song.number.toString() ? 'spGreen' : ''}
                    >
                        {song.name}
                    </span>
                    <span>{song.artist}</span>
                </div>
                <span className='main_songLength'>{song.duration}</span>
                <i 
                    className="fa-solid fa-xl fa-play songPlay"
                    onClick={() => handlePlayClick(song)}
                ></i>
            </div>
        )
    }

    return (
        <div className='Main'>
            <h1>Best of NCS - No Copyright Sounds</h1>
            <div className="main_songs">
                {allSongsInfo.map(song => (
                    <SongComp song={song} key={song.number}/>
                ))}
            </div>
        </div>
    )
}

export default Main;