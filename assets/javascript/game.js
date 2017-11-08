// list of words to guess
var wordList = [
			"drakeposting",
			"distracted_boyfriend",
			"ancient_aliens", 
			"futurama_fry", 
			"condescending wonka", 
			"overly attached girlfriend", 
			"great gatsby leo", 
			"mocking spongebob", 
			"success kid", 
			"roll safe",
			"arthur fist"]


//randomizes list of words
var randomWord = wordList[Math.floor(wordList.length * Math.random())];

// splits the word into characters
var characterWord = randomWord.split ("");

//takes each character and makes it a blank
var blanks = characterWord.map(function(i) {
	return i = ('_');
})














// var goalWord = '';

// function randomWord = {
// 	goalWord += [wordList[Math.floor(Math.random() * wordList.length)]
// }
// // function loadWords() {
// 	var words = '';
// }

// function randomWord() {
// 	goalWord = wordList[(Math.random()*list.length)];
// }

// var randomWord = [wordList[Math.floor(Math.random() * wordList.length)]
// int randomWord = (int)

// function chooseWord() {
// 	while (goalWord == '') {
// 		randomWord();
// 	}
// 	$('.goalWord').html(goalWord);
// }

