let quotes = [
    {
        id: 1,
        quote: "Remember one thing Through every dark night, there’s a bright day after that. So no matter how hard it get, stick your chest out. Keep your head up, and handle it.",
        author: "-Tupac"
    },
    {
        id: 2,
        quote: "Forgive but don’t forget girl, keep ya head up. And when he tells you you ain’t nothing don’t believe him, and if he can’t learn to love you, you should leave him.",
        author: "-Tupac"
    },
    {
        id: 3,
        quote: "If you admire someone, you should go ahead and tell them. People never get the flowers while they can still smell them.",
        author: "-Kanye West"
    },
    {
        id: 4,
        quote: "Everything will eventually come to an end. So try to savor the moments, cuz time flies, don’t it? The beauty of life is to make it last for the better. Cuz nothing lasts forever.",
        author: "-Nas"
    },
    {
        id: 5,
        quote: "If people take anything from my music, it should be motivation to know that anything is possible as long as you keep working at it and don’t back down.",
        author: "-Eminem"
    },
    {
        id: 6,
        quote: "Life without knowledge is death in disguise.",
        author: "-Talib Kweli"
    },
    {
        id: 7,
        quote: "When the devil wants to dance with you, you better say never, because the dance with the devil might last you forever.",
        author: "-Immortal Technique"
    },
    {
        id: 8,
        quote: "Fear not of men because men must die. Mind over matter and soul before flesh",
        author: "-Mos Def"
    },
    {
        id: 9,
        quote: "I think music should be free. I think all communication should be free. I think people should respect artists, and there should be a certain respect for artists who give their music away for free.",
        author: "-KRS-One"
    },
    {
        id: 10,
        quote: "I’ve never had a dream in my life, because a dream is what you wanna do, but still haven’t pursued.I knew what I wanted, and did it till it was done. So I’ve been the dream I wanted to be since Day One.",
        author: "-Aesop Rock"
    },
]

let quote = document.getElementById("text");
let author = document.getElementById("author");
let newQuote = document.getElementById("new-quote");

let currentQuote = 0;

window.addEventListener('DOMContentLoaded', function(){
    showQuote(currentQuote);
})

function showQuote(number){
    let item = quotes[number];
    quote.textContent = item.quote;
    author.textContent = item.author;
}

newQuote.addEventListener('click', function(){
    currentQuote = Math.floor(Math.random() * quotes.length);
    showQuote(currentQuote);
    console.log(currentQuote);
})