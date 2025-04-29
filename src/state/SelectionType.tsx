import { atom } from "recoil"

export const SelectionType = atom<string>({
    key: "SelectionType",
    default: "top",
})
