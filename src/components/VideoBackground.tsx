import { useEffect, createRef, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Store } from '../store'

export default function VideoBackground() {
    const video = createRef<HTMLVideoElement>()
    const source = useSelector((store: Store) => store.videoBackground)

    useEffect(() => { video.current!.playbackRate = 1.5 }, [])

    return (
        <video ref={video} autoPlay muted loop playsInline src={source} />
    )
}