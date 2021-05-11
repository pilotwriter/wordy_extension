let word = document.getElementById('word');
let meaning = document.getElementById('meaning');
let pron  = document.getElementById('pronunciation');
const dicURL = 'https://random-words-api.vercel.app/word';
async function getWord(url){
    const response = await fetch(url);
    let data = await response.json();
    let obj = data[0];
    word.innerHTML=obj.word;
    meaning.innerHTML = obj.definition;
    pron.innerHTML = obj.pronunciation;
    }

    getWord(dicURL);