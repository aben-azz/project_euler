let Permute = require("./permutation.js");

console.time("ok")
let perm = Permute.permute([1,2,3,4,5,6,7,8,9,0]);
let sum = 0;
for (let i = 0, m; m = perm[i]; i++){
	let number = m.join("")
	if (+number.substr(1, 3) % 2 == 0 &&
		+number.substr(2, 3) % 3 == 0 &&
		+number.substr(3, 3) % 5 == 0 &&
		+number.substr(4, 3) % 7 == 0 &&
		+number.substr(5, 3) % 11 == 0 &&
		+number.substr(6, 3) % 13 == 0 &&
		+number.substr(7, 3) % 17 == 0) sum += +number;
}
console.log(sum)
console.timeEnd("ok")
//18380.478 ms
