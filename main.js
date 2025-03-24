const container = document.querySelector('#container');

container.addEventListener('click', e => {
    const btn = e.target.innerText;
    console.log('Натиснуто по кнопці:', btn);
})