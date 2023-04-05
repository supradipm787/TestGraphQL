arr1 = [1,2,3,4]
arr2 = [5,6,7]

arr3 = [...arr1, ...arr2]

//console.log('arr3',arr3);
i =0 ;
console.log (arr3[4]);

userOne = {
    name : 'Supra',
    state : 'California',
    country : 'USA'
}
//assign reference
userTwo = userOne;
userTwo.name = 'Supradip';

userThree = {...userTwo, name:'Supra', gender:'male'}

console.log ('userone', userOne);
//console.log ('usertwo', userTwo);
//console.log ('userthree',userThree );

//assign values of objects
userFour = {};
Object.assign (userFour, userOne);
console.log ('userFour',userFour );




