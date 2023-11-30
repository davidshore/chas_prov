// 2. String-arrays (3p)
// Skriv klart funktionen filterWordsWithLetterA som tar en array med strängar som
// input och returnerar en array med bara de strängar som innehåller "a" (bara liten bokstav).
// tips: använd indexOf eller includes

function filterWordsWithLetterA(words) {
  //Din kod här
  return words.filter((word) => word.indexOf("a") != -1);
}

function filterWordsWithLetterA2(words) {
  const wordsWithA = [];

  words.forEach((word) => {
    if (word.includes("a")) {
      wordsWithA.push(word);
    }
  });

  return wordsWithA;
}

console.log(filterWordsWithLetterA(["Programming", "is", "great!"])); // ska logga ["Programming", "great!"]
