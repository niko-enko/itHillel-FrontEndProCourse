const createErrorBlock = (errorText) => {
    const errorBlock = document.createElement('li')
    errorBlock.classList.add('comments__li')
    errorBlock.innerText = `${errorText}`

    return errorBlock
}

const createPostBlock = (postData) => {
    const postBlock = document.createElement('li')
    postBlock.classList.add('post')

    const {title, body, id}  = postData
    postBlock.id = `post-${id}`

    postBlock.innerHTML = `
        <h2>${title}</h2>
        <p>${body}</p>
        <div class="post-actions">
            <button id="load-comments">Load comments</button>
        </div>
    `

    return postBlock
}

const createCommentBlock = (commentData) => {
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

export const renderPosts = (postData) => {
    const postsList = document.querySelector('.posts-list')

    const post = createPostBlock(postData)

    postsList.appendChild(post)
}

export const renderComments = (id, commentsData) => {
    const post = document.querySelector(`#${id}`)

    const commentContainer = document.createElement('ul')
    commentContainer.classList.add('comments')

    if (!commentsData) {
        const errorBlock = createErrorBlock('No comments yet')
        commentContainer.appendChild(errorBlock)
    } else {
        commentsData.forEach(comment => {
            const commentBlock = createCommentBlock(comment)
            commentContainer.appendChild(commentBlock)
        })
    }



    post.appendChild(commentContainer)
}


