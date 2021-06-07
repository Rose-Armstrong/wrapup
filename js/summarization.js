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

var sents = text.replace(/\.+/g,'.|').replace(/\?/g,'?|').replace(/\!/g,'!|').split("|");
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
    text = sents[0] + doc[1].sentence + doc[2].sentence  + doc[3].sentence  + doc[4].sentence;
    console.log(text);
} else {
    console.log(text);
}

console.log(test(text));