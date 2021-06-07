// list of puntutation marks for english language
englishpMarks = ["?", "!", "."];
hindipMarks = []; // include the hindi puntuation marks in UTF format

// array to store finally what is to played
wordArray = new Array();

function FinalText(word, fileName)
{
	this.word = word;
	this.fileName = fileName;
}
var arrayCounter = 0;

// global variable to put lock on the animation 
// to avoid race condition
var playerAvailableToPlay = true;

/*
	Check if this is sentence end for english language that is one of the
	puntuation marks then return true
*/
function isSentenceEndHindi(letter)
{
	// check if the letter is hindi | 
	// search for UTF-8 Hindi language to get more information
	if(letter.charCodeAt(0).toString(16) == "964")
		return true;
	return false;
}

/*
	Check if this is sentence end for english language that is one of the
	puntuation marks then return true
*/
function isSentenceEndEnglish(letter)
{
	// if letter is any of the english puntuation mark then
	// return true else return false
	for(x = 0; x < englishpMarks.length; x++) {
		if(letter == englishpMarks[x])
			return true;
	}
	return false;
}

/*
	Check if current letter is space or not
*/
function isSpace(letter)
{
	// check if the letter is a space
	if(letter.charCodeAt(0).toString(16) == "20")
		return true;
	return false;
}

/*
	Function to take paragraph input by the user and tokenize it.
	Returns the words in an array
*/
function tokenizeEnglishNew(inText)
{
	return inText.match(/\b(\w+)\b/g);
}

function tokenizeEnglish(inText)
{
	flag = false; // flag will be set true if the inText text will end with pMarks
	len = inText.length; 
	
	// the input should end with a punctuation mark
	for(x = 0; x < englishpMarks.length; x++) {
		// check if last character of the sentence is pMarks or not
		if(inText[len - 1] == englishpMarks[x]) {
			flag = true;
			break;
		}
	}
	
	// if no puntuation in the end then put a puntuation mark in the sentence
	if(flag == false)
		inputText = inText + ".";
	else
		inputText = inText;
	
	// convert the given paragraph into sentences 
	// result is an array holding each sentence own its own
	result = inputText.match( /[^\.!\?]+[\.!\?]+/g );
	console.log("tokenize into sentences : " + result);
	
	// convert each sentence into words and also add the pause 
	// identifier to make the animation pause after each word
	
	// loop over the result array and replace space and end of sentence 
	// and store it newString
	newString="";
	for(y = 0; y < result.length; y++) {
		line = result[y];
		for(x = 0; x < line.length; x++) {
			if(isSpace(line[x]))
				newString = newString + ",";
			else 
				newString = newString + line[x];
		}
		newString = newString + ",EOL,"; // EOL - end of line		
	}
	
	// create array of tokens
	console.log("Processed sting : " + newString);
	return newString;
}

function tokenizeHindi(inText)
{
	// implement the function to convert into the tokens here
	return intext;
}

/*
	Query API to check if sigml file exits or not
*/
function searchForSigml(key)
{
	$.ajax({ url: 'API/sigmlAPI.php?action=search&q=' + key, 
    	async: false,
    	success: function(data) {
    		console.log("Got data for " + key + " : " + data);
    		if(data=="FALSE")
    			return false;
    		else
    			return data;
     	}
    });
}
 
function test(testString) {
	testString = testString.removeStopWords();
   	return testString
}

String.isStopWord = function(word) {
	var regex = new RegExp("\\b"+word+"\\b","i");

	if(stoplist.toString().search(regex) < 0) {
		return false;
	} else {
		return true;	
	}
}

String.prototype.removeStopWords = function() {
	words = new Array();
	
	this.replace(/\b[\w]+\b/g, function($0) {
		if(!String.isStopWord($0)) {
			words[words.length] = $0.trim();
		}
	}); 
	return words.join(" ");
}

