const container = document.querySelector('#container');

container.addEventListener('click', (e) => {
    if (e.target.id === 'goToPrompt') {
        const redirectTo = prompt('Введіть адресу веб сторінки у форматі *website.domain*');
        redirectTo ? window.location.href = `https://www.${redirectTo}/` : null;
    } else {
        window.location.href = 'https://www.google.com/';
    }
})
