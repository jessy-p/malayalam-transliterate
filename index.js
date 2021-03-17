const fs = require('fs');
const { delimiter } = require('path');
const chunk = require('chunk-text');
const Text = require('./text.js');

// const re = /\s?(?:\w+\s?){1,15}/g;

//read the file & put into a input string
let input = fs.readFileSync('input.txt').toString();

let textArr = [];
//split by \n and create array of Text objects
let sentenceArr = input.toString().split('\n');
sentenceArr.map((sentence) => {
    //split by 100 characters and create a Text object
    let wordList = chunk(sentence, 100);
    if(wordList.length > 1) {
        let lastElem = wordList.length -1;
        wordList.map((fragment, index) => {
            delim = (index == lastElem) ? '\n' : ' '
            textArr.push(new Text(fragment, delim))
        });
    } else {
        textArr.push(new Text(sentence, '\n'));
    }
    
})

// console.log(textArr);

Promise.all(textArr.map((elem) => elem.transliterate())).then((result) => {
    fs.writeFile('output.txt', result.join(''), function (err) {
        if (err) throw err;
        console.log('saved result into output.txt');
    });
})