var stoplist = ['', 'therein', 'whither', 'usefulness', 'unlikely', 'auth', 'mean', 'ups', 
'seem', 'stop', 'least', 'anyways', 'likely', 'says', 'containing', 'plus', 'anywhere', 
'am', 'off', 'anyhow', 'during', 'particularly', 'everybody', 'system', 'must', 
'primarily', 'noted', 'ran', 'u', 'aren', 'third', 'into', 'shes', 'some', 'j', 
'words', 'eg', 'section', 'r', 'unto', 'sure', 'z', 'within', "wasn't", 'recently', 
'w', 'a', 'able', 'regarding', 'actually', 'therefore', 'causes', "don't", 'edu', 
'else', 'is', 'que', 'move', 'outside', 'obtain', 'results', 'almost', 'contain', 
'hi', 'nor', 'potentially', 'youre', 'lately', 'sec', 'along', 'thereby', 'others', 
'done', 'becomes', 'ninety', 'affecting', 'ok', "she'll", 'shown', 'theres', 
'twelve', 'hed', 'found', 'mainly', 'amongst', 'saw', "doesn't", 'ed', 'herein', 
'even', 'km', 'rather', 'instead', 'value', 'seemed', 'b', 'sub', 'perhaps', 
'useful', 'somewhat', 'throughout', 'became', 'namely', 'ord', 'ever', 
'sufficiently', 'nothing', 'nowhere', 'immediately', 'anyone', 'largely', 
'part', 'that', "we've", "there'll", 'way', 'full', 'mg', 'theyd', 'certain', 
'formerly', 'be', 'known', 'normally', 'hasnt', 'accordance', 'hence', 'lest', 
'con', 'y', 'makes', 'thereto', 'world', 'i', 'kg', 'necessary', 'qv', 'something', 
'if', 'present', 'importance', 'mostly', 'thereafter', 'wed', "you've", 'nonetheless', 
'adj', 'o', 'biol', 'through', 'ours', 'knows', 'specify', 'thats', 'm', 'seen', 'tip', 
'wants', "hasn't", 'anymore', 'soon', 'several', 'enough', 'therere', 'vs', 'meantime', 
'okay', 'resulting', "won't", 'away', 'f', 'overall', 'made', 'follows', 'too', 'whereafter', 
'miss', 'though', 'regards', 'somebody', 'wheres', 'everywhere', "i'll", 'rd', 'theyre', 
'various', 'bottom', 'whod', 'whim', 'being', 'im', 'shall', 'proud', 'theirs', 'nobody', 
'thank', 'information', 'using', "can't", 'given', 'however', 'approximately', 'besides', 
'oh', 'already', 'nevertheless', 'beyond', 'inc', 'provides', 'itself', 'apparently', 
'describe', 'neither', 'ending', 'tries', 'while', 'really', 'latterly', 'had', 'ask', 
'merely', 'whereupon', "they'll", 'hes', 'against', 'beginning', 'begins', 'id', 
'thereupon', 'suggest', "you'll", 'affects', 'whatever', 'tends', 'each', 'poorly', 
'afterwards', 'sixty', 'another', 'hereby', 'lets', 'needs', 'thin', 'most', 'were', 
'said', 'whos', 'serious', 'th', 'predominantly', 'unlike', 'except', 'thousand', 
'ex', 'hereafter', 'let', 'substantially', 'somewhere', 'herself', 'itd', 'affected', 
'asking', 'former', 'beginnings', 'quickly', 'anyway', 'looks', 'elsewhere', 
'meanwhile', 'thus', 'bill', 'ff', 'amount', 'strongly', "haven't", 'much', 'q', 
'effect', 'immediate', 'arent', 'particular', 'might', 'also', 'latter', "that'll", 
'thanx', 'showed', 'awfully', 'saying', 'taking', 'end', 'ltd', 'ca', 'relatively', 
'last', 'interest', 'somethan', 'widely', 'since', 'nearly', 'still', 'necessarily', 
'everyone', 'fix', 'couldnt', 'self', 'sup', 'obviously', 'have', 'com', "who'll", 
'et-al', 'g', 'whence', 'shed', 'took', 'give', 'quite', 'followed', 'whereas', 
'beforehand', 'throug', 'wherever', 'ts', 'willing', 'unless', 'whoever', 'youd', 
'fifth', 'hereupon', 'previously', 'thence', 'because', 'everything', 'downwards', 
'whomever', 'thou', 'h', 'taken', 'mill', 'beside', 'cause', 'resulted', 'due', 
'brief', 'x', 'otherwise', 'wherein', 'does', 'just', 'vols', 'fire', 'believe', 
'someone', "wouldn't", 'ml', 'shows', 'www', 'either', 'towards', 's', 'significant', 
'especially', 'heres', 'similar', 'kept', 'mrs', 'viz', 'whenever', 'briefly', 
"it'll", 'n', 'aside', "shouldn't", 'e', 'should', 'inward', 'specifying', 'forty', 
'owing', 'readily', 'looking', 'regardless', 'specifically', 'myself', 'used', 
'furthermore', 'following', 'sometime', 'sincere', 'seeing', 'et', 'slightly', 'nay', 
'non', 'mr', 'onto', 'been', 'na', "they've", 'front', 'hither', 'gotten', 'ie', 
'amoungst', 'both', "'ve", 'accordingly', 'means', 'usefully', 'un', 'successfully', 
'as', 'gave', 'pp', 'ought', 'an', "i've", 'nd', 'de', 'arise', 'goes', 'howbeit', 
'sent', 't', 'showns', 'becoming', 'forth', 'vol', 'hid', 'such', 'contains', 'thered', 
'thereof', 'although', 'only', 'mine', 'usually', 'c', 'side', 'possibly', 'ref', 'eighty', 
'til', 'moreover', 'placed', 'certainly', 'anybody', 'has', 'seeming', 'whose', 'ourselves', 
'similarly', 'per', 'came', 'probably', 'invention', 'selves', 'recent', "there've", "we'll", 
'would', 'respectively', 'ones', 'pages', 'co', 'thickv', 'somehow', 'twice', "didn't", 'whats', 
'look', 'giving', 'having', 're', 'thoughh', "'ll", 'significantly', 'uses', 'd', "that've", 
'but', 'promptly', 'refs', 'according', 'did', 'gives', 'happens', 'so', 'nos', 'k', 'and', 'v', 
'specified', 'p', 'related', 'whether', 'via', 'could', "what'll", 'once', 'back', 'omitted', 
'million', 'yet', 'indeed', 'fify', 'unfortunately', 'top', 'mug', 'seems', 'abst', 'whereby', 
'noone', 'thanks', 'index', 'whom', "weren't", 'added', 'further', 'tried', 'ah', "isn't", 
'truly', 'etc', 'obtained', 'thru', 'upon', 'hardly', 'its', 'l']


