import { atom } from "recoil"
import { topStoriesType } from "../utils/api"

export const StoryByIdAtom = atom<topStoriesType[]>({
    key: "StoryById",
    default: [],
})
