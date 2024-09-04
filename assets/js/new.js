function start(){
    let now = new Date();
    let sec = now.getSeconds() / 60;
    let min = now.getMinutes();
    let hr = now.getHours();

    let hand = document.querySelector('.hand')
    let second = document.querySelector('.sec');
    let minutes = document.querySelector('.min');
    let hour = document.querySelector('.hr');

    hand.append('second');
    hand.append('minutes');
    hand.append('hour');

    second.style.transform = `rotate(${sec * 360}deg)`;


    return hand;

}
console.log(start());
setInterval(star,1000);