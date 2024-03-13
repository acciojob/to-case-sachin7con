function toCase(text) {
  //SGN write your code here
	let dash = "-";
	let str = "";
	str += text.toLowerCase() + dash + text.toUpperCase();
	return str;
}


// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
