import axios from "axios"
export interface topStoriesType {
    id: number
    title: string
    by: string
    text?: string
    url?: string
    time: number
    score: number
    kids: number[]
    descendants: number
}
export type allDataReturned = number[]

export interface userReqestType {
    id: string
    about: string
    created: number
    karma: number
    submitted: number[]
}

export const topStoriesRequest = async (
    selection: string
): Promise<allDataReturned> => {
    const res = await axios.get<allDataReturned>(
        `https://hacker-news.firebaseio.com/v0/${selection}stories.json?print=pretty`
    )
    return res.data
}

export const requestById = async (id: number): Promise<topStoriesType> => {
    const res = await axios.get<topStoriesType>(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    )
    return res.data
}

export const requestByUser = async (): Promise<userReqestType> => {
    const id = "jl"
    const res = await axios.get<userReqestType>(
        `https://hacker-news.firebaseio.com/v0/user/${id}.json?print=pretty`
    )
    return res.data
}
