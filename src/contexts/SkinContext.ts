import { createContext, useState } from 'react'
import { Skin } from '../models/skin'

const SkinContext = createContext<[Skin, (skin: Skin) => void]>([Skin.day, (skin) => { }])

export default SkinContext