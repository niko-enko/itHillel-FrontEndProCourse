const main = document.querySelector('.about-us');
const cardContainer = document.querySelector('.card-container');
const nextButton = document.querySelector('#card-next');
const prevButton = document.querySelector('#card-prev');
const sliderContainer = document.querySelector('.slider');

const cardsList = [
    {
        image: './img/oleksand-oleksandrovskiy.png',
        statement: 'Ми звикли брати на себе відповідальність та завжди ' +
            'гарантуємо чесну, вчасну допомогу, навіть у ситуаціях коли більшість безсилі',
        aboutPerson: {
            name: 'Олександр Олександровський',
            role: 'Керуючий партнер',
        },
    },
    {
        image: './img/iryna-kovalchuk.png',
        statement: 'Ми не просто працюємо — ми створюємо рішення, які змінюють життя людей на краще. ' +
            'Наш підхід — це поєднання досвіду та щирого бажання допомогти.',
        aboutPerson: {
            name: 'Ірина Ковальчук',
            role: 'Провідна консультантка',
        },
    },
    {
        image: './img/dmytro-savchenki.png',
        statement: 'Кожен наш крок — це впевненість у результаті. ' +
            'Ми завжди на стороні тих, хто потребує підтримки, і не боїмось складних викликів.',
        aboutPerson: {
            name: 'Дмитро Савченко',
            role: 'Юридичний радник',
        },
    }
]

function CardAction (cardsList) {
    let cardId = 0;
    const maxCards = cardsList.length - 1;

    const createCard = (id, person) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.id = `team-member-${id}`;
        card.innerHTML = `
        <img class="card__image" src="${person.image}" alt="'На фото представлено ${person.aboutPerson.name}'">
        <div class="card__text">
            <div class="card__main">
                <a href="http://" class="card__link">Команда</a>
                <h3 class="card__statement">${person.statement}</h3>            
            </div>
            <div class="card__person">
                <span class="card__name">${person.aboutPerson.name}</span>
                <span class="card__role">${person.aboutPerson.role}</span>
            </div>
        </div>
    `
        return card;
    }

    // Initial Card IIFE
    {
        cardContainer.appendChild(createCard(cardId, cardsList[cardId]))
    }

    const deleteCurrentCard = () => {
        const currentCard = document.querySelector(`#team-member-${cardId}`);
        cardContainer.removeChild(currentCard);
    }

    const showNewCard = () => {
        const newCard = createCard(cardId, cardsList[cardId]);
        cardContainer.appendChild(newCard)
    }

    const setButtonVisibility = () => {
        if (cardId === 0) {
            prevButton.classList.add('main__button--hidden');
            nextButton.classList.remove('main__button--hidden');
        }

        if (cardId > 0 && cardId < maxCards) {
            prevButton.classList.remove('main__button--hidden');
            nextButton.classList.remove('main__button--hidden');
        }

        if (cardId === cardsList.length - 1) {
            prevButton.classList.remove('main__button--hidden');
            nextButton.classList.add('main__button--hidden');
        }
    }

    this.showNextCard = () => {
        deleteCurrentCard();
        cardId++;
        showNewCard();
        setButtonVisibility();
    }

    this.showPrevCard = () => {
        deleteCurrentCard();
        cardId--;
        showNewCard();
        setButtonVisibility();
    }

    this.goToSpecificCard = (goToId) => {
        deleteCurrentCard();
        cardId = Number(goToId);
        setButtonVisibility();
        showNewCard();

    }
}

// Slider IIFE
{
    Object.keys(cardsList).forEach((item) => {
        const dot = document.createElement('li');
        dot.classList.add('slider__dot');
        dot.id = item;

        if (item === '0') {
            dot.classList.add('slider__dot--active');
        }

        sliderContainer.appendChild(dot);
    })
}

const cardAction = new CardAction(cardsList);

main.addEventListener('click', (e) => {
    if (!e.target.classList.contains('about-us__button')) {
        return;
    }

    if (e.target.id === 'card-next') {
        cardAction.showNextCard();
    } else if (e.target.id === 'card-prev') {
        cardAction.showPrevCard();
    }
})

sliderContainer.addEventListener('click', (e) => {
    if (!e.target.classList.contains('slider__dot')) {
        return;
    }

    cardAction.goToSpecificCard(e.target.id);
})
