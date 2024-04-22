// 1-misol

/*function getInitialOdds(n){
  let xozirgiQiymat = 1
  let result = []
  for(let i = 0; i < n; i++){
    result.push(xozirgiQiymat)
    xozirgiQiymat += 2
  }
   console.log(result);

} getInitialOdds(5)*/

// 2-misol

/*let arr = [4, 5, 7, 8, 6, 9]
let res = []

function getEvenReverse(arr){
  for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0) {
      res.push(arr[i]);
    }
  }
  console.log(res.reverse());
}getEvenReverse(arr)*/

// 3-misol

/*
let arr = [4, 5, 7, 8, 6, 9]
let res = []
for(let i = 0; i < arr.length;i++){

  if(arr[i]== 0){
    res.push(arr[i]);
  }else{
    res.push(arr[arr.length - i], arr[i]);
  }
  if (arr[i] == arr.length) {
    res.push(arr[0]);
  } else {
    
  }
}
console.log(res.join(" "));*/

// 4-misol

/*let arr = [1, 6, 222, 5, 8, 10, 15]
let res = 0
function rangeSum(arr, k, l){
  for(let i = k; i < l; i++){
    res = res + (arr[i]);
  }
console.log(res);
}rangeSum(arr, 2, 5)*/


// 5-misol
/*
let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
let res = [];
function getSingleArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  console.log(res);
}
getSingleArr(arr);*/

// 6-misol eng kotta va eng kichik qiymat topib o'rnini alishtirish

/*let arr = [7, 4, 9, 2, 3, 1, 5]
let min = arr[0]
let max = 0

for(let i = 0; i < arr.length; i++){
  if(max < arr[i]){
    max = arr[i]
  }
  if(min > arr[i]){
    min = arr[i]
  }
}
arr[arr.indexOf(min)]= max
arr[arr.indexOf(max)] = min

console.log(arr);*/


// 7-misol birinchi sonni oxiriga qo'yish 

/*let res = []
let arr = [1, 5, 8, 9, 10]
for(let i = 0; i < arr.length; i++){
}
let result = res.concat((arr.splice(1)))
console.log(result.concat(arr.at()));*/



// Uy-ga vazifa 1-misol (n ta darajasini aniqlovchi function)
/*
let n = 5
let res = []
function getLevel2(n){
  for(let i = 1; i < n + 1; i++){
    let level2 = Math.pow(2, i)
    res.push(level2);
  }
  console.log(res);
}getLevel2(n)*/


// Uyga vazifa 3-misol

/*let arr = [1,2,3,4,5,7]
console.log(arr.reverse());*/

// Uyga vazifa 4-misol

/*let arr = [4, 5, 7, 8, 6, 9]
let res = []

for(let i = 0; i < arr.length; i++){
  if (arr[i] % 2 != 0) {
     res.push(arr[i]);
  }
}
console.log(`${res} massivni ichidagi raqamlarninig soni = `, arr.length);*/
  

// Uyga vazifa 5-misol

/*let arr = [4, 5, 7, 8, 6, 9]
let juftSon = []
let toqSon = []

for(let i = 0; i < arr.length; i++){
  if (arr[i] % 2 == 0) {
    juftSon.push(arr[i]);
  }else if(arr[i] % 2 != 0){
    toqSon.push(arr[i])
  }
}
console.log(`${juftSon},${toqSon.reverse()}`);*/


// Uyga vazifa 8-misol

/*let arr = [1,2,3,4,5,6,7,8]
let result = []
for(let j = 0; j < arr.length; j +=2){
    result.push(arr[j]);
}
for(let i = 1; i < arr.length; i+=2){
    result.push(arr[i]);
}
console.log(result);*/


// 9-misol

/*let arr = [1,2,3,4,5,6,7,8,9]

let resultToq = []
let resultJuft = []
for(let i = 1; i < arr.length; i+=2){
    resultToq.push(arr[i]);
}
for(let j = 0; j < arr.length; j +=2){
    resultJuft.push(arr[j]);
}
let res = (`${resultToq},${resultJuft.reverse()}`);
console.log(res.split(" "));*/


// 10 - misol
/*
let arr = [1,2,3,4,5,6,7,8]
let resFirst = []
let resEnd = []
let res1middle = []
let res2middle = []
for(let i = 0; i < arr.length; i++){
    resFirst = arr.slice(0,2)
    resEnd = arr.slice(6,8)
    res1middle = arr.slice(2,4)
    res2middle = arr.slice(4,6)
}

let result = resFirst.concat(resEnd.reverse(), res1middle, res2middle.reverse())

console.log(result);*/

// 11-misol


/*let arr = [1, 6, 2, 5, 8, 10, 150]
let res = 0
let res2 = 0
function rangeSum(arr, k, l){
  for(let i = 0; i < k; i++){
    res = res + (arr[i]);
   }
  for(let j = l; j < arr.length; j++){
    res2 = res2 +  (arr[j])
}

console.log(res + res2);
}rangeSum(arr, 2, 5)*/

// Utga vazifa 13- misol

// function getOddMin(arr) {
//     var min = arr[0]; 
//     for (var i = 2; i < arr.length; i += 2) { 
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }
// var arr = [3, 8, 2, 7, 5, 4, 9, 6];
// var minElement = getOddMin(arr);
// console.log(minElement);

