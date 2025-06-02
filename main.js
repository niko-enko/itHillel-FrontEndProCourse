const API_URL = 'https://jsonplaceholder.typicode.com/'

const addPostForm = document.querySelector('#form')
const postInput = document.querySelector('.form__input')
const postsList = document.querySelector('.posts-list')

function loadPosts() {
    return fetch(`${API_URL}/posts?_limit=10`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json, charset=UTF-8'
        }
    })
        .then(res => {
            if (!res.ok) {
                throw new Error(`Fail to load posts: ${res.statusText}`)
            }

            return res.json()
        })
        .then(data => data)
}

function loadComments(id) {
    const postId = id.split('-')[1]
    return fetch(`${API_URL}/posts/${postId}/comments?_limit=2`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json, charset=UTF-8'
        }
    })
        .then(res => {
            if (!res.ok) {
                throw new Error(`Fail to load comments: ${res.statusText}`)
            }

            return res.json()
        })
        .then(data => data)
}

function uploadPost(postData) {
    return fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json, charset=UTF-8'
        },
        body: JSON.stringify(postData)
    })
        .then(res => {
            if (!res.ok) {
                throw new Error(`Fail to upload post: ${res.statusText}`)
            }

            return res.json()
        })
        .then(data => data)
}

function renderPosts(postData) {
    const post = document.createElement('li')
    post.classList.add('post')

    console.log(postData)

    const {title, body, id} = postData
    post.id = `post-${id}`
    post.innerHTML = `
        <h2>${title}</h2>
        <p>${body}</p>
        <div class="post-actions">
            <button id="load-comments">Load comments</button>
        </div>
    `
    postsList.appendChild(post)
}

function createCommentBlock(commentData) {
    const commentBlock = document.createElement('li')
    commentBlock.classList.add('comments__li')

    const {name, email, body, id} = commentData
    commentBlock.id = `comment-${id}`
    commentBlock.innerHTML = `
            <div>
                <h4>${name}</h4>
                <span>${email}</span>
            </div>
            <p>${body}</p>
        `

    return commentBlock
}

const renderComments = (id, commentsData) => {
    const post = document.querySelector(`#${id}`)

    const commentContainer = document.createElement('ul')
    commentContainer.classList.add('comments')

    if (commentsData.length === 0) {
        const errorBlock = document.createElement('li')
        errorBlock.classList.add('comments__li')
        errorBlock.innerHTML = 'No comments'
        commentContainer.appendChild(errorBlock)
    }

    commentsData.forEach(comment => {
        const commentBlock = createCommentBlock(comment)

        commentContainer.appendChild(commentBlock)
    })

    post.appendChild(commentContainer)
}

postsList.addEventListener('click', (e) => {
    const targetPostId = e.target.closest('.post').id

    loadComments(targetPostId).then(comments => renderComments(targetPostId, comments))
})

addPostForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(addPostForm)

    const newPost = {
        title: formData.get('title'),
        body: formData.get('body'),
    }

    uploadPost(newPost).then(id => renderPosts({...id, ...newPost}))
})

loadPosts().then(posts => posts.forEach(post => renderPosts(post)))