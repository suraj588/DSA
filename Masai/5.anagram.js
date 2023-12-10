// 5. Check whether two given strings X and Y of sizes N and M respectively are anagram of each other or not.
// Anagrams :- Two provided strings should have matching characters and in the same frequency.
// "abcade", "dbacae"

//  L1 === L2
// 

const isAnagram = (firstString, secondString) => {
  if (firstString.length !== secondString.length) {
    return false;
  }
  const firstStringCharacters = {};
  const secondStringCharacters = {};

  const insertCharacter = (characterObj, character) => {
    if (characterObj[character]) {
      characterObj[character]++;
    } else {
      characterObj[character] = 1;
    }
  };

  for (let i = 0; i < firstString.length; i++) {
    const firstStringCharacter = firstString[i];
    const secondStringCharacter = secondString[i];

    insertCharacter(firstStringCharacters, firstStringCharacter);
    insertCharacter(secondStringCharacters, secondStringCharacter);
  };

  for (const key in firstStringCharacters) {
    if ((!secondStringCharacters[key]) || (firstStringCharacters[key] !== secondStringCharacters[key])) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("abcade", "dacabe"));

