const fs = require("fs");
function sieveOfAtkin(limit){
   var limitSqrt = Math.sqrt(limit);
   var sieve = {};
   var n;
   if (2 < limit) sieve[2] = 1;
   if (3 < limit) sieve[3] = 1;
   for (let x = 1; x <= limitSqrt; x++) {
       let xx = x*x;
       for (let y = 1; y <= limitSqrt; y++) {
           let yy = y*y;
           if (xx + yy >= limit)  break;
           n = (4 * xx) + (yy);
           if (n <= limit && (n % 12 == 1 || n % 12 == 5)) sieve[n] = !sieve[n];
           n = (3 * xx) + (yy);
           if (n <= limit && (n % 12 == 7))  sieve[n] = !sieve[n];
           n = (3 * xx) - (yy);
           if (x > y && n <= limit && (n % 12 == 11)) sieve[n] = !sieve[n];
       }
   }
	for (let n = 5; n <= Math.sqrt(100000000); n++) {
		if (sieve[n]) {
			x = n * n;
			for (let i = x; i <= 100000000; i += x) sieve[i] && (sieve[i] = 0);
		}
	}
	return sieve
}
let primes = sieveOfAtkin(1000000);
let prime_array = [];
for (let p in primes){
	if(primes[p]) prime_array.push(+p);
}
console.log(prime_array.length);
consecutive = (n,i) => {
	let sum = 0;
	for (let a = i, p; (p = prime_array[a]) < n; a++){
		sum += prime_array[a];
		if (sum == n) return a+1;
	}
}
function isPrime(num) {
	if (primes[num] == true) return true;
	return false;
	// for (let i = 0, p; (p = primes[i]) < Math.sqrt(num); i++){
	// 	if (p % num == 0) return false;
	// }
    // for (let i = 2; i < num; i++) {
    //     if ( num % i === 0 ) {
    //         return false;
    //     }
    // }
    return true;
}
console.time("oke");
let max = [-1,-1];
for (let n = prime_array.length-1; n >= 0; n--){
	let reduc =  prime_array.slice(0,n).reduce((x,y)=>x+=y)
	if (reduc < 1000000) continue
	console.log(n, max, reduc);

	if (isPrime(reduc)) console.log(reduc, n)
}
console.log(consecutive(41, 0))
console.log(max)
console.timeEnd("oke");
//0[170,78149]
