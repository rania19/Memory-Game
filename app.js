const resultDisplay = document.getElementById('result');
const gridDisplay = document.querySelector('#grid');
let cardsChosen =[];
let cardsChosenIds =[];

let score = 0;


const cardArray = [

    {
        name: 'cake',
        img: 'images/cake.png'

    },
    {
        name: 'candy',
        img: 'images/candy.png'

    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'

    },
    {
        name: 'coffee',
        img: 'images/coffee.png'

    },
    {
        name: 'pop-corn',
        img: 'images/pop-corn.png'

    },
    {
        name: 'pasta',
        img: 'images/pasta.png'

    },

    {
        name: 'cake',
        img: 'images/cake.png'

    },
    {
        name: 'candy',
        img: 'images/candy.png'

    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'

    },
    {
        name: 'coffee',
        img: 'images/coffee.png'

    },
    {
        name: 'pop-corn',
        img: 'images/pop-corn.png'

    },
    {
        name: 'pasta',
        img: 'images/pasta.png'

    }

];

cardArray.sort(()=> 0.5 - Math.random());
//console.log(cardArray);
createBoard();


function createBoard(){

    for(let i=0;i<12;i++){
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);
        gridDisplay.appendChild(card);
        
       
    }
}

function flipCard(){
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    if(cardsChosen.length == 2){
        setTimeout(checkMatch,500);
    }

}

function checkMatch(){
    const cards = document.querySelectorAll('img');
    const optionOne = cardsChosenIds[0];
    const optionTwo = cardsChosenIds[1];
    console.log('opt1'+ optionOne);
    console.log('opt2'+ optionTwo);

    if(optionOne ==  optionTwo){
        alert('you chose the same image');
        cards[optionOne].setAttribute('src','images/blank.png');
        cards[optionTwo].setAttribute('src','images/blank.png');

    }

    else if (cardsChosen[0] === cardsChosen[1]){
        alert('Match *_* ');
        cards[optionOne].setAttribute('src','images/white.png');
        cards[optionTwo].setAttribute('src','images/white.png')
        cards[optionOne].removeEventListener('click',flipCard);
        cards[optionTwo].removeEventListener('click',flipCard);
        score++;
        resultDisplay.innerHTML = score;
       

    }
    else {
        alert('Sorry, try again');
        cards[optionOne].setAttribute('src','images/blank.png');
        cards[optionTwo].setAttribute('src','images/blank.png');

    }
    if(score == 6){
        resultDisplay.innerHTML = 'congratulations, you did it';
    }
    

    cardsChosen=[];
    cardsChosenIds=[];
    

}
