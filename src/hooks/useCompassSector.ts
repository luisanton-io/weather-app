import { useCallback } from "react"

const compassSectors = [
    'N', 'NNE', 'NE', 'ENE',
    'E', 'ESE', 'SE', 'SSE',
    'S', 'SSW', 'SW', 'WSW',
    'W', 'WNW', 'NW', 'NNW'
]

const sectorArea = 22.5 // 360 / 16 --> [compassSectors.length]

export default () => useCallback(
    (deg: number) => compassSectors[Math.floor((deg % 360) / sectorArea)],
    []
)
