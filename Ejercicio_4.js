function sumas(array)
{ var aux=[];
    var sum=0;
    for (var i=0;i<array.length;i++){
        aux.unshift(array[i]);
}
console.log(aux);
console.log(array);
    if(array.length%2==0){
        for (var i=0;i<(array.length/2);i++){
            sum=array[i]+aux[i];
         console.log(sum);
        
    }

    }
    if(array.length%2!=0){
        for (var i=0;i<((array.length-1)/2);i++){

            sum=array[i]+aux[i];
         console.log(sum);
        
    }
    console.log((array[((array.length-1)/2)])*2)

    }

}