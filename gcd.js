let gcd = (n, m) =>{
	let x
	while(m) x = n % m, n = m, m = x
	return n
}
