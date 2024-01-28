import { createContext, useState } from "react";

export const Context = createContext();

const Store = (props) => {

    const allSongsInfo = [
        { number: 1, name: "On & On", artist: "Cartoon", songPath: "songs/1.mp3", coverPath: "../assets/covers/1.jpg", duration: "3:50" },
        { number: 2, name: "Heroes Tonight", artist: "Janji", songPath: "songs/2.mp3", coverPath: "../assets/covers/2.jpg", duration: "2:33" },
        { number: 3, name: "Invincible", artist: "DEAF KEV", songPath: "songs/3.mp3", coverPath: "../assets/covers/3.jpg", duration: "4:33" },
        { number: 4, name: "My Heart", artist: "Different Heaven", songPath: "songs/4.mp3", coverPath: "../assets/covers/4.jpg", duration: "4:27" },
        { number: 5, name: "Mortals", artist: "Warriyo", songPath: "songs/5.mp3", coverPath: "../assets/covers/5.jpg", duration: "3:28" },
        { number: 6, name: "Blank", artist: "Disfigure", songPath: "songs/6.mp3", coverPath: "../assets/covers/6.jpg", duration: "3:28" },
        { number: 7, name: "Sky High", artist: "Elektronomia", songPath: "songs/7.mp3", coverPath: "../assets/covers/7.jpg", duration: "4:33" },
        { number: 8, name: "Symbolism", artist: "Electro-Light", songPath: "songs/8.mp3", coverPath: "../assets/covers/8.jpg", duration: "3:50" },
        { number: 9, name: "Why We Lose", artist: "Cartoon", songPath: "songs/9.mp3", coverPath: "../assets/covers/9.jpg", duration: "3:28" },
        { number: 10, name: "Fearless", artist: "Lost Sky", songPath: "songs/10.mp3", coverPath: "../assets/covers/10.jpg", duration: "4:27" },
    ];

    const [audio, setAudio] = useState(new Audio('media/11'));

    return (
        <Context.Provider value={{ allSongsInfo, audio, setAudio }}>
            {props.children}
        </Context.Provider>
    )
}

export default Store;