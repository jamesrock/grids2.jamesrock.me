(function() {

	var
	columns = 12,
	one = (100/columns),
	cols = [
		["1", one], 
		["2", (one*2)], 
		["3", (one*3)], 
		["4", (one*4)], 
		["5", (one*5)], 
		["6", (one*6)], 
		["7", (one*7)], 
		["8", (one*8)], 
		["9", (one*9)], 
		["10", (one*10)], 
		["11", (one*11)], 
		["12", (one*12)]
	],
	colsCount = cols.length,
	css = [],
	cssNode = document.getElementById("dynamic");

	for(var i=0;i<colsCount;i++) {
		// console.log(cols[i][0], cols[i][1]);
		css.push(".col-" + cols[i][0] + " {width:" + cols[i][1] + "%}");
	};

	css = css.join("\n");
	cssNode.innerHTML = css;
	// console.log(css);
	
})();