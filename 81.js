let matrix = [
	[131, 673, 234, 103, 18],
	[201, 96, 342, 965, 150],
	[630, 803, 746, 422, 111],
	[537, 699, 497, 121, 956],
	[805, 732, 524, 37, 331]]
//matrix = matrix.split("\n").map(x=>x.split(",").map(x=>+x))
for (let i = matrix[0].length - 1; i >= 0; i--){
	for (let j = matrix.length - 1; j >= 0; j--){
		//console.log(j,i)
		let up = matrix[j-1] && matrix[j-1][i] || Infinity
		let down = matrix[j+1] && matrix[j+1][i] || Infinity
		let right = matrix[j] && matrix[j][i+1] || Infinity
		matrix[j][i] += Math.min(up, down, right)
		console.log(matrix[j][i], up, down, right);
	}
	console.log()
}
console.log(matrix)
//131 201 630 537 805
