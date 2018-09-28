function suma(array)
{ var sum=0;
    var cont=0;
	for (var i=0;i<array.length;i++){
        sum=sum+array[i];
        cont++;

        
		
	}
    console.log("suma "+ sum);
    console.log("promedio "+ (sum/cont));
}