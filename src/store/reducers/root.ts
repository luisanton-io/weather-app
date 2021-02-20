import { Store } from "..";
import { Video } from "../../models/video"
import { Action } from "../actions";

const local = {
    get store() {
        return localStorage.getItem("STORE")
            ? JSON.parse(localStorage.getItem("STORE")!) as Store
            : {
                videoBackground: Video.Clear_01d,
                cities: []
            }
    },
    set store(newStore: Store) {
        localStorage.setItem("STORE", JSON.stringify(newStore))
    }
}

export const initialStore: Store = local.store

export default function rootReducer(store = initialStore, action: Action): Store {
    local.store = (() => {
        switch (action.type) {
            case "addCity":
                return {
                    ...store,
                    cities: [...store.cities, action.payload]
                };
            case "removeCity":
                return {
                    ...store,
                    cities: store.cities.filter(city => city.id !== action.payload)
                };
            case "setCurrentCity":
                return {
                    ...store,
                    currentCity: action.payload
                }
            case "resetCurrentCity":
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

    return local.store
}
