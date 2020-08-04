const stringSearch = (longString, shortString) => {
    var countMatch = 0;
    for(var i = 0; i < longString.length; i++) {
        for(var j = 0; j < shortString.length; j++){
            if(shortString[j] !== longString[i+j]){
                break;
            }
            if(j === shortString.length - 1){
                countMatch ++;
            }
        }
    }
    return countMatch;
};

stringSearch('lolie lored','lol');
