import React from 'react';
import '../styles/Controls.css';

const Controls = () => {
    return (
        <div className='Controls'>
            <div className="controls_songInfo">
                <img src="https://media.istockphoto.com/id/1127565686/photo/vintage-vinyl-record-album-cover-mockup-flat-concept.webp?b=1&s=170667a&w=0&k=20&c=h60TEhymZ7Ol0e9zu9H3RTk8n4_KPsBAFRNO5NuUtGs=" alt="" />
                <div className="controls_songAndArtist">
                    <span>On & On</span>
                    <span>Cartoon</span>
                </div>
                <i className="fa-regular fa-heart controls_likeBtn"></i>
            </div>
            <div className="controls_panel">
                <div className="controls_panel_btns">
                    <i className="fa-solid fa-xl fa-shuffle"></i>
                    <i className="fa-solid fa-xl fa-backward-step" id="backwardPlay"></i>
                    <i className="fa-solid fa-2xl fa-circle-play" id="masterPlay"></i>
                    <i className="fa-solid fa-xl fa-forward-step" id="forwardPlay"></i>
                    <i className="fa-solid fa-xl fa-repeat"></i>
                </div>
                <div className="controls_playingBar">
                    <span>0:00</span>
                    <input onChange={()=>{}} type="range" name="playingRange" className="myProgressBar" min="0" max="1000" value="0"/>
                    <span>0:00</span>
                </div>
            </div>
            <div className="controls_more">
                <i className="fa-solid fa-desktop"></i>
                <i className="fa-solid fa-volume-low muteBtn"></i>
                <input onChange={()=>{}} type="range" name="soundRange" className="soundBar" min="0" max="100" value="25"/>
            </div>
        </div>
    )
}

export default Controls;