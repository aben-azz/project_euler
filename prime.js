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
let primes = {};
function isPrime(num) {
	if (primes[num] == true) return true;
	for (let i = 0, p; (p = primes[i]) < Math.sqrt(num); i++){
		if (p % num == 0) return false;
	}
    for (let i = 2; i < num; i++) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}


module.exports = {isPrime, sieveOfAtkin}
