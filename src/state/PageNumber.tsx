import { atom } from "recoil"

export const LowerPageNumberAtom = atom({
    key: "LowerPageNumberAtom",
    default: 0,
})

export const UpperPageNumberAtom = atom({
    key: "UpperPageNumberAtom",
    default: 10,
})
