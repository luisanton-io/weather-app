import { useEffect, createRef, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Store } from '../store'

export default function VideoBackground() {
    const videoRef = createRef<HTMLVideoElement>()
    const source = useSelector((store: Store) => store.videoBackground)

    useEffect(() => {
        const { current: video } = videoRef
        video!.playbackRate = 1.5
        video!.muted = true
    }, [])

    return (
        <video ref={videoRef} autoPlay loop playsInline src={source} />
    )
}