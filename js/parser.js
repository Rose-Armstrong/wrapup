
function isSpace(letter)
{
	// check if the letter is a space
	if(letter.charCodeAt(0).toString(16) == "20")
		return true;
	return false;
}


$("#process").click(function () {
	line = $("#line").val();
	len = line.length;
	newString = "";
	
	// loop over the input and replace space and end of sentence and store it
	// newString
	for(x = 0; x < len; x++) {
		if(isSpace(line[x]))
			newString = newString + ",";
		else 
			newString = newString + line[x];
	}
	
	// create array of tokens
	tokens = newString.split(',');
	displayString = "";
	
	for(x = 0; x < tokens.length; x++) {
		// escape empty tokens
		if(tokens[x] == "")
			continue; 
		displayString = displayString + "[" + x + "] --> "+ tokens[x] + "\n";
	}
	
	$("#result").val("");	
	$("#result").val(displayString);
});
