const googleTransliterate = require('google-transliterate');

module.exports = function (input) {
    return new Promise((resolve, reject) => {
        if(input!="") {
            googleTransliterate.transliterate(input, 'en', 'ml', function(err, transliteration){
                if(err) {
                    console.log(err);
                    resolve('');
                } else {
                    result = transliteration.reduce((acc, curr) => { return acc + curr.hws[0]}, "");
                    resolve(result);
                }
            });
        } else {
            resolve('');
        }
    });
}