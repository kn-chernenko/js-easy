// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u, y) 
// на певний символ, наприклад *.

function replaceVowels(str) {
  let result = '';
  const vowels = 'aeiouyAEIOUY';

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result += '*';
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(replaceVowels("hello world")); 
console.log(replaceVowels("Javascript")); 

module.exports = replaceVowels;