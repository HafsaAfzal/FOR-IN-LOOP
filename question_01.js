// In this exercise, we will experiment with looping over objects and internal arrays.
// a. Create a simple object with three items in it.
// b. Using the for in loop, get the properties' names and values from the object
// and output them into the console.
// c. Create an array containing the same three items. Using either the for loop or
// d. the for in loop, output the values from the array into the console.
const obj ={
    name :"Hafsa",
    age:20,
    favCol:"blue"
}
for(prop in obj){
    console.log(prop);
}
const arr=["Hafsa",20,"blue"];
for (items in arr){
    //  console.log(items)    this gives index 0,1,2,
    console.log(arr[items]);
}