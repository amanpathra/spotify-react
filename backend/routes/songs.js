import express from 'express';
import songsInfo from '../assets/info.js';
import fs from 'fs';

const imagePath = 'D:/Web Developement/Projects/36. Spotify Clone (React)/backend/assets/covers/';
const songPath = 'D:/Web Developement/Projects/36. Spotify Clone (React)/backend/assets/songs/';

const router = express.Router();

router.get('/songsInfo', (req, res) => {
    try {
        res.status(200).json(songsInfo);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
})

router.get('song/:song', (req, res) => {
    try {
        fs.readFile(songPath + `${req.params.song}.mp3`, (err, data) => {
            if (err) {
                console.error(`Error reading song: ${err}`);
                return;
            }
            res.setHeader('Content-Type', 'audio/mpeg');
            res.setHeader('Content-Length', data.length);
            res.end(data);
        });
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error');
    }
})

router.get('/video', (req, res) => {
    // Set headers for video file
    res.setHeader('Content-Type', 'video/x-matroska'); // Set the appropriate MIME type for MKV
    res.setHeader('Content-Disposition', 'inline; filename="example.mkv"'); // Set the filename
    res.setHeader('Accept-Ranges', 'bytes'); // Enable support for byte range requests (useful for video streaming)

    // Replace 'path/to/your/video.mkv' with the actual path to your video file
    const videoPath = 'D:/Movies n Shows/Dr. Stone/DrStone S01E01.mkv';

    // Stream the video file
    const videoStream = fs.createReadStream(videoPath);
    videoStream.pipe(res);
});

router.get('/cover/:num', (req, res) => {
    try {
        fs.readFile(imagePath+`${req.params.num}.jpg`, (err, data) => {
            if (err) {
                console.error(`Error reading the image file: ${err}`);
                return;
            }
            res.setHeader('Content-Type', 'image/jpeg');
            res.setHeader('Content-Length', data.length);
            res.end(data);
        });
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error');
    }
})

export default router;