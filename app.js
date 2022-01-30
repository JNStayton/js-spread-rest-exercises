const filterOutOdds = (...args) => {
	return args.filter((num) => num % 2 === 0);
};

const findMin = (...args) => {
	return Math.min(...args);
};

const mergeObjects = (obj1, obj2) => {
	return { ...obj1, ...obj2 };
};

const doubleAndReturnArgs = (arr, ...args) => {
	return [ ...arr, ...args.map((arg) => arg * 2) ];
};

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
	let newItems = [ ...items ];
	newItems.splice(Math.floor(Math.random() * newItems.length), 1);
	return newItems;
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
	return [ ...array1, ...array2 ];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
	return { ...obj, [key]: val };
};

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
	let newObj = { ...obj };
	delete newObj[key];
	return newObj;
};

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
	return { ...obj1, ...obj2 };
};

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
	return (newObj = { ...obj, [key]: val });
};
