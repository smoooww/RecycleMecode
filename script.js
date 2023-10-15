var game = document.querySelector('.game');
var basket = document.querySelector('.basket');
var items = document.querySelector('.items');
var basketLeft = parseInt(window.getComputedStyle(basket).getPropertyValue('left'));
var basketBottom = parseInt(window.getComputedStyle(basket).getPropertyValue('bottom'));
var itemsWrong = 0;
var itemsCollected = 0;
var itemsMissed = 0;

var caught = document.querySelector('.caught');
var missed = document.querySelector('.missed');
var wrong = document.querySelector('.wrong');


function moveBasketLeft(){
    if (basketLeft > 0){
    basketLeft -= 15;
    basket.style.left = basketLeft + 'px';
    }
}
function moveBasketRight(){
    if (basketLeft < 850) {
    basketLeft += 15;
    basket.style.left = basketLeft + 'px';
    }
}
function control(e){
    if (e.key == 'ArrowLeft') {
        moveBasketLeft();
    }
    if (e.key == 'ArrowRight') {
        moveBasketRight();
    }
}

function generateItems(){
    var itemBottom = 500;
    var itemLeft = Math.floor(Math.random() * 700);

    var itemOne = document.createElement('div');
    itemOne.setAttribute('class', 'item itemOne');

    var itemTwo = document.createElement('div');
    itemTwo.setAttribute('class', 'item itemTwo');

    var itemThree = document.createElement('div');
    itemThree.setAttribute('class', 'item itemThree');

    var itemFour = document.createElement('div');
    itemFour.setAttribute('class', 'itemSoda itemFour');

    var itemFive = document.createElement('div');
    itemFive.setAttribute('class', 'item itemFive');

    var itemSix = document.createElement('div');
    itemSix.setAttribute('class', 'item itemSix');

    var itemSeven = document.createElement('div');
    itemSeven.setAttribute('class', 'item itemSeven');

    var itemEight = document.createElement('div');
    itemEight.setAttribute('class', 'itemKetchup itemEight');


    var itemNine = document.createElement('div');
    itemNine.setAttribute('class', 'itemToy itemNine');

    var itemTen = document.createElement('div');
    itemTen.setAttribute('class', 'item itemTen');

    var itemEleven = document.createElement('div');
    itemEleven.setAttribute('class', 'item itemEleven');

    var itemTwelve = document.createElement('div');
    itemTwelve.setAttribute('class', 'item itemTwelve');

    var itemThirteen = document.createElement('div');
    itemThirteen.setAttribute('class', 'item itemThirteen');

    var itemFourteen = document.createElement('div');
    itemFourteen.setAttribute('class', 'item itemFourteen');

    var itemFifteen = document.createElement('div');
    itemFifteen.setAttribute('class', 'itemFish itemFifteen');

    var itemSixteen = document.createElement('div');
    itemSixteen.setAttribute('class', 'item itemSixteen');

    var itemSeventeen = document.createElement('div');
    itemSeventeen.setAttribute('class', 'item itemSeventeen');

    var itemEighteen = document.createElement('div');
    itemEighteen.setAttribute('class', 'item itemEighteen');

    var itemNineteen = document.createElement('div');
    itemNineteen.setAttribute('class', 'itemToothpaste itemNineteen');

    const itemBox = [itemOne, itemTwo, itemThree,
                    itemFour, itemFive, itemSix,
                    itemSeven, itemEight, itemNine,
                    itemTen, itemEleven, itemTwelve,
                    itemThirteen, itemFourteen, itemFifteen,
                    itemSixteen, itemSeventeen, itemEighteen,
                    itemNineteen];
    let randomItem = itemBox[Math.floor(Math.random() * 19)]
    items.appendChild(randomItem);
    function fallDownItem() {
        if (itemBottom < basketBottom + 80 && itemBottom > basketBottom && itemLeft > basketLeft - 50 && itemLeft < basketLeft + 103) {
            items.removeChild(randomItem);
            clearInterval(fallInterval);
        if (randomItem == itemOne || randomItem == itemTwo || randomItem == itemThree || randomItem == itemFour || randomItem == itemFive || randomItem == itemSix || randomItem == itemSeven || randomItem == itemEight) {
            itemsCollected += 1;
        }
        else {
            itemsWrong += 1;
        }
        }

        if (itemBottom < basketBottom ) {
            items.removeChild(randomItem);
            clearInterval(fallInterval);
            if (randomItem == itemOne || randomItem == itemTwo || randomItem == itemThree || randomItem == itemFour || randomItem == itemFive || randomItem == itemSix || randomItem == itemSeven || randomItem == itemEight){
                itemsWrong += 1;
            }
        }

        caught.innerHTML = 'ITEMS CAUGHT CORRECTLY ' + itemsCollected;
        wrong.innerHTML = 'WRONG ITEMS ' + itemsWrong;
        if (itemsWrong == 10) {
            alert('Game over ');
            clearInterval(fallInterval);
            clearTimeout(itemTimeout);
            location.reload();
        }
        itemBottom -= 5;
        randomItem.style.bottom = itemBottom + 'px';
        randomItem.style.left = itemLeft + 'px';
    }


    var fallInterval = setInterval(fallDownItem, 20);
    var itemTimeout = setTimeout(generateItems, 2000);

}
generateItems();
document.addEventListener('keydown', control);

