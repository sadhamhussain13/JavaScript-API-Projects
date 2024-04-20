// code for random quote generator

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "http://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        // console.log(item.content);
        // console.log(item.author);
        quote.innerText=item.content;
        author.innerText='- '+item.author; 
    });
};

window.addEventListener("load",getQuote);  //when the page loads, call the function to get a random quote
btn.addEventListener('click',getQuote);   //and every time the user clicks on the button , get a new quote