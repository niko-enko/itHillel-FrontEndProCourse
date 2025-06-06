import {API_URL, QUERIES, PATH} from '../config/config.js'

const request = async (url, init) => {
    try {
        const response = await fetch(url, init)

        if (!response.ok) {
            throw new Error(`API response error. Code: ${response.status}.`)
        }

        return await response.json()
    } catch (err) {
        console.log(err)
        return []
    }
}

export const loadPosts = async () => {
    const url = `${API_URL}/${PATH.posts}?${QUERIES.limit}=10`

    const requestParams = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json, charset=UTF-8'
        }
    }

    const response = await request(url, requestParams)

    if (!response.length) {
        return
    }

    return response
}

export const loadComments = async (postId) => {
    const id = postId.split('-')[1]

    const url = `${API_URL}/${PATH.posts}/${id}/${PATH.comments}?${QUERIES.limit}=2`

    const requestParams = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json, charset=UTF-8'
        }
    }

    const response = await request(url, requestParams)

    if (!response.length) {
        return
    }

    return response
}

export const uploadPost = async (postData) => {
    const url = `${API_URL}/${PATH.posts}`

    const requestParams = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json, charset=UTF-8'
        },
        body: JSON.stringify(postData)
    }

    return await request(url, requestParams)
}