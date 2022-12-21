import React, { useEffect } from 'react';
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js';
import 'video.js/dist/video-js.css';
import "./Theme.css";
import 'videojs-contrib-quality-levels'
import videojsqualityselector from 'videojs-hls-quality-selector';
import styled from 'styled-components';

const Video = styled.video`
  .vjs-menu-content{
    display: flex;
    flex-direction: column-reverse;
  }

  .vjs-menu-title{
    order: 1;
  }

`;

function VideoPlayer(props: {}){
    const videoRef = React.useRef<HTMLVideoElement | null>(null);
    const playerRef = React.useRef<VideoJsPlayer | null>(null);

    useEffect(() => {
      // Make sure Video.js player is only initialized once
      if (!playerRef.current) {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const options: VideoJsPlayerOptions  = {
            autoplay: false,
            controls: true,
            disablePictureInPicture: true,
            responsive: true,
            controlBar: {
              pictureInPictureToggle: false,
              audioTrackButton: false,
              
            },
            bigPlayButton: true,
            poster: "https://wallpaperaccess.com/full/3137469.png",
            sources: [{
              src: 'http://amssamples.streaming.mediaservices.windows.net/634cd01c-6822-4630-8444-8dd6279f94c6/CaminandesLlamaDrama4K.ism/manifest(format=m3u8-aapl)',
              type: 'application/x-mpegURL',
            }]
          };
  
        playerRef.current = videojs(videoElement, options, () => {
          //Callback function
        });
        playerRef.current.qualityLevels();
        playerRef.current.hlsQualitySelector = videojsqualityselector;

        playerRef.current.hlsQualitySelector({
          displayCurrentQuality: true,
      });
      // on prop change, for example:
      } else {
  
        // player.autoplay(options.autoplay);
        // player.src(options.sources);
      }
    }, [videoRef]);
  
    return (
        <Video ref={videoRef} className='video-js vjs-big-play-centered ' />
    );
}

export default VideoPlayer;