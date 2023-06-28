const year = +prompt('Вітаю! Підкажіть, будь ласка, ваш рік народження');
if (!year || isNaN(year)) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження");
} else {
    let currentYear = new Date().getFullYear();
    let age = currentYear - year;
    alert(`Ваш вік: ${age}`)
}
const city = prompt("В якому місті Ви живете?");
const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
if (!city || !isNaN(city) || hasSpecialCharacters.test(city)) {
    alert("Шкода, що Ви не захотіли ввести свoє місто в якому проживаєте");
} else {
    switch (city) {
        case "Київ":
            alert("Ти живеш у столиці України");
            break
        case "Лондон":
            alert("Ти живеш у столиці Англії");
            break;
        case "Вашингтон":
            alert("Ти живеш у столиці США");
            break
        default:
            alert(`Ви проживаєте в місті ${city}`);
            break;
    }
}
const sport = prompt("Який Ваш улюблений вид спорту?");
if (!sport || !isNaN(sport) || hasSpecialCharacters.test(sport)) {
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту");
} else {
    switch (sport) {
        case "Теніс":
            alert(`Ваш улюблений Вид спорту: ${sport}. Чемпіоном цього виду спорту вважається - Стефан Едберг`);
            break
        case "Футбол":
            alert(`Ваш улюблений Вид спорту: ${sport}. Чемпіоном цього виду спорту вважається - Ліонель Мессі`);
            break;
        case "Баскетбол":
            alert(`Ваш улюблений Вид спорту: ${sport}. Чемпіоном цього виду спорту вважається - Хосе Кальдерон`);
            break
        default:
            alert(`Ваш улюблений вид спорту - ${sport}`);
            break;
    }
}