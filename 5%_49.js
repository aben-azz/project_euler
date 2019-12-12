const Prime = require("./prime.js");

let primes = Prime.sieveOfAtkin(9999);

let prime_array = [];

for (let a in primes)
	primes[a] && a >= 1000 && a <= 9999 && prime_array.push(+a);

console.time("ok");
let run = () => {
	for (let i = 0, first; first = prime_array[i]; i++){
		for (let j = 0,second; (second = prime_array[j]) < first; j++){
			for (let k = 0,third; (third = prime_array[k]) < second; k++){
				if (first - second == second - third) {
					let sortt = +[...third.toString()].sort((x,y)=>x-y).join("");
					let sorts = +[...second.toString()].sort((x,y)=>x-y).join("");
					if (sortt != sorts) continue
					let sortf = +[...first.toString()].sort((x,y)=>x-y).join("");
					if (sorts != sortf) continue
					if (third == 1487) continue
					return third + "" + second + "" + first;
				}
			}
		}
	}
	return "none"
}
console.log(run());
console.timeEnd("ok")
//935.992ms
