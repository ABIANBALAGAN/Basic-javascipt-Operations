
console.log('Lets begin basic javascript operations!!!');
console.log('Create an array and print elements');
let food=['Briyani','Prota','Dosa'];
console.log(food);
console.log('add element in beginning of array');
food.unshift('Idly')
console.log(food);
console.log('add element at end of array');
food.push('Soup');
console.log(food);
console.log('check if there is an element in array');
console.log(Array.isArray(food));
console.log('check if particular element in array eg Idly and return index');
let index=food.indexOf('Idly')
if(index==-1){
    console.log('False');
}
else{
    console.log(index);
}
console.log('replace Array element');
const indexx=1;
const newValue='Panner';
food[indexx]=newValue;
console.log(food);
console.log('Creating a number array');
let num=[100,200,300,400,500];
console.log(num);
console.log('find largest element in an array');
let nums=[0];
for(let i=0;i<num.length;i++){
   if(num[i]>nums)
    nums=num[i]; 
}
console.log(nums);
console.log('find minimum element in an array');
let min=Math.min(...num);
console.log(min);
console.log('create an array of student details');
let student=[{name:'Abarna',marks:100},
     { name:'Abi',marks:90},{name:'Aparna',marks:80},{name:'Hema',marks:70},{name:'Kaviniavu',marks:60}];
console.log(student);
console.log('display marks greater than 50');
let greater=[];
for(let j=0;j<student.length;j++){
    if(student[j].marks>70){
        greater.push(student[j]);
    }
}
console.log(greater);