// const {hello,ahello}=require ('./module1');
import  harry, {hello,ahello} from './module2.js';
// Importing the functions from module2.js
hello();
ahello("John");
ahello("Jane");
ahello("Doe");
ahello("Alice");
harry();
// Importing the default export
// from module2.js