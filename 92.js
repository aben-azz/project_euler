//let m = {};

let chain = (start) => {
	//if (m[start]) return m[start]
	let a = start
	let p = 0;
	//let arr = [];
	while (true){
		//if (m[p]) return m[p]
		//if (m[a]) return m[a]
        p = [...a.toString()].map(x=>x*x).reduce((x,y)=>x+=y);
		//arr.push(a);
		if (p == 89 || p == 1) break
		else a = p
    }
//	m[a] = p;
//	arr.forEach(u=>m[u]=p);
	return p
}
console.time("ok")
let count = 0;
for (let i = 1; i < 10000000; i++)
{
	let a = chain(i);
	if (a == 89) count++
}
console.log(count)
console.timeEnd("ok")
