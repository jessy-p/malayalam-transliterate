const transliterate = require('./transliterate.js');


module.exports = class Text {

    constructor(input, delimiter) {
        this.input = input;
        this.delimiter = delimiter;
    }

    transliterate() {
        return transliterate(this.input).then((result) => {return result + this.delimiter; })
    }


}