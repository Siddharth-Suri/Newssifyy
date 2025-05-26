import { atom, selector } from "recoil"
import { allDataReturned } from "../utils/api"

export const StoryAtom = atom<allDataReturned>({
    key: "Story",
    default: [],
})

export const sizeofProductsPagedSelector = selector({
    key: "sizeofProductsPagedSelector",
    get: ({ get }) => {
        const totalProducts = get(StoryAtom)
        const pageSize = 10
        const sizeOfTotalProducts = totalProducts.length
        const sizeofProductsPaged = sizeOfTotalProducts / pageSize
        return sizeofProductsPaged
    },
})
