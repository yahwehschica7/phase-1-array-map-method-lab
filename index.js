const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  const newSentences = []
  tutorials.forEach(function(sentence){
    const words = sentence.split(' ');
    let newWords = words.map(function(word){
      return (word[0].toUpperCase() + word.substring(1));
    })
    let newSentence = newWords.join(' ')
    newSentences.push(newSentence)
  })
  return newSentences
}
