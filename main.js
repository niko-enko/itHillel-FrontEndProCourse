const container = document.querySelector('#container');
const paragraph = document.querySelector('#text')

container.addEventListener('click', () => {
    paragraph.classList.toggle('active')
})