/**
 *  Primitives
 */

// string
var str   = 'Andrei Pfeiffer';
// number
var nr    = 12;
// boolean
var bool  = true;
// null
var nil   = null;
// undefined
var undef = undefined;
// Symbol (ES6)
var symb  = Symbol('some description');
var undefv = "";

//console.log(typeof nr);
//console.log(typeof str);
//console.log(typeof bool);
//console.log(typeof nil);
//console.log(typeof undef);
//console.log(typeof symb);

//variables
// -they are case sensitives


//typeof operator
// -operator, AND NOT a function
 
/**
 *  Loosely typed, Dynamic language
 */
//var str = 1;
//implicit type coercion ex: '1' = 1;

/**
 *  type casting
 */
//var age= "34";
//age = parseInt(age);
//var username = 1122;
//username = String(username);
//console.log(0 + username);

/**
 *  falsey values
 */
//var exists = 1;
//console.log(!exists);

//if (""){
//    //code
//    console.log("ok");
//}else{
//    console.log("nay");
//}


console.log( !! "" );
console.log( !!0) ;
console.log( !!false );
console.log( !!undefined );
console.log( !!null );
console.log( !!NaN);

