const inputForm = document.querySelector('.card__form');

function showError(selector, message) {
    const errorHelperText = document.querySelector(`#err-${selector}`);

    errorHelperText.style.visibility = 'visible';
    errorHelperText.textContent = message;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function validateData(data) {
    const errorState = {}

    Object.keys(data).forEach((key) => {
        if (!data[key]) {
            errorState[key] = `${capitalizeFirstLetter(key)} is required`;
        } else {
            switch (key) {
                case 'message':
                    data[key].length < 5
                        ? errorState[key] = `${capitalizeFirstLetter(key)} must be at least 5 characters`
                        : delete errorState[key];

                    break;

                case 'phone':
                    !/^\+380\d{9}$/.test(data[key])
                        ? errorState[key] = `${capitalizeFirstLetter(key)} number must start with +380 and be 9 characters long`
                        : delete errorState[key]

                    break;

                case 'email':
                    !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data[key])
                        ? errorState[key] = `${capitalizeFirstLetter(key)} must contain @ symbol and domain name after it`
                        : delete errorState[key]

                    break;

                default: break;
            }
        }

        !errorState[key]
            ? showError(key, '')
            : showError(key, errorState[key]);
    })

    return errorState;
}

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(inputForm);

    const submitData = formData
        .keys()
        .reduce((acc, key) => (
            { ...acc, [key]:formData.get(key).trim() }
        ), {})

    const validationResult = validateData(submitData);

    if (Object.keys(validationResult).length === 0) {
        console.log('Sending this data to server:', submitData)
    }
})