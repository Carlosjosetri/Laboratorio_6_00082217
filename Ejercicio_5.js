function tipoes(array,type)
{ var aux=[];
	for (var i=0;i<array.length;i++){
     if(typeof array[i]==type){
         aux.push(array[i]);
     }
  
    }
    console.log(aux);

}
