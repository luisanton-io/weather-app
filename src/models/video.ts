export enum Video {
    Thunderstorm_11d = "https://res.cloudinary.com/medusa-cloud/video/upload/v1613503364/weather/thunderstorm_w9vvpd.mp4",

    Clear_01d = 'https://res.cloudinary.com/medusa-cloud/video/upload/v1613561142/weather/clearSky_o8my6g.mp4',

    Clouds_02d = 'https://res.cloudinary.com/medusa-cloud/video/upload/v1613503364/weather/clear_pvi2ad.mp4',
    Clouds_03d = 'https://res.cloudinary.com/medusa-cloud/video/upload/v1613503364/weather/clear_pvi2ad.mp4',

    Clouds_04d = "https://res.cloudinary.com/medusa-cloud/video/upload/v1613503310/weather/clouds_1_hvuxpi.mp4",

    Clear_01n = 'https://res.cloudinary.com/medusa-cloud/video/upload/v1613561533/weather/Rising_Full_Moon_Timelapse_udd9to.mp4',

    Clouds_02n = 'https://res.cloudinary.com/medusa-cloud/video/upload/v1613562310/weather/video_1_1_cemufa.mp4',
    Clouds_03n = 'https://res.cloudinary.com/medusa-cloud/video/upload/v1613562310/weather/video_1_1_cemufa.mp4',
    Clouds_04n = "https://res.cloudinary.com/medusa-cloud/video/upload/v1613589936/weather/night-clouds_1_ruxqml.mp4",

    Snow_13d = "https://res.cloudinary.com/medusa-cloud/video/upload/v1613503288/weather/snow_1_ygnsu5.mp4",
    Snow_13n = "https://res.cloudinary.com/medusa-cloud/video/upload/v1613503288/weather/snow_1_ygnsu5.mp4",

    Rain_10d = "https://res.cloudinary.com/medusa-cloud/video/upload/v1613503351/weather/rain_1_yyev7b.mp4",
    Rain_10n = "https://res.cloudinary.com/medusa-cloud/video/upload/v1613503351/weather/rain_1_yyev7b.mp4",
    Rain_13d = "https://res.cloudinary.com/medusa-cloud/video/upload/v1613503351/weather/rain_1_yyev7b.mp4",
    Rain_13n = "https://res.cloudinary.com/medusa-cloud/video/upload/v1613503351/weather/rain_1_yyev7b.mp4",
    Rain_09d = "https://res.cloudinary.com/medusa-cloud/video/upload/v1613503351/weather/rain_1_yyev7b.mp4",
    Rain_09n = "https://res.cloudinary.com/medusa-cloud/video/upload/v1613503351/weather/rain_1_yyev7b.mp4",

    Drizzle_09d = "https://res.cloudinary.com/medusa-cloud/video/upload/v1613503272/weather/drizzle_1_isfz3d.mp4",
    Drizzle_09n = "https://res.cloudinary.com/medusa-cloud/video/upload/v1613503272/weather/drizzle_1_isfz3d.mp4",

    Fog_50d = "https://res.cloudinary.com/medusa-cloud/video/upload/v1613503360/weather/fog_ac0tpz.mp4",
    Fog_50n = "https://res.cloudinary.com/medusa-cloud/video/upload/v1613503360/weather/fog_ac0tpz.mp4",
    Mist_50d = "https://res.cloudinary.com/medusa-cloud/video/upload/v1613503360/weather/fog_ac0tpz.mp4",
    Mist_50n = "https://res.cloudinary.com/medusa-cloud/video/upload/v1613503360/weather/fog_ac0tpz.mp4"
}

export const isVideoKey = (key: string): key is (keyof typeof Video) => {
    return Object.keys(Video).includes(key)
}