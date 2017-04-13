var quotesArray = [
  ["He was also unfailingly generous towards other fantasists, always ready to offer them support and encouragement. My own ICE & FIRE series might never have found its audience without the cover quote that Jim was so kind as to provide, back when A GAME OF THRONES was first published. I will always be grateful to him for that.", "~ George R.R. Martin"],
  ["Whenever you find yourself on the side of the majority, it is time to pause and reflect.", "~ Mark Twain"],
  ["Your net worth to the world is usually determined by what remains after your bad habits are subtracted from your good ones.", "~ Benjamin Franklin"],
  ["Everything is funny, as long as it's happening to somebody else.", "~ Will Rogers"],
  ["I am tomorrow, or some future day, what I establish today. I am today what I established yesterday or some previous day.", "~ James Joyce"]
];

function rndmQuote() {
  var rndmNum = Math.floor(Math.random()*quotesArray.length);
  var quote = quotesArray[rndmNum][0];
  var author = quotesArray[rndmNum][1];
    document.getElementById("rndmquote").innerHTML = quote;
    document.getElementById("rndmquoteauth").innerHTML = author;
    document.getElementById("tweetquote").setAttribute("href", "https://twitter.com/intent/tweet?text="+quote+" "+author);
};



//It is probably better to build the tweet functionality into the rndmQuote function. Perhaps assign the random array values to variables within the function then adjust the href attribute.

/*function twitterQuote() {
  var tweet = document.getElementById("rndmquote").innerHTML + " " + document.getElementById("rndmquoteauth").innerHTML; 
  return tweet;
};*/
