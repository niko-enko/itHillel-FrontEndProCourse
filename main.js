const phoneBook = {
    contacts: [
        {name: 'Данило', phoneNum: '380998887766', email: 'danylo@email.com'},
        {name: 'Петро', phoneNum: '380887776655', email: 'petro@email.com'},
        {name: 'Христина', phoneNum: '380776665544', email: 'khrystyna@email.com'},
    ],

    getContactIfo (name) {
        return this.contacts.find((contact) => contact.name === name);
    },

    addContactInfo (name, phoneNum, email) {
        return this.contacts.push({name, phoneNum, email});
    },
}

console.log(phoneBook.getContactIfo('Данило'))

phoneBook.addContactInfo('Василь', '380665554433', 'vasyl@email.com');

console.log(phoneBook.getContactIfo('Василь'))