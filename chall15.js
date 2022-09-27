let myArray1 = [1,2,3,4,5];
let myArray2 = [6,7,8,9,10];

let allArray = myArray1.concat(myArray2)

console.log(allArray);

i = 0; 
while(i < allArray.length){
    console.log(allArray[i]);
    i++
}

i = 0; 
while(i < myArray1.length){
    console.log(myArray1[i]);
    i++
}

i = 0; 
while(i < myArray2.length){
    console.log(myArray2[i]);
    i++
}
