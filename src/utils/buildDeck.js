

/***funcion que implementa un arreglo de iconos de fontawesome aleatoriamente */
import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from "./fontAwesomeClasses";
const CARDS_NUMBERS = 20;

export default () => {
    const fontAwesomeClasses = FontAwesomeClasses();
    let cards = [];
    while (cards.length < CARDS_NUMBERS) {
        const index = Math.floor(Math.random() * fontAwesomeClasses.length);
        const cardObject = {
            icon: fontAwesomeClasses.splice(index, 1)[0],
            checked: false
        };
        cards.push(cardObject);
        cards.push({ ...cardObject });
    }

    return shuffle(cards);
};