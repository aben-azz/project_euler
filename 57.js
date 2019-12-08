global.Fraction = require('fractional').Fraction
global.a = Array(1000).fill(2)
a[0] = 1
global.xd = [];

function convert(a, i){
	if (i >= a.length) return 1
	return a[i] + (1 / ( i + 1 == a.length - 1  ? a[a.length - 1] : convert(a, i + 1)))
}

global.count = 0;
for (let i = 2; xd.length < 1000; i++){
	let p = convert(a.slice(0, i), 0)
	let frac = new Fraction(p).toString();
	let tab = frac.split("/")
	console.log(p, tab)
	tab[0] = tab[0].substr(2)
	if (tab[0].length > tab[1].length) count++;
	xd.push(tab)
}
console.log(count);
setInterval(()=>{}, 10000)
