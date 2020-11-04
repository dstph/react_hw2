// 1. Что будет выведено в консоль?



// 1.  {c: "here", s: "no"}


// 2. Написать функцию которая будет возвращать формат файла
// если формат отсутсвует то пустую строку.

// ‘https://www.googletagmanager.com/gtag/reddit/image-basket.png’ -> ‘png’

// ‘/some/thing/toParse.json’ -> ‘json’

// ‘not.so.easy/as/youd/expect.’ -> ‘’

// 2. function formatOfFile(file){
// 	let arr = file.split('.');
// 	return arr[arr.length-1];
// }

// 3. Написать функцию которая будет возвращать массив уникальных значений

// [1, 1, 2, 3, 4, 4] => [1, 2, 3, 4]
// [4, 4, 2, 3, 1, 1] => [1, 2, 3, 4]
// [3, 4, 5, 4, 5] => [3, 4, 5]


// 3. function uniquvalues(array){
  
//   let newArray = [...new Set(array)];
//   console.log(newArray);
//   return newArray; 
// }

  

// 4. Дан массив объектов, необходимо написать функцию которая объединит все объекты в один

// const array = [{ a: 1 }, { b: 2 }, { c: 3 }];



// 4. function ObjectAssign(array){
// 	let bigObj = {};
// 	array.map(n => Object.assign(bigObj,n));
// 	return bigObj;
// }


// 5. Удалить из массива все не уникальные элементы

// [1, 2, 3, 1, 3] => [1, 3, 1, 3]
// 5. uniqu = [...new Set(array)];