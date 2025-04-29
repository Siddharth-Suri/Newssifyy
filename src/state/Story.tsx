import { atom } from "recoil"
import { allDataReturned } from "../utils/api"

export const StoryAtom = atom<allDataReturned>({
    key: "Story",
    default: [],
})
