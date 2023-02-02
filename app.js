//განვსაზღვრავთ ცვლადებს
const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");



// random quote function
// function randomQuote(){
//     quoteBtn.classList.add('loading');
//     quoteBtn.innerText = 'Loading...';
//     fetch('https://api.quotable.io/random')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.err(err);
//         console.log('Result')
//         quoteText.innerText = result.content;
//         authorName.innerText = "New Quote";
//         quoteBtn.classList.remove("loading");
//     });
// }

// fetch('https://api.quotable.io/random')-ის დამატება
function randomQuote(){
    quoteBtn.classList.add('loading');
    quoteBtn.innerText = 'Loading...';
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        quoteText.innerText = data.content;
        authorName.innerText = data.author;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote";
    })
    .catch(error => {
        console.error(error);
    });
}

soundBtn.addEventListener('click', () => {
    //ხმის დამატება
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    // speak method of speechSynthesis
    speechSynthesis.speak(utterance); 
});

copyBtn.addEventListener('click', () => {
    //კოპირების დამატება
    //ტექსტის და ავტორის დამატება, ჩასაწერად გამოვიყენებთ თემფლეიტს
    navigator.clipboard.writeText(quoteText.innerText + " by " + authorName.innerText);
});

twitterBtn.addEventListener('click', () => {
    //ტვიტერის დამატება
    let tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} by ${authorName.innerText}`;
    //ტვიტერის გახსნა ახალ ფანჯარაში
    window.open(tweetUrl, "_blank"); 
});

quoteBtn.addEventListener('click', randomQuote);