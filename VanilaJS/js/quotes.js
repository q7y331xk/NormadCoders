const quotesArray = [
    {
        quote: "MuYaho~!1",
        author: "Ralo1"
    },
    {
        quote: "Bouya~!1",
        author: "Nico1"
    },
    {
        quote: "Assa~!1",
        author: "Duck1"
    },
    {
        quote: "MuYaho~!2",
        author: "Ralo2"
    },
    {
        quote: "Bouya~!2",
        author: "Nico2"
    },
    {
        quote: "Assa~!2",
        author: "Duck2"
    },
    {
        quote: "MuYaho~!",
        author: "Ralo"
    },
    {
        quote: "Bouya~!",
        author: "Nico"
    },
    {
        quote: "Assa~!",
        author: "Duck"
    },
    {
        quote: "Assa~!3",
        author: "Duck"
    }
]

const quoteSpan = document.querySelector("#quote span:first-child");
const authorSpan = document.querySelector("#quote span:last-child");

const selectedQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

quoteSpan.innerText = selectedQuote.quote;
authorSpan.innerText = selectedQuote.author;