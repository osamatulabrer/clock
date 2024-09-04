
let myClockElement = document.querySelector('.clock');
myClockElement.append(createDiv());
myClockElement.append(numberArea());
myClockElement.append(handler());




function createDiv(){
    let createParentDiv = document.createElement('div');
    createParentDiv.classList.add('stripe-area')
    for(let i = 0; i < 60; i++){
        let createSpanTag = document.createElement('span');

        createSpanTag.style.transform = `rotate(${i * 6}deg)`;

        if(i % 5 == 0){
            createSpanTag.classList.add('stripe','circle');
            
        } else{
            createSpanTag.classList.add('stripe');
        }
        createParentDiv.append(createSpanTag);
    };

    return createParentDiv;
}



// function number(){
//     let createParentDiv = document.createElement('div');
//     createParentDiv.classList.add('number');

//     for(let i = 0; i < 12; i++){
//         let parentDiv = document.createElement('div');
//         parentDiv.classList.add('number-area');
//         createParentDiv.append(parentDiv);
//     }
//     for(let i = 0; i < 12; i++){
//         let createSpanTag = document.createElement('span');
//     }


//     return createParentDiv;
// };
// console.log(number());


function numberArea(){
    let numberAreaDiv = document.createElement('div');
    numberAreaDiv.classList.add('number-area')

    for(let i = 1; i <= 12; i++){
        let number = document.createElement('div');
        number.classList.add('number');
        number.style.transform = `rotate(${i * 30}deg)`;

        let span = document.createElement('span');
        span.textContent = i;
        span.style.transform = `rotate(-${i * 30}deg)`;

        number.append(span);
        numberAreaDiv.append(number);
    };
    return numberAreaDiv;
};


function handler(){
    let handlerArea = document.createElement('div');
    handlerArea.classList.add('handler');

    let hrElement = document.createElement('div');
    hrElement.classList.add('hr');
    let minElement = document.createElement('div');
    minElement.classList.add('min');
    let secElement = document.createElement('div');
    secElement.classList.add('sec');

    handlerArea.append(hrElement);
    handlerArea.append(minElement);
    handlerArea.append(secElement);
    return handlerArea;

}
console.log(handler());


function handlerRotate(){
    let d = new Date();
    let sec = d.getSeconds() / 60 ;
    let min = (sec + d.getMinutes()) / 60;
    let hr = (min + d.getHours()) / 12;


    let secElem = document.querySelector('.sec')
    let minElem = document.querySelector('.min')
    let hrElem = document.querySelector('.hr')

    secElem.style.transform = `rotate(${sec * 360}deg)`;
    minElem.style.transform = `rotate(${min * 360}deg)`;
    hrElem.style.transform = `rotate(${hr * 360}deg)`;
}
handlerRotate();
setInterval(handlerRotate,1000);
