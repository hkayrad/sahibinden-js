import {SahibindenJs} from "../index.js";

const a = new SahibindenJs;

console.log(a.currentCategory);
a.currentCategory = a.categories[10];
console.log(a.currentCategory);
console.log(a.searchUrl);