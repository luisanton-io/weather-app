import { UserCity } from "../models/classes";
import { Video } from "../models/video";

const makeAction = <T extends ActionType, P>(
  type: T,
  payload?: P
) => ({ type, payload: payload! });

type ActionType = keyof typeof Actions;
export type Action = ReturnType<typeof Actions[ActionType]>;

export const Actions = {
  addCity: (city: UserCity) => makeAction("addCity", city),
  removeCity: (id: number) => makeAction("removeCity", id),
  setCurrentCity: (city: UserCity) => makeAction("setCurrentCity", city),
  resetCurrentCity: () => makeAction("resetCurrentCity"),
  changeBackground: (video: Video) => makeAction("changeBackground", video)
};