// Declaration
const memoryApp = document.querySelector("#memoryApp");
const remainingLives = document.querySelector(".lives");
const newGameBtn = document.querySelector("button");
const memoryAppBefore = window.getComputedStyle(memoryApp,"::before");
// const memoryAppBefore = window.getComputedStyle(memoryApp, "::before");

let lives = 7,
    flippedCards;
remainingLives.textContent = lives;
remainingLives.style.color = 'green';

console.log(memoryAppBefore);

const data = [
    {imgSrc: "./images/disturbed.jpg", name: "disturbed"},
    {imgSrc: "./images/gunsNroses.jpg", name: "gunsNroses"},
    {imgSrc: "./images/khalid.jpg", name: "khalid"},
    {imgSrc: "./images/linkinPark.jpg", name: "linkinPark"},
    {imgSrc: "./images/purpleDiscoMachine.jpg", name: "purpleDiscoMachine"},
    {imgSrc: "./images/rhcp.jpg", name: "rhcp"},
    {imgSrc: "./images/taylorSwift.jpg", name: "taylorSwift"},
    {imgSrc: "./images/theWeekend.jpg", name: "theWeekend"},
    {imgSrc: "./images/disturbed.jpg", name: "disturbed"},
    {imgSrc: "./images/gunsNroses.jpg", name: "gunsNroses"},
    {imgSrc: "./images/khalid.jpg", name: "khalid"},
    {imgSrc: "./images/linkinPark.jpg", name: "linkinPark"},
    {imgSrc: "./images/purpleDiscoMachine.jpg", name: "purpleDiscoMachine"},
    {imgSrc: "./images/rhcp.jpg", name: "rhcp"},
    {imgSrc: "./images/taylorSwift.jpg", name: "taylorSwift"},
    {imgSrc: "./images/theWeekend.jpg", name: "theWeekend"},
]

// Random function

const random = () => {
    let randomData = data;
    randomData.sort(() => Math.random()-0.5);
    return randomData;
}

// Random array
let randomData = random();

// Adding the images and divs
randomData.forEach(item => {
    const card = document.createElement("div");
    const cover = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("alt","image");
    card.classList.add("card");
    cover.classList.add("cover");
    img.classList.add("image");
    img.setAttribute("src",`${item.imgSrc}`);
    card.setAttribute("name",`${item.name}`);
    memoryApp.appendChild(card);
    card.appendChild(cover);
    card.append(img);
    card.addEventListener("click",e=>{
        card.classList.toggle("toggleCard");
        card.classList.add("flip");
        let toggled = document.querySelectorAll(".toggleCard");

        flippedCards = document.querySelectorAll(".flip");

        if(flippedCards.length===2){
             if(flippedCards[0].getAttribute("name")===flippedCards[1].getAttribute("name")){
                flippedCards.forEach(item =>{
                    item.classList.remove("flip")
                })
             }
             else{
                flippedCards.forEach(item => {
                    item.classList.remove("flip");
                    setTimeout(()=>{item.classList.remove("toggleCard")},1000);
                })
                lives--;
             }
            if(lives===5)
                remainingLives.style.color = 'yellow';
            else if(lives===2)
                remainingLives.style.color = 'red';
            remainingLives.textContent = lives;
            if(lives === 0){
                setTimeout(() => alert('You lose better luck next time'),200);
                const openCards = document.querySelectorAll(".card");
                setTimeout(()=>{
                    openCards.forEach(item => {
                        item.classList.add("toggleCard");
                    })
                },1000)
            }
        }
        if(toggled.length === 16){
            setTimeout(() => alert('Congrats, you have won !!!',100));
        }
    })
})

newGameBtn.addEventListener("click",e => newGame());

// New game
const newGame = () => {
    let toggled = document.querySelectorAll(".toggleCard");
    toggled.forEach(item =>{
        item.classList.remove("toggleCard");
    })
    setTimeout(()=>{
    randomData = random();
    lives = 7;
    remainingLives.textContent = lives;
    remainingLives.style.color = 'green';
    const images = document.querySelectorAll(".image");
    images.forEach((item,index)=>{
        item.setAttribute("src",`${randomData[index].imgSrc}`);
        item.parentElement.setAttribute("name",`${randomData[index].name}`);
    })   
    },1000);
    
}