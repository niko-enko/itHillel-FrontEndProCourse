function  User (name, age,gender, country, city) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.country = country;
    this.city = city;
    this.getUserInfo = (fullInfo) => {
        return fullInfo
        ? console.log(`Користувач ${this.name}: вік - ${this.age}, стать - ${this.gender}, країна - ${this.country}, місто - ${this.city}`)
        : console.log(`Користувач ${this.name} з міста ${this.city}, ${this.country}`)
    };
}

const user = new User('Данило', 27, 'чоловіча', 'Україна', 'Київ');

console.log(user);
user.getUserInfo(true);