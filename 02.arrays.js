/**
 *  Arrays
 */


// array literal
var arr = [1, 2,3];
//var arr2 = new Array(4);
//
//console.log(arr);
//console.log(arr2);
//console.log(arr[0]);
//console.log(arr2[0]);
/**
 *  element access
 */


/**
 *  length
 */
//arr[arr.length] = 3;
//arr.a = 5;
//arr['b']= 5; bad practice

/*
console.log(arr.length);
console.log(arr)*/;

//var emptyArr = [];
//emptyArr[4] = 4;
//console.log(emptyArr);
//console.log(emptyArr.length);

/**
 *  stack
 */
//console.log( arr.push(3) );
//console.log( arr.push(4) );
//console.log( arr.push(5) );
//console.log(arr);

/**
 *  queue
 */
//console.log(arr.shift());
//console.log(arr.shift())
//console.log(arr);


/**
 *  mixed
 */


/**
 *  sub-arrays
 */
//arr = arr.slice(0,2);

//console.log(arr.splice(1,0,'a','b'));
//console.log(arr);

/**
 *  find index
 */
console.log(arr);
//console.log(arr.indexOf(4) > -1);

/**
 *  filter
 */
//var arr2 = arr.filter(function (element,index,array){
//    return element > 1; //console.log(element,index,array);    
//});
//console.log("filtered array", arr2);
//!!! Filter nu modifica continutul unul array

/**
 *  iterations
 */
//for (var i = 0; i <= 5; i+=1) {
//    console.log(arr[i]);
//}
//var newArray = [];
//arr.forEach(function(element,index,array){
//  newArray.push(element+10);
//});
//console.log(newArray);

var mappedArr = arr.map(function(element,index,array){
    return element + 10; 
});
console.log(mappedArr);



/**
 *  other useful methods
 */


/**
 *  typeof
 */
console.log(typeof arr);
console.log( Array.isArray(arr));