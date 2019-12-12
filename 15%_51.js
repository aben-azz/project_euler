const Prime = require("./prime.js");

let primes = Prime.sieveOfAtkin(1000000);
let prime_array = [];
for (let p in primes){
	if(primes[p]) prime_array.push(+p);
}

let isPrime = n => primes[n] == true
