function calculateMinCost() {
  //your code here
   let value = (document.getElementById("rope-lengths").value).split(",");
	
	let cost = 0; 
	// alert(value)
	while(value.length>=2){
		value.sort(function(a, b){return a - b});
		// alert(value+"--"+cost);
		let count = +value[0] + +value[1]; 
		cost = cost + count;
		value = value.slice(2);
		value.unshift(count);
		
	}
  
  
}  
