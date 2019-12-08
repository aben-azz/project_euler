//vasy // BUG:
m = {}
function recursif(n, piece = 0){
	if(m[n + "," + piece]) return m[n + "," + piece]
	if(n == 0) return 1
	if(n < 0) return 0
	let o = 0
	for(let thune of [1, 2, 5, 10, 20, 50, 100, 200]){
		if(thune > n) break
		if(thune < piece) continue
		o += recursif(n - thune, thune)
	}
	return m[n + "," + piece] = o
}


jsp = (array, resultat, piece = 0)=>{
		if(m[resultat + "," + piece]) return m[resultat + "," + piece]
		if(resultat == 0) return 1
		if(resultat < 0) return 0
		let o = 0
		for(let thune of array){
			if(thune > resultat) break
			if(thune < piece) continue
			o += jsp(array, resultat - thune, thune)
		}
		return  m[resultat + "," + piece] = o
	}
}
