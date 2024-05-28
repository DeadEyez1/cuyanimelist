/* eslint-disable react/no-nested-components */
// TODO Fix this using React.FC
'use client'

import { MonitorPlay, MonitorX } from 'lucide-react'
import { useState } from 'react'
import type { YouTubeProps } from 'react-youtube'
import YouTube from 'react-youtube'

export default function VideoPlayer({ youtubeId }: { youtubeId: string }) {
  const [isOpen, setIsOpen] = useState(true)

  function handlePlayer() {
    setIsOpen(prevState => !prevState)
  }

  const opts: YouTubeProps['opts'] = {
    width: '640',
    height: '360',
  }

  function Player() {
    return (
      <div className="fixed bottom-2 right-2">
        <button type="button" onClick={handlePlayer} className="float-right bg-crust p-2"><MonitorX size={24} /></button>
        <YouTube
          videoId={youtubeId}
          onReady={event => event.target.pauseVideo()}
          opts={opts}
        />
      </div>
    )
  }

  function ButtonOpenPlayer() {
    return (<button type="button" onClick={handlePlayer} className="fixed bottom-5 right-5 bg-crust p-2"><MonitorPlay size={24} /></button>)
  }

  return isOpen ? <Player /> : <ButtonOpenPlayer />
}
