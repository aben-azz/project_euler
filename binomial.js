let binomial = (n,k)=>{
	let nu = factorial(n);
	let de = factorial(k) * factorial(n-k);
	return (nu/de);
}

let f = [];

let factorial = n => {
  if (n == 0n || n == 1n)
    return 1n;
  if (f[n] > 0n)
    return f[n];
  return f[n] = factorial(n-1n) * n;
}

let pascal_triangle = n =>{
	let pasc = [[1n], [1n,1n]]
	for (let i = 2; i <= n; i++){
		pasc[i] = Array(i+1).fill(0n);
		for (let a = 0; a < i+1; a++){
			let first = a == 0 ? 0n : pasc[i-1] && pasc[i-1][a-1]|| 0n;
			let second =  pasc[i-1] && pasc[i-1][a] || 0n;
			pasc[i][a] = BigInt(first+second)
		}
	}
	return pasc
}
