Player = class {
	constructor(...cards){
		this.cards = [...cards];
		this.high_card = "";//
		this.one_pair = ["", false];//
		this.two_pairs = [["",""], false];//
		this.three_kind = ["", false];//
		this.straight = true;//
		this.flush = false;//
		this.full_house = [[], "", false];//
		this.four_kind = ["", false];//
		this.straight_flush = false;//
		this.royal = false;//
		this.init_cards();
	}
	init_cards(){
		let cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
		this.cards = this.cards.map(x=>[!x.indexOf("10") ? "10" : x[0], !x.indexOf("10") ? x[2] : x[1]])
		let max = [-1,-1]
		this.cards.forEach(card=>{
			let index = cards.indexOf(card[0]);
			if (max[0] < index) max = [index, card[0]];
		})
		this.high_card = cards.indexOf(max[1]);
		this.cards.forEach(card=>{
			let count = this.cards.reduce((x,y)=>x+=y[0] == card[0] ? 1 : 0, 0);
			if (count == 2 && !this.one_pair[1]) this.one_pair = [card[0], true];
			//count == 2 && console.log(this.one_pair[1], card[0], this.one_pair[0])
			if (count == 2 && this.one_pair[1] && card[0] != this.one_pair[0]) this.two_pairs = [[this.one_pair[0], card[0]], true]
			if (count == 3 && !this.three_kind[1]) this.three_kind = [card[0], true];
			//console.log(this.four_kind[1])
			if (count == 4 && !this.four_kind[1]) this.four_kind = [card[0], true];
		})
		this.flush =	this.cards[0][1] == this.cards[1][1] && this.cards[2][1] == this.cards[1][1] && this.cards[4][1] == this.cards[3][1] && 						this.cards[3][1] == this.cards[1][1];
		this.royal = this.flush && this.cards.map(x=>x[0]).join("") == "10JQKA";
		this.full_house = this.three_kind[1] && this.one_pair[1];
				let arr = this.cards.map(x=>cards.indexOf(x[0]))
		for (let i = 1; i < arr.length; i++){
			if (arr[i] != (arr[i - 1] + 1)){
				this.straight = false;
				break
			}
		}
		this.straight_flush = this.straight && this.flush
	}
	print_rank(){
		console.log(`
		this.high_card = ${this.high_card},
		this.one_pair = ${this.one_pair},
		this.two_pairs = ${this.two_pairs},
		this.three_kind = ${this.three_kind},
		this.straight = ${this.straight},
		this.flush = ${this.flush},
		this.full_house = ${this.full_house},
		this.four_kind = ${this.four_kind},
		this.straight_flush = ${this.straight_flush},
		this.royal = ${this.royal},
		`)
	}
}

