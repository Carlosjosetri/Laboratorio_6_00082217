function tipos(array)
{ var strings=0;
    var numbers=0;
    var booleans=0;
    var objects=0;
	for (var i=0;i<array.length;i++){
     if(typeof array[i]=="number"){
         numbers++;
     }
     if(typeof array[i]=="boolean"){
        booleans++;
    }
    if(typeof array[i]=="string"){
        strings++;
    }
    
    if(typeof array[i]=="object"){
        strings++;
    }
    }
    console.log("Numbers "+ numbers);
    console.log("Strings "+ strings);
    console.log("Booleans "+ booleans);
    console.log("Objects "+ objects);
}