let f = [];
let pasc = [];
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
pasc = pascal_triangle(20000);
console.log(pasc.length);
let B = n=>{
	let sum = 1n;
	for (let i = 0n; i <= n; i++){
		sum *= binomial(n, i)
	}
	return sum
}

let sqrt = (N )=>
{
    let n, p, low, high;
    if( 2n > N )
        return( N );
    low  = 0n;
    high = N;
    while( high > low + 1n )
    {
        n = (high + low) / 2n;
        p = n * n;
        if( N < p )
            high = n;
        else if( N > p )
            low = n;
        else
            break;
    }
    return( N == p ? n : low );
}
let D = n =>{
	n = B(n)
	let d = 0n;
    for (let i=1n; i <= sqrt(n); i++)
    {
        if (n%i == 0n)
        {
			d += i
            if (n/i != i) d += (n/i)
        }
    }
	return d
}

let S = n => {
	return cache[n] || (cache[n] = D(n) + cache[n-1n]);
}
