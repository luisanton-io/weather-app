import { UserCity } from "../models/classes";
import { Video } from "../models/video";

const makeAction = <T extends ActionType, P>(
  type: T,
  payload?: P
) => ({ type, payload: payload! });

type ActionType = keyof typeof Actions;
export type Action = ReturnType<typeof Actions[ActionType]>;

export const Actions = {
  add: (city: UserCity) => makeAction("add", city),
  remove: (id: number) => makeAction("remove", id),
  setCurrent: (city: UserCity) => makeAction("setCurrent", city),
  resetCurrent: () => makeAction("resetCurrent"),
  changeBackground: (video: Video) => makeAction("changeBackground", video)
};