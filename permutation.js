let permute = (array) => {
	let permut = [];
	array.forEach((e,i,t)=>{
		let a = permute([...t.slice(0, i), ...t.slice(i + 1)])
		permut = a.length ? permut.concat(a.map(u=>[e].concat(u))) : [e]
	})
	return permut;
}

module.exports = {permute}
