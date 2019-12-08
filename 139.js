function air(a, b){
	return (a*b)/2;
};
function gcd(n, m){
	let x
	while(m) x = n % m, n = m, m = x
	return n
}
function generate_pythagor(limite){
	let results = [];
	for (let a = 0; a <= Math.sqrt(limite / 2); a++){
		for (let b = 0; b <= a; b++){
			//a = 2mn, b = m²-n² et c = m²+n²
			if (a == b || gcd(a,b) != 1 || ((a & 1) && (b & 1))) continue
			let x = 2*(a*b);
			let z = (a*a) - (b*b);
			let c = (a*a) + (b*b);
			if (x+c+z < limite)
				results.push([x,z,c])
			if (x*2+c*2+z*2 < limite)
				results.push([x*2,z*2,c*2])
			if (x*3+c*3+z*3 < limite)
				results.push([x*3,z*3,c*3])
		}
	}
	return results
}

function is_valid(x, y, z){
	let total_triangle =  z*z - (air(x,y)*4)
	console.log(total_triangle, z*z, (z*z)%total_triangle == 0);
}
console.time("ok")
//is_valid(40, 42, 58);
let pyth = generate_pythagor(100000000)
console.log(pyth.length);
console.timeEnd("ok");
