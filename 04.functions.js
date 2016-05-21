/**
 *  Functions
 */


/**
 *  declaration vs expression
 */
function declaration(){
    console.log('function declaration');
}
declaration();

//var exprression = function (){
//    console.log('anonymus function expression');
//}
//exprression();
//
//var exprression = function funcName (){
//    console.log('named function expression');
//}
//exprression();
//
//setTimeout(function funcInTimeout() {
//        err;
//    }, 100);  //functions named are better for debugging


//IIFE - Immediate Invoked Function Expression
(function() {
    console.log("IIFE");
    })();

/**
 *  methods
 */
var obj = {
    method:function(){
        console.log('method');
    }
}
obj.method();

/**
 *  return statement
 */
//function foo (){
//    return "first";
//}
//console.log ( foo() );

/**
 *  constructor
 */
//function User(name) {
//    var temp = "";
//    
//    this.name = name;
//    this.getName = function(){
//        return this.name;
//    }
//}
//var user1 = new User("Ion");
//var user2 = new User("John");
//
//console.log(user1);
//console.log(user2);



/**
 *  fat arrows
 */
var arrow = () =>{
    console.log('arrow function');
}
arrow();

var arrow = () => 1;
//var arrow2 = () => {return 1};
console.log(arrow());
/**
 *  first-class citizen
 */

 
 