document.addEventListener('DOMContentLoaded', () => {

    //card or image options 
    const cardArray = [
        {
            name: 'black',
            img: 'images/black.jpg'
        },
        {
            name: 'black',
            img: 'images/black.jpg'
        },
        {
            name: 'blue',
            img: 'images/blue.jpg'
        },
        {
            name: 'blue',
            img: 'images/blue.jpg'
        },
        {
            name: 'cyan',
            img: 'images/cyan.jpg'
        },
        {
            name: 'cyan',
            img: 'images/cyan.jpg'
        },
        {
            name: 'green',
            img: 'images/green.jpg'
        },
        {
            name: 'green',
            img: 'images/green.jpg'
        },
        {
            name: 'grey',
            img: 'images/grey.jpg'
        },
        {
            name: 'grey',
            img: 'images/grey.jpg'
        },
        {
            name: 'red',
            img: 'images/red.jpg'
        },
        {
            name: 'red',
            img: 'images/red.jpg'
        },
        {
            name: 'white',
            img: 'images/white.jpg'
        },
        {
            name: 'white',
            img: 'images/white.jpg'
        },
        {
            name: 'yellow',
            img: 'images/yellow.jpg'
        },
        {
            name: 'yellow',
            img: 'images/yellow.jpg'
        }
    ];


    cardArray.sort(() => 0.5 - Math.random());


    const grid = document.querySelector('.grid');
    const displayResult = document.querySelector('#result');
    var cardsChosen = [];
    var cardChoseen_id = [];
    var cards_won = [];


    //creating the board
    function creatBoard() {
        for (let i=0; i< cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/clickMe.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    };

    //check if there is a match
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardChoseen_id[0];
        const optionTwoId = cardChoseen_id[1];
        if (cardsChosen[0] === cardsChosen[1]){
            cards[optionOneId].setAttribute('src', 'images/bg.png');
            cards[optionTwoId].setAttribute('src', 'images/bg.png');
            cards_won.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/clickMe.jpg');
            cards[optionTwoId].setAttribute('src', 'images/clickMe.jpg');
        }
        cardChoseen_id = [];
        cardsChosen = [];
        displayResult.textContent = cards_won.length;
        if (cards_won.length === cardArray.length/2){
            displayResult.textContent = 'Congratulation! you found them all!'
        }
    };

    //flip the card
    function flipCard() {
        var card_id = this.getAttribute('data-id');
        cardsChosen.push(cardArray[card_id].name);
        cardChoseen_id.push(card_id);
        this.setAttribute('src', cardArray[card_id].img);
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

    creatBoard()







})