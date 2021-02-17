import { Store } from "..";
import { Video } from "../../models/video"
import { Action } from "../actions";

export const initialStore: Store = localStorage.getItem('STORE')
    ? JSON.parse(localStorage.getItem('STORE')!) as Store
    : {
        videoBackground: Video.Clear_01d,
        cities: []
    };

export default function rootReducer(store = initialStore, action: Action): Store {
    const newStore: Store = (() => {
        switch (action.type) {
            case "add":
                return {
                    ...store,
                    cities: [...store.cities, action.payload]
                };
            case "remove":
                return {
                    ...store,
                    cities: store.cities.filter(city => city.id !== action.payload)
                };
            case "setCurrent":
                return {
                    ...store,
                    currentCity: action.payload
                }
            case "resetCurrent":
                return {
                    ...store,
                    currentCity: undefined
                }
            case "changeBackground":
                return {
                    ...store,
                    videoBackground: action.payload
                }
            default:
                return store;
        }
    })()

    localStorage.setItem('STORE', JSON.stringify(newStore))

    return newStore
}
