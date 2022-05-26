module.exports = {
    wordFrequency: function(doc, word){
        let regex = new RegExp(`${word}`, 'gmui');
        const frequency = [];
        frequency.push(doc.match(regex).length)
        return frequency;
    },

    wordSentences: function(doc, word){
        let array = doc.split('\n' || '.' || ':' || ';' );
        let stringOfSentences = [];
        array.forEach((element, index) => {
            array[index] = element.trim();
        })
        array = array.filter(x => x.length > 0);

        array.forEach(element => {
            let count = element.toUpperCase().indexOf(word.toUpperCase());
            if(count > 0){
                stringOfSentences.push(element);
                count = 0;
            }
        })
        return stringOfSentences;
    },

    topWords: function(doc, count, minWordLength){
        let arrayOfString = this.stringToWordsArray(doc.toUpperCase());
        
        var resultCount = null;
        var countString = [];
        let arrayResult = [];
        let repetitionCount = 0;
        arrayOfString.forEach(element => { 
            if(element.length >= minWordLength){
                resultCount = this.wordFrequency(doc, element)
                
                if(countString.findIndex(c => c.word == element) == -1){
                    countString.push({"word": element, "count": resultCount[0]});  
                }
                        
                resultCount = 0;
            }
        });

        countString = this.sortInDescendingOrder(countString)

        countString.forEach(element =>{
            if(arrayResult.length < count){
                arrayResult.push(element)
            }
        })


        return arrayResult;
    },

    stringToWordsArray: function(text) {
        return text.match(/[a-zÀ-ú]+/gmui);
    },

    sortInDescendingOrder: function(array){
        for(var i = 0; i < array.length; i++){ 
          for(var j = 0; j < ( array.length - i -1 ); j++){
            if(array[j].count < array[j+1].count){
              var temp = array[j];
              array[j] = array[j + 1];
              array[j+1] = temp;
            }
          }
        }

        return array;
       }
}

