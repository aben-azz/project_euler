let div = n =>{
	let d = [];
    for (let i=1n; i <= sqrt(n); i++)
    {
        if (n%i == 0n)
        {
			d.push(i)
            if (n/i != i) d.push(n/i)
        }
    }
	return d
}