Party = class {
	constructor(p1, p2){
		this.winner = "";
		this.p1 = p1;
		this.p2 = p2;
		this.cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
		this.init();
	}
	compare_high(){
		for (let i = 4; i >= 0; i--){
				let ip1 = this.cards.indexOf(this.p1.cards[i][0]);
				let ip2 = this.cards.indexOf(this.p2.cards[i][0]);
				//console.log(this.p1.cards[i][0], ip1, "vs", this.p2.cards[i][0], ip2)
				if (ip1 > ip2) return "p1";
				else if (ip2 > ip1) return "p2";
		}
	}
	get gwinner(){
		return this.winner;
	}
	init (){
		if (this.p1.royal || this.p2.royal){
			if (this.p1.royal && !this.p2.royal) this.winner = "p1"
			else if (this.p2.royal && !this.p1.royal) this.winner = "p2"
			else this.winner = this.compare_high;
		} else if (this.p1.straight_flush || this.p2.straight_flush){
			if (this.p1.straight_flush && !this.p2.straight_flush) this.winner = "p1";
			else if (this.p2.straight_flush && !this.p1.straight_flush) this.winner = "p2";
			else this.winner = this.compare_high();
		} else if (this.p1.four_kind[1] || this.p2.four_kind[1]){
			if (this.p1.four_kind[1] && !this.p2.four_kind[1]) this.winner = "p1";
			else if (this.p2.four_kind[1] && !this.p1.four_kind[1]) this.winner = "p2";
			else {
				let ip1 = this.cards.indexOf(this.p1.four_kind[0]);
				let ip2 = this.cards.indexOf(this.p2.four_kind[0]);
				if (ip1 > ip2) this.winner = "p1";
				else if (ip2 > ip1) this.winner = "p2";
				else this.winner = this.compare_high();
			}
		} else if (this.p1.full_house || this.p2.full_house){
			if (this.p1.full_house && !this.p2.full_house) this.winner = "p1";
			else if (this.p2.full_house && !this.p1.full_house) this.winner = "p2";
			else {
				let p1_three = this.cards.indexOf(this.p1.three_kind[0]);
				let p2_three = this.cards.indexOf(this.p2.three_kind[0]);
				if (p1_three > p2_three) this.winner = "p1"
				else if (p2_three > p1_three) this.winner = "p2"
				else {
					let p1_pair = this.cards.indexOf(this.p1.one_pair[0]);
					let p2_pair = this.cards.indexOf(this.p2.one_pair[0]);
					if (p1_pair > p2_pair) this.winner = "p1"
					else if (p2_pair > p1_pair) this.winner = "p2"
					else this.winner = this.compare_high();
				}
			}
		} else if (this.p1.flush || this.p2.flush){
			if (this.p1.flush && !this.p2.flush) this.winner = "p1";
			else if (this.p2.flush && !this.p1.flush) this.winner = "p2"
			else this.winner = this.compare_high();
		} else if (this.p1.straight || this.p2.straight){
			if (this.p1.straight && !this.p2.straight) this.winner = "p1";
			else if (this.p2.straight && !this.p1.straight) this.winner = "p2"
			else this.winner = this.compare_high();
		} else if (this.p1.three_kind[1] || this.p2.three_kind[1]){
			if (this.p1.three_kind[1] && !this.p2.three_kind[1]) this.winner = "p1";
			else if (this.p2.three_kind[1] && !this.p1.three_kind[1]) this.winner = "p2"
			else {
				let p1_three = this.cards.indexOf(this.p1.three_kind[0]);
				let p2_three = this.cards.indexOf(this.p2.three_kind[0]);
				if (p1_three > p2_three) this.winner = "p1"
				else if (p2_three > p1_three) this.winner = "p2"
				else this.winner = this.compare_high();
			}
		} else if (this.p1.two_pairs[1] || this.p2.two_pairs[1]){
			if (this.p1.two_pairs[1] && !this.p2.two_pairs[1]) this.winner = "p1";
			else if (this.p2.two_pairs[1] && !this.p1.two_pairs[1]) this.winner = "p2"
			else {
				let max_p1 = Math.max(this.cards.indexOf(this.p1.two_pairs[0][0]), this.cards.indexOf(this.p1.two_pairs[0][1]));
				let max_p2 = Math.max(this.cards.indexOf(this.p2.two_pairs[0][0]), this.cards.indexOf(this.p2.two_pairs[0][1]));
				if (max_p1 > max_p2) this.winner = "p1"
				else if (max_p2 > max_p1) this.winner = "p2";
				else this.winner = this.compare_high();
			}
		} else if (this.p1.one_pair[1] || this.p2.one_pair[1]){
			if (this.p1.one_pair[1] && !this.p2.one_pair[1]) this.winner = "p1";
			else if (this.p2.one_pair[1] && !this.p1.one_pair[1]) this.winner = "p2"
			else {
				let p1_pair = this.cards.indexOf(this.p1.one_pair[0]);
				let p2_pair = this.cards.indexOf(this.p2.one_pair[0]);
				if (p1_pair > p2_pair) this.winner = "p1"
				else if (p2_pair > p1_pair) this.winner = "p2"
				else this.winner = this.compare_high();
			}
		} else this.winner = this.compare_high();
	}
}
