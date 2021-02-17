import { createStore } from 'redux';
import rootReducer from './reducers/root'
import { UserCity } from "../models/classes";
import { Video } from '../models/video';

export interface Store {
    videoBackground: Video
    cities: UserCity[];
    currentCity?: UserCity
}

export const store = createStore(rootReducer)