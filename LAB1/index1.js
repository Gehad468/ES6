let arr_num=[4,5,52,-2];
let asc=[...arr_num];
let desc=[...arr_num];
asc.sort((x,y)=>(x - y));
console.log(asc);
desc.sort((x,y)=>(y- x));
console.log(desc);
//filter numbers larger that 50 using array filter method and arrow function
let larg= [...arr_num];
let num= larg.filter((number)=>number>50)
console.log(num);
//display max,min using math method and spread operator
let maxi=[0,3,4,2,-4];
console.log(Math.max(...maxi));
let mini=[0,3,4,2,-4];
console.log(Math.min(...mini));