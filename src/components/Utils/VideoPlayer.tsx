"use client"
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

export default function videoPlayer({ videoId }: { videoId: string }) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (<YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />)
}