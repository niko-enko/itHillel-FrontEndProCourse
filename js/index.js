import {renderPosts, renderComments} from "./ui.js";
import {loadPosts, loadComments, uploadPost} from "./api.js"

const addPostForm = document.querySelector('#form')
const postsList = document.querySelector('.posts-list')

postsList.addEventListener('click',  (e) => {
    const targetPostId = e.target.closest('.post').id

    loadComments(targetPostId)
        .then(comments => renderComments(targetPostId, comments))
})

addPostForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(addPostForm)

    const newPost = {
        title: formData.get('title'),
        body: formData.get('body'),
    }

    uploadPost(newPost)
        .then(id => renderPosts({...id, ...newPost}))
})

loadPosts()
    .then(posts => posts
        .forEach(post => renderPosts(post))
    )