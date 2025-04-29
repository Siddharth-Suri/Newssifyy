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
export interface userReqestType {
    id: number
    about: string
    created: number
    karma: number
    submitted: number[]
}

export const topStoriesRequest = async (
    selection: string
): Promise<topStoriesType> => {
    const res = await axios.get<topStoriesType>(
        `https://hacker-news.firebaseio.com/v0/${selection}stories.json?print=pretty`
    )
    return res.data
}

export const requestById = async (): Promise<topStoriesType> => {
    const id = 43825900
    const res = await axios.get<topStoriesType>(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    )
    return res.data
}

export const requestByUser = async (): Promise<userReqestType> => {
    const id = 43825900
    const res = await axios.get<userReqestType>(
        `https://hacker-news.firebaseio.com/v0/user/${id}.json?print=pretty`
    )
    return res.data
}
