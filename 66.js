let Decimal = require("decimals.js");
 contFrac = (x, k)=>{
    cf = []
    q = Math.floor(x)
    cf.push(q)
    x = x - q
    i = 0
    while (i < k){
        q = Math.floor(1 / x)
		if (q < 1000000) cf.push(q)
		else break ;
        x = 1 / x - q
        i = i + 1
    }
    return cf
}


function convert(a, i){
	if (i >= a.length) return 1
	return a[i] + (1 / ( i + 1 == a.length - 1  ? a[a.length - 1] : convert(a, i + 1)))
}

trouve = x =>{
    for (let i = 0; true; i++){
        for (let j = 0; j < i; j++){
            if (i/j == x){
                return [i,j];
            }
        }
    }
}

dio = D =>{
	let convergents = contFrac(Math.sqrt(D), 15);
	for (let i = 1; i < convergents.length; i++){
		let [x,y] = trouve(convert(convergents.slice(0,i), 0));
		if ((x*x) - (D*(y*y)) == 1){
			return ([x,y]);
		}
	}
	return convergents;
}


function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    return arr; // use arr result on your own
}
primes=display(50000)
tab=[];hard = () => {
    for (let a = 0, x; x =  primes[a]; a++){
        for (let b = 0, y; y = primes[b]; b++){
            for (let c = 0, z; z = primes[c]; c++){
                let i = x*x + (y*y*y) + (z*z*z*z)
                
                if (i < 50000000) tab.push(i);
            }
        }
    }
};hard();tab