/**
 *  Objects
 */


// object literal
var age = 26;
var me = {
	"first Name": 'Robert',
	lastName : 'Axius',
	age,
	skills: [
		{ name: 'html', level: 8 },
		{ name: 'css',  level: 7 },
		{ name: 'js',   level: 6 },
	],
	getAge: function() {
		return this.age;
	}
};


/**
 *  usage
 */
//console.log(me);
//console.log(me.skills[0].name);

/**
 *  property access
 */


/**
 *  properties with spaces
 */
var name = "Name";
console.log(me["first " + name]);

/**
 *  properties as expressions
 */


/**
 *  enhanced literals (ES6)
 */
// see age definition witout age: age;
/**
 *  delete property
 */
//delete me.skills;
//console.log(me);

/**
 *  property descriptors
 */

//Object.defineProperty(me,'age', {
//	configurable: false
//	});
//
//console.log(Object.getOwnPropertyDescriptor(me,'age'));
//console.log(me.age);
//
//Object.defineProperty(me,'age', {
//	writable: false
//	});
me.age = 100;

/**
 *  freezing
 */
//Object.freeze(me);
//delete me.skills;
//console.log( Object.isFrozen(me));
//me.skills = [1,2,3]; //won't work
//me.skills.push('tank');
//console.log(me);

/**
 *  iterations
 */
//console.log(Object.keys(me));
//Object.keys(me).foreach(function(prop){
//	console.log(me[prop]);
//});



/**
 *  JSON - JavaScript Object Notation
 */
/*var user = {name: 'Rob', age:30};
console.log(JSON.stringify(user)); 
var json = '{"name":"Rob","age":30}'; 
console.log(JSON.parse(json)); 
/**
 *  null
 */
//var string = "";
//var nr = 0;
//var bool = false;
//var obj = null;
//
//console.log(obj);

//me = null; // now object is availabe for garbage collector
console.log(me.toString());