$("#btnRun").click(function () {
	// read the input paragraph from the text box
	// trim it to remove any spaces from sides

	// var inputText = new URLSearchParams(window.location.search).get('selectedText');
	var inputText = $("#inputText").val().trim();


	var sents = inputText.replace(/\.+/g,'.|').replace(/\?/g,'?|').replace(/\!/g,'!|').split("|");
	sents.pop();


	var i = 0;
	var doc = [];
	sents.forEach(function(sentencz) {
		var wordz = sentencz.split(' ').filter(function(n){
			return $.inArray(n, stoplist) == -1
		});
		doc.push({
				sentence : sentencz,
				words: wordz,
				score: 0
		}
		);
		i++;
	});


	doc.forEach(function(arrayItem) {    
		var count = 0;
		arrayItem.words.forEach(function(word) {
			var match = word;
			doc.forEach(function(arrayItem2) {
				arrayItem2.words.forEach(function(word2) {
				if(word2 === match)
					count++;
				});
			});
		});

		count = count/arrayItem.words.length;
		arrayItem.frequency = count;
	});


	doc.sort(function(a, b) {
		return b.frequency - a.frequency;
	});


	if(doc.length >= 5) {
		console.log('working')
		inputText = sents[0] + doc[1].sentence + doc[2].sentence  + doc[3].sentence  + doc[4].sentence;
		console.log(inputText);
	} else {
		console.log(inputText);
	}


	console.log(test(inputText));

	// read the language that has been set
	lang = "English"; // using english for default
	var tokens;
	
	if(lang == "English") {
		
		// tokenize the english paragraph
		// tokenString = tokenizeEnglish(inputText);
		// tokens = tokenString.split(',');
		tokens = tokenizeEnglishNew(inputText);
		console.log(tokens);
		console.log("Got tokens"); 
		
	} else if(lang == "Hindi") {
		
		// tokenize the english paragraph
		tokenString = tokenizeHindi(inputText);
		tokens = tokenString.split(',');
		console.log("Got tokens"); 	
		
	}
		
	// remove empty values from tokens
	for(x = 0; x < tokens.length; x++) {
		t = tokens[x];
		
		if(t == "")
			tokens.splice(x, 1);
	}
	
	console.log(tokens);

	// process tokens based on language settings
	// use the script to generate the sigml files available and if
	// word file is available use word file less speak as letter based
	// list of sigmlfile is available in sigmlArray.js
	
		
	for(x = 0; x < tokens.length; x++) {
		// process each token
		t = tokens[x];	
		if(t == "EOL")
			continue;
		// convert token to lower case for seaching in the database
		// search for name and it will return filename if it will exists
		t = t.toLowerCase();
		t = t.replace('.',""); // remove the puntuation from the end
		tokens[x] = t;
	}
	
	console.log(tokens);
	
	// reset the wordArray and arrayCounter here
	wordArray = [];
	arrayCounter = 0;
	
	for(x = 0; x < tokens.length; x++) {
		wordfoundflag = false;
		t = tokens[x];
		for(y = 0; y < sigmlList.length; y++) {
			if(sigmlList[y].name == t) {
				wordArray[arrayCounter++] = new FinalText(t, sigmlList[y].fileName);
				wordfoundflag = true;
				break;
			}
		}
		
		// if word not found then add chars - starts here
		if(wordfoundflag == false) {
			wordlen = t.length;
			for(p = 0; p < wordlen; p++) {
				q = t[p];
				for(k = 0; k < sigmlList.length; k++) {
					if(sigmlList[k].name == q) {
						wordArray[arrayCounter++] = new FinalText(q, sigmlList[k].fileName);
						break;
					}
				}				
			}
		}
		// if not word found part ends here
	}
	
	
	console.log(wordArray);
	console.log(wordArray.length);
	
	$("#debugger").html(JSON.stringify(wordArray));
	
	// wordArray object contains the word and corresponding files to be played
	// call the startPlayer on it in syn manner
	totalWords = wordArray.length;
	i = 0;
	
	var int = setInterval(function () {
		if(i == totalWords) {
			if(playerAvailableToPlay) {
				clearInterval(int);
				finalHint = inputText;
				$("#textHint").html(finalHint);
			}			
		} else {
			if(playerAvailableToPlay) {
				playerAvailableToPlay = false;				
				startPlayer("SignFiles/" + wordArray[i].fileName);
				$("#textHint").html(wordArray[i].word);
				i++;
			}
		}
	}, 3000);
});
