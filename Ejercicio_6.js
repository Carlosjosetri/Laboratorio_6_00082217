function encri(array)
{ var numero=[0,1,2,3,4,5,6,7,8,9]
    var clave=["m","u","r","c","i","e","l","a","g","o"];
	for (var i=0;i<array.length;i++){
      if(clave.includes(array[i])){
          array[i]=numero[clave.indexOf(array[i])]
      }

}
    console.log(array);
  
}