const Prime = require("./prime.js");
console.time("oke");

let primes = Prime.sieveOfAtkin(1000000);
let prime_array = [];
for (let p in primes){
	if(primes[p]) prime_array.push(+p);
}

let isPrime = n => primes[n] == true

let sum = (i, j) => {
	let s = 0;
	for (let a = i; a <= j; a++){
		s += prime_array[a];
		if (s > 1e6) return false
	}
	return s
}

let run = () => {
	for (let j = 546; j > 0; j--){
		for (let i = 0; i < prime_array.length; i++){
			let a = sum(i, i + j)
			if(!a || !isPrime(a)) continue
			return a
		}
	}
}
console.log(run())
console.timeEnd("oke");
// 207.814ms